class ProductsController < ApplicationController

    def index
        products = Product.all
            case params[:sort]
            # when "none"
        #    products = Product.all
            when "highest_reviews"
                products = products.sort_by {|product| product.average_rating || 0}.reverse
                # products = Product.highest_rated
            when "most_purchased"
                products = products.order(purchase_count: :desc)
            when "price_high"
                products = products.order(price: :desc)
            when "price_low"
               products = products.order(:price)
            when "newest"
                products = products.order(created_at: :desc)           
             end

        # render json: products, include: reviews, methods: [:average_rating]
        render json: products, include: :reviews, methods: [:average_rating]

    end

    def create
        product = Product.create(product_params)
        
        if product.valid?
        render json: product, status: :created
        else
            render json: {errors: product.errors.full_messages}, status: :unprocessable_entity
    
        end

    end

    def update
        product = Product.find_by(id: params[:id])
        if product
            product.update(product_params)
            render json: product
        else
            render json: {error: "Product not Found"}, status: :not_found
        end

    end

    def best_sellers
       products = Product.best_sellers
       render json: products

    end



    # def update



    # end

    def destroy
       product = Product.find_by(id: params[:id])
       if product
       product.destroy
       head :no_content
       else
        render json: {error: "Product not found"}, status: :not_found
       end
    end

    def show
        product = Product.find_by(id: params[:id])
        if product
            render json: product, methods: [:average_rating], include: :reviews
        else
            render json: {error: "Product not found"}, status: :not_found
        end
    end

    private

    def product_params
        params.permit(:name, :price, :description, :image_url, :inventory_count, :category)

    end
end
