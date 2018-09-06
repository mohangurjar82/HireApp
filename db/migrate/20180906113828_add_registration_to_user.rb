class AddRegistrationToUser < ActiveRecord::Migration[5.1]
  def change
    add_column :pre_registrations, :user_id, :integer
  end
end
