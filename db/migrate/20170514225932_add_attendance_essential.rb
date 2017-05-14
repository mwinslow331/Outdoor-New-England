class AddAttendanceEssential < ActiveRecord::Migration[5.0]
  def change
    add_reference :essential_items, :attendance, index: true
  end
end
