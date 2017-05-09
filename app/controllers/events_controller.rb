class EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def show
    @event = Event.find(params[:id])
    @essential_items = @event.essential_items
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      flash[:notice] = "You created a new event!"
      redirect_to events_path
    else
      render action: 'new'
    end
  end

  private

  def event_params
    params.require(:event).permit(:name, :image, :description, :date)
  end
end
