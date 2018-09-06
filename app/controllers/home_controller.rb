class HomeController < ApplicationController
	before_action :authenticate_user!

  def index
  	@pre_registration = current_user.pre_registration
  end

  def user_logout
	sign_out current_user
	redirect_to root_path
  end

end
