get 'budget', :to => 'budget#index', :as => :budget
get 'budget/calculate', :to => 'budget#calculate', :as => :budget_calculate
get 'budget/user/:id', :to => 'budget#user', :as => :budget_user
