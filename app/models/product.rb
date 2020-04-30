class Product < ApplicationRecord
  enum currency: [:NTD, :USD, :HKD]
  acts_as_taggable
end
