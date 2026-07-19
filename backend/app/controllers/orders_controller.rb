class OrdersController < ApplicationController

    def index
        orders = Order.includes(:cart_items, :user)
        render json: orders, include: {
            cart_items: {include: :product},
            user: {}
        }

    end


    def create
        order = Order.new(order_params)

        if order.save
            puts "ITEMS RECEIVED:"
            puts params[:items].inspect
            params[:items].each do |item|
            order.cart_items.create(
            product_id: item[:id],
            quantity: item[:quantity]
            )
             end

            render json: order, status: :created
        else
            render json: {errors: order.errors.full_messages}, status: :unprocessable_entity

        end
       end




    private

    def order_params
         params.permit(:user_id, :subtotal, :shipping_cost, :total_price, :status, :shipping_name, :shipping_address, :shipping_city, :shipping_state, :shipping_country, :shippin_zip, :payment_status, :stripe_payment_intent_id, :items)
    end
end
