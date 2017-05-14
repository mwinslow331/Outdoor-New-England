class AddUserBelongs < ActiveRecord::Migration[5.0]
  def change
    add_reference :essential_items, :user, index: true
  end
end
