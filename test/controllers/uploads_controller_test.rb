require "test_helper"

class UploadsControllerTest < ActionDispatch::IntegrationTest
  test "should get new" do
    get '/'
    assert_response :success
  end
end
