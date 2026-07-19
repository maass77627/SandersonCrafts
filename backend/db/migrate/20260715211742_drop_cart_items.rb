class DropCartItems < ActiveRecord::Migration[8.1]
  def change
    drop_table :cart_items
  end
end
