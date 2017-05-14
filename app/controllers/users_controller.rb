class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    # @event = @user.event
    @current_user = current_user
  end

  def create
    @user = User.new(user_params)
    if @user.save
      redirect_to user_path
    else
      redirect_to events_path
    end
    # @current_user = current_user
  end

  def new
    @user = User.new
  end

  # def index
  #   @users = User.all
  #   @current_user = current_user[:id]
  #   # @current_user = @user
  # end

  private

  def user_params
    params.require(:user).permit(:name)
  end
end
