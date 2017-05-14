class Attendance < ApplicationRecord
  belongs_to :event
  belongs_to :user, class_name: "User"

  has_many :essential_items
end
