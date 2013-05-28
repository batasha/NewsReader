class CreateSubscriptions < ActiveRecord::Migration
  def change
    create_table :subscriptions do |t|
      t.integer :user_id
      t.integer :feed_id
    end

    add_index :subscriptions, :user_id
    add_index :subscriptions, :feed_id
  end
end
