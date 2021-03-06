class Event < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true, length: {minimum: 60, maximum: 400}
  validates :date, presence: true
  validates :image, presence: true

  has_many :users, through: :attendances
  has_many :attendances
  has_many :essential_items
end
