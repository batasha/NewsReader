class User < ActiveRecord::Base
  attr_accessible :name, :email, :feeds

  has_many :subscriptions
  has_many :feeds, through: :subscriptions

  validates :name, :email, presence: true
end