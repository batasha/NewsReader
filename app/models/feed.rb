class Feed < ActiveRecord::Base
  attr_accessible :title, :link, :subscribers

  has_many :entries
  has_many :subscriptions
  has_many :subscribers, through: :subscriptions, class_name: "User"
  accepts_nested_attributes_for :entries

  validates :title, presence: true

  def update_entries
    require 'open-uri'
    params = Array.new(25) {Hash.new}
    feed = SimpleRSS.parse(open(self.link))

    feed.entries.each_with_index do |entry, i|
      Entry.accessible_attributes.each do |attr|
        params[i][attr.to_sym] = entry[attr.to_sym] unless attr == ""
      end
    end

    self.entries.create(params)
  end
end