class CreateEntries < ActiveRecord::Migration
  def change
    create_table :entries do |t|
      t.string :title
      t.string :link
      t.text :description
      t.string :comments
      t.datetime :pub_date
      t.timestamps
    end
  end
end
