class AddTokenToUploads < ActiveRecord::Migration[7.0]
  def change
    add_column :uploads, :token, :string

    add_index :uploads, :token, unique: true
  end
end
