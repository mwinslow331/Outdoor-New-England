Rails.application.routes.draw do
  get 'auth/:provider/callback', to: 'sessions#create'

  get 'signout', to: 'sessions#destroy', as: 'signout'

  get 'auth/failure', to: redirect('/')

  get '/static_pages/new', to: 'static_pages#new'

  root to: 'events#index'
  resources :sessions, only: [:create, :destroy]
  resources :events, only: [:index, :show, :create]

  namespace :api do
    namespace :v1 do
      resources :events
      resources :essential_items, only: [:index, :new, :create]
    end
  end

end
