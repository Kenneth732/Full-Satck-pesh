class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :name
      t.string :image
      t.integer :price
      t.string :category

      t.timestamps
    end
  end
end
