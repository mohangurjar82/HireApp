Rails.application.routes.draw do


  devise_for :users
  root to: "home#index"
  get 'user_logout',  to: 'home#user_logout'

  get '/auth/:provider/callback', to: 'oauth#callback', as: 'oauth_callback'
  get '/auth/failure', to: 'oauth#failure', as: 'oauth_failure'

  resources :marketing, only: [] do 
    collection do
      get :career_managment
      get :social_recruitment
      get :project_solution
    end
  end

  resources :pre_registration, only: [:new, :create, :delete]

  namespace :api do 
    namespace :v1 do 
     resources :fruits, only: [:index, :create, :destroy, :update]
    end 
  end 
end
