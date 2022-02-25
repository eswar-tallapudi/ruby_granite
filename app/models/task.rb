class Task < ApplicationRecord
  validates :title, presence: true, length: { maximum: 125 }
end
