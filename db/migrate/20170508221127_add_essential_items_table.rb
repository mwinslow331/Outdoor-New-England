class AddEssentialItemsTable < ActiveRecord::Migration[5.0]
  def change
    create_table :essential_items do |t|
      t.string :item_name, null: false

      t.belongs_to :event

      t.timestamps
    end
  end
end
