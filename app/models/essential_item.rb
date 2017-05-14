class EssentialItem < ApplicationRecord
  validates :item_name, presence: true
  validates :event_id, presence: true
  # validates :user_id, presence: true

  belongs_to :event
  belongs_to :user, through: :essential_items
end
