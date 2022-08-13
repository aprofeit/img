class UploadsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create

  def new
  end

  def create
    image_data = URI::Data.new(upload_params[:content])

    head :created
  end

  private

  def upload_params
    params.require(:upload).permit(:name, :content)
  end
end
