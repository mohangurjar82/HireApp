class PreRegistrationController < ApplicationController
	before_action :authenticate_user!

	def new
	  @pre_registration = current_user.pre_registration
	end

	def create
    registration_record = PreRegistration.create(registration_params)
    registration_record.user_id = current_user.id
    if registration_record.save
      render json: { message: 'Registration was created successfully..!', case_id: registration_record.id}, status: 200
    else
      render json: { error: 'Something went wrong' }, status: 200
    end
  end

  private

  def registration_params
    params['data'].permit(:email, :phone)
  end
end
