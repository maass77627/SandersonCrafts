Rails.application.routes.draw do
  resources :orders
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  get "/signup", to: "users#show"
  get "/me", to: "sessions#show"
  get "/products/best_sellers", to: "products#best_sellers"
  resources :cart_items
  # resources :carts
  resources :products
  resources :users
  resources :reviews
  resources :orders
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Reveal health status on /up that returns 200 if the app boots with no exceptions, otherwise 500.
  # Can be used by load balancers and uptime monitors to verify that the app is live.
  get "up" => "rails/health#show", as: :rails_health_check

  # Defines the root path route ("/")
  # root "posts#index"
end
