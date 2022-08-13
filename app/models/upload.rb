class Upload < ApplicationRecord
  has_one_attached :image

  before_create do
    self.token = SecureRandom.hex
  end
end
