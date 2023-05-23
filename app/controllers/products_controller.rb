class ProductsController < ApplicationController
    
    def index
        products = Product.all
        render json: products
    end

    def show
        product = Product.find_by_id(params[:id])
        render json: product
    end

    def create
        product = Product.create(product_params) 
        render json: product
    end

    private 

    def product_params
        params.require(:product).permit(:name, :image, :price, :category)
      end      
end
