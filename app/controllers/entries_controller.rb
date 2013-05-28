class EntriesController < ApplicationController
  def index
    @feed = Feed.find(params[:feed_id])
    @feed.update_entries
    @entries = @feed.entries.select { |entry| !entry.id.nil? }

    respond_to do |format|
      format.json { render json: @entries }
    end
  end
end