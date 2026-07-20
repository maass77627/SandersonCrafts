class SessionsController < ApplicationController


    def create
         

        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id 
            render json: user, status: :ok
        else
            render json: { error: "Invalid name or password"}, status: :unauthorized


        end
    end


    def show
        user = User.find_by(id: session[:user_id])

        render json: user
       end
     def destroy
       session.delete(:user_id)

    render json: { message: "Logged out" }
  end
end
