class ActuallyDropCartTables < ActiveRecord::Migration[8.1]
  def change
    drop_table :cart_items, if_exists: true
    drop_table :carts, if_exists: true
  end
end
