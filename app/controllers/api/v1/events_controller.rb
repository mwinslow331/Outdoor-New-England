class Api::V1::EventsController < ApplicationController
  skip_before_action :verify_authenticity_token, only: [:index,  :create, :new, :show]

  def index
    @events = []
    Event.find(params[:id]).events.each do |event|
      event_to_send = {}
      event_to_send[:id] = event.id
      event_to_send[:name] = event.name
      event_to_send[:description] = event.description
      event_to_send[:essential_item] = event.essential_item
      event_to_send[:date] = event.date
      event_to_send[:limit] = event.limit
      event_to_send[:created_at] = event.created_at
      @events << event_to_send
    end
    render json: { events: @events }
  end

  def create
    event = Event.new(
      name: params[:name],
      description: params[:description],
      date: params[:date],
      image: params[:image],
      limit: params[:limit]
    )
    if event.save!
      essential_items = params[:essentialItems]
      essential_items.each do |item|
        EssentialItem.create!(
          item_name: item,
          event_id: event.id
        )
      end
    end
    redirect_to root_url
  end

  def show
    @events = []
    Event.find(params[:id]).events.each do |event|
      event_to_send = {}
      event_to_send[:id] = event.id
      event_to_send[:name] = event.name
      event_to_send[:description] = event.description
      event_to_send[:essential_item] = event.essential_item
      event_to_send[:date] = event.date
      event_to_send[:limit] = event.limit
      event_to_send[:created_at] = event.created_at
      @events << event_to_send
    end
    render json: { events: @events }
  end

  def new
    @event = Event.new
  end
  
end
