class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_one :pre_registration

  class << self
    def from_omniauth(auth_hash)
      auth_hash = auth_hash.as_json
      user = find_or_create_by(uuid:  auth_hash['uid'], provider: auth_hash['provider'])
      user.token = auth_hash['credentials']['token']
      user.email = auth_hash['info']['email']
      user.password = '12345678'
      user.save!
      user
    end
  end
end
