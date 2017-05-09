class EssentialItem < ApplicationRecord
  validates :item_name, presence: true
  validates :event_id, presence: true
  validates :user_id, presence: true

  belongs_to :events
  belongs_to :users
end
