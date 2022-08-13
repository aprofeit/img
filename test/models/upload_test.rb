require "test_helper"

class UploadTest < ActiveSupport::TestCase
  test 'creating an upload creates a random token' do
    upload = Upload.create!

    assert_equal SecureRandom.hex.length, upload.token.length
  end
end
