class AddActiveLocation < ActiveRecord::Migration[5.0]
  def change
  	add_column :locations, :active, :string
  end
end
