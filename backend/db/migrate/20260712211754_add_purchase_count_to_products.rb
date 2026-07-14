class AddPurchaseCountToProducts < ActiveRecord::Migration[8.1]
  def change
    add_column :products, :purchase_count, :integer, default: 0
  end
end
