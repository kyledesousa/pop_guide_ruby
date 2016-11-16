class DesignController < ApplicationController
  layout 'design'
  def show
    render "design/#{params[:dir]}/#{params[:id]}"
  end
end
