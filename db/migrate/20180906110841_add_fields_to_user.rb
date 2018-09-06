class AddFieldsToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :users, :uuid, :string
    add_column :users, :provider, :string
  end
end
