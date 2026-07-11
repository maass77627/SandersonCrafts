class User < ApplicationRecord
    has_secure_password

    has_one :cart 
    has_many :orders

    validates :name, presence: true
    # validates :name, uniqueness: true
    validates :password, presence: true
    validates :password, length: {minimum: 6} 
end
