class UploadsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: :create

  def new
  end

  def create
    data = URI::Data.new(upload_params[:content])
    image_data = StringIO.new(data.data)

    upload = Upload.new
    upload.image.attach(io: image_data, filename: upload_params[:name], content_type: data.content_type)
    upload.save!

    render json: { url: url_for(upload.image) }, status: :created
  end

  private

  def upload_params
    params.require(:upload).permit(:name, :content)
  end
end
