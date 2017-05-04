Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'

  get 'signout', to: 'sessions#destroy', as: 'signout'

  get 'auth/failure', to: redirect('/')

  root to: 'events#index'
  resources :sessions, only: [:create, :destroy]
  resources :events, only: [:index, :show, :new, :create]

end
