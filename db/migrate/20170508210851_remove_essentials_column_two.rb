class RemoveEssentialsColumnTwo < ActiveRecord::Migration[5.0]
  def change
    remove_column :events, :essentials
  end
end
