class Attendance < ApplicationRecord
  belongs_to :event, optional: true
  belongs_to :user, class_name: "User", optional: true

  has_many :essential_items
end
