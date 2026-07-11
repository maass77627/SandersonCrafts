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
    image_url: "https://example.com/crochet-blanket.jpg",
    category: "Blankets",
    inventory_count: 5
)

Product.create(
    name: "Crochet Scarf",
    description: "A handmade scarf with a unique crochet pattern.",
    price: 35.00,
    image_url: "https://example.com/crochet-scarf.jpg",
    category: "Scarves",
    inventory_count: 8
)

Product.create(
     name: "Handmade Baby Blanket",
    description: "Soft baby blanket made with gentle yarn.",
    price: 60.00,
    image_url: "https://example.com/baby-blanket.jpg",
    category: "Baby",
    inventory_count: 4
)


Cart.create(user_id: bob.id)