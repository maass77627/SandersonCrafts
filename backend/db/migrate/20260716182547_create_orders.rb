class CreateOrders < ActiveRecord::Migration[8.1]
  def change
    create_table :orders do |t|
      t.references :user, null: false, foreign_key: true
      t.decimal :subtotal
      t.decimal :tax
      t.decimal :shipping_cost
      t.decimal :total_price
      t.string :status
      t.string :shipping_name
      t.string :shipping_address
      t.string :shipping_city
      t.string :shipping_state
      t.string :shipping_zip
      t.string :shipping_country
      t.string :payment_status
      t.string :stripe_payment_intent_id

      t.timestamps
    end
  end
end
