class Event < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true, length: {minimum: 60, maximum: 400}
  validates :essentials, presence: true
  validates :image, presence: true

end
