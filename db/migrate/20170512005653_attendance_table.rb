class AttendancesTable < ActiveRecord::Migration[5.0]
  def change
    create_table :attendances do |t|
      t.belongs_to :user, null: false
      t.belongs_to :event, null: false

      t.has_many :essential_items

      t.timestamps
  end
end
