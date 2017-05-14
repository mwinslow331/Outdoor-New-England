class UsersController < ApplicationController

  def show
    @user = User.find(params[:id])
    # @event = @user.event
    @current_user = current_user
  end

  def create
    @user = User.new
    @attendance = Attendance.all
    if @user.save
      redirect_to user_path(current_user)
    else
      redirect_to events_path
    end
    # @current_user = current_user
  end

  def new
    @user = User.new
  end

end
