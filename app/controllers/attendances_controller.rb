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
    @attendance = Attendance.find(params[:id]).uniq
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
    if attendance.save
      empty_list = params[:event][:item_ids]
      empty_list.each do |itemid|
        new_item = EssentialItem.find(itemid)
        new_item.user = current_user
        new_item.attendance = attendance
        new_item.save
      end
      redirect_to root_path
    else
      render action: 'new'
    end
  end

end
