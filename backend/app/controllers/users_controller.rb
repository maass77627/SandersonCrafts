class UsersController < ApplicationController

    def index
        users = User.all
        render json: users
    end

    def create
        
        user = User.create!(user_params)
        render json: user, status: :created
    end 

    def show
        user = User.find_by(id: session[:user_id])
         if user
            render json: user
         else
            render json: { error: "Not authorized"}, status: :unauthorized
         end

    end


    private

    def user_params
        params.permit(:name, :password, :email, :password_confirmation, :admin)

    end
end
