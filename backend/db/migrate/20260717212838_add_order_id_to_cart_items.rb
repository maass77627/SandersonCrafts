class AddOrderIdToCartItems < ActiveRecord::Migration[8.1]
  def change
    add_reference :cart_items, :order, null: false, foreign_key: true
  end
end
