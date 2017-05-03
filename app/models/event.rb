class Event < ApplicationRecord
  validates :name, presence: true
  validates :description, presence: true
  validates :essentials, presence: true
  validates :image, presence: true

end
