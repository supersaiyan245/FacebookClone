class User < ApplicationRecord
  validates :username, uniqueness: true, presence: true
  has_many :posts, dependent: :destroy
end
