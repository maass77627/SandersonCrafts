class RemoveCartIdFromCartItems < ActiveRecord::Migration[8.1]
  def change
    remove_column :cart_items, :cart_id, :integer
  end
end
