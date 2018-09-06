class CreatePreRegistrations < ActiveRecord::Migration[5.1]
  def change
    create_table :pre_registrations do |t|
      t.string :phone
      t.string :email
      t.string :goodTimeToCall
      t.string :appliedFor
      t.string :signedUpAs
      t.string :linkedInToken

      t.timestamps
    end
  end
end
