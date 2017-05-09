class Api::V1::EventsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    # events = Event.new(essential_item_params)
    # event = Event.find(event_params['event_id'])
    event = Event.create(event_params)
    event.user = current_user
    if event.save
      event_to_send = {}
      event_to_send[:id] = event.id
      event_to_send[:name] = event.name
      event_to_send[:description] = event.description
      event_to_send[:essential_item] = event.essential_item
      event_to_send[:date] = event.date
      event_to_send[:limit] = event.limit
      event_to_send[:created_at] = event.created_at
      render json: {
        message: ("created event"),
        event: event_to_send
      }.to_json
    else
      render json: {errors: event.errors}.to_json
    end

    # essential_items.each do |items|
    #   Essential.create(event: event)
    # end
  end

  def show
    # event = Event.find(params[:id])
    # essential_items = event.essential_items
    # event_object = { event: event, essential_items: essential_items}
    # render json: event_object
  end

  def new
    event = Event.new(params[:id])
    # essential_items = event.essential_items
    # event_object = { event: event, essential_items: essential_items }
  end

  private

  def event_params
    params.require(:event).permit(:name, :image, :description, :date)
  end

  def essential_params
    params.require(:essential_item).permit(:name)
  end
end
