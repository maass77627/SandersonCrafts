class ReviewsController < ApplicationController

def index

    reviews = Review.all
    render json: reviews, include: [:user, :product]

end

def create
    review = Review.create(review_params)
   if review.valid?
    render json: review, status: :created
   else
    render json: {errors: review.errors.full_messages}, status: :unprocessable_entity


   end
end

def show
    review = Review.find_by(id: params[:id])
    if review 
         render json: review
    else
        render json: {error: "Review not Found"}, status: :not_found

    end
end


private

def review_params
params.permit(:comment, :rating, :product_id, :user_id)
end

end
