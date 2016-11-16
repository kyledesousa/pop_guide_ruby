Rails.application.routes.draw do

  root 'design#index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get 'design' => 'design#index'
  get 'design/:dir/:id' => 'design#show'

end
