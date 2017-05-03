class AddEvents < ActiveRecord::Migration[5.0]
  def change
    create_table :events do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :essentials, null: false
      t.string :image, null: false
      t.integer :limit

      t.timestamps
    end
  end
end
