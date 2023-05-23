class Product < ApplicationRecord
    validates :name, presence: true, length: { maximum: 50 }
    validates :image, presence: true, inclusion: { in: %w(jpg jpeg png) }
    validates :price, presence: true, numericality: { greater_than_or_equal_to: 0 }
    validates :category, presence: true
end
  