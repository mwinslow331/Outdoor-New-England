class StaticPagesController < ApplicationController

  def new
    @current_user = current_user
  end

end
