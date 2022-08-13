Rails.application.routes.draw do
  root to: 'uploads#new'

  resources :uploads, only: [:new, :show, :create], param: :token
end
