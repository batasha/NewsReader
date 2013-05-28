class Entry < ActiveRecord::Base
  attr_accessible :title, :link, :description, :comments, :guid
  attr_accessible :feed_id, :pubDate

  belongs_to :feed

  validates :title, :link, presence: true
  validates :guid, uniqueness: true

  def pubDate=(value)
    self.pub_date = value
  end
end