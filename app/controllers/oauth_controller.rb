# => app/controllers/oauth_controller.rb
class OauthController < ApplicationController

  def callback
    begin
      @user = User.from_omniauth(request.env['omniauth.auth'])
      session[:user_id] = @user.id
      flash[:success] = "Welcome, #{@user.email}!"
      sign_in(@user)
      redirect_to root_path
    rescue => e
      flash[:alert] = "There was an error while trying to authenticate your account."
      redirect_to root_path
    end
  end

  def failure
    flash[:alert] = "There was an error while trying to authenticate your account."
    redirect_to root_path
  end

end