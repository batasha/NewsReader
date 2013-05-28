class FeedsController < ApplicationController
  respond_to :json
  respond_to :html, only: [:index]

  def index
    if params[:user_id]
      @user = User.find(params[:user_id])
      @feeds = @user.feeds
    else
      @feeds = Feed.all
    end

    respond_to do |format|
      format.json { render json: @feeds }
      format.html { render :index }
    end

  end

  def create
    @feed = Feed.new(params[:feed])

    if @feed.save
      render json: @feed
    else
      render json: @feed.errors, status: 422
    end
  end

  def show
    @feed = Feed.includes(:entries).find(params[:id])
    @feed.update_entries
    render json: @feed.to_json(include: :entries)
  end
end