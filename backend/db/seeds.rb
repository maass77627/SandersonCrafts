# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

User.create(
    admin: true,
    email: "kmaass77627@gmail.com",
    name: "Kelly",

)

bob = User.create(
    admin: false,
    email: "bob@bob.com",
    name: "Bob"
)

Product.create(
    name: "Handmade Crochet Blanket",
    description: "A cozy handmade crochet blanket made with soft yarn",
    price: 75.00,
    image_url: "blanket.webp",
    category: "Blankets",
    inventory_count: 5
)

Product.create(
    name: "Crochet Scarf",
    description: "A handmade scarf with a unique crochet pattern.",
    price: 35.00,
    image_url: "scarf.webp",
    category: "Scarves",
    inventory_count: 8
)

Product.create(
     name: "Handmade Baby Blanket",
    description: "Soft baby blanket made with gentle yarn.",
    price: 60.00,
    image_url: "babyblanket.jpg",
    category: "Baby",
    inventory_count: 4
)


Review.create!([
  {
    product_id: 13,
    user_id: 1,
    rating: 5,
    comment: "Absolutely love this piece! The quality is amazing."
  },
  {
    product_id: 10,
    user_id: 2,
    rating: 4,
    comment: "Beautiful handmade item. It looks great in my home."
  },
  {
    product_id: 11,
    user_id: 3,
    rating: 5,
    comment: "Exceeded my expectations. Would definitely buy again."
  },
  {
    product_id: 12,
    user_id: 1,
    rating: 3,
    comment: "Nice product, but I wish there were more color options."
  },
  {
    product_id: 12,
    user_id: 2,
    rating: 5,
    comment: "The craftsmanship is incredible. Highly recommend!"
  }
])


Cart.create(user_id: bob.id)