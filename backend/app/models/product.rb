class Product < ApplicationRecord
    # has_many :cart_items
    # has_many :carts, through: :cart_items
    has_many :order_items
    # has_many :orders, through: :order_items
    has_many :reviews, dependent: :destroy
   


    def average_rating
        self.reviews.average(:rating)

    end

    def self.highest_rated
        self.order(average_rating)

    end

    def self.best_sellers
        self.order(purchase_count: :desc).limit(10)

    end
end
