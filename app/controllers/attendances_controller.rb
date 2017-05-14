class AttendancesController < ApplicationController
  respond_to :json, :html

  def index
    @attendance = Attendance.all
    respond_to do |format|
      format.json { respond_with(@attendance) }
      format.html { respond_with(@attendance) }
    end
  end

  def show
    @attendance = Attendance.find(params[:id])
  end

  def new
    @attendance = Attendance.new
    @attendance.user = current_user
    @attendance.event = Event.find(params[:event_id])
  end

  def create
    event = Event.find(params[:event_id])
    user = current_user
    attendance = Attendance.new(user: user, event: event)
    binding.pry
    attendance.essential_items = EssentialItem.where(id: params["event_id"]["essential_items_ids"])
    if attendance.save
      redirect_to root_path
    else
      render action: 'new'
    end
  end


  # private
  #
  # def attendance_params
  #   params.require(:attendance).permit(:user_id, :event_id)
  # end

end
