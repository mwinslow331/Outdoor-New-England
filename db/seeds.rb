# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Event.destroy_all
EssentialItem.destroy_all
User.destroy_all
Attendance.destroy_all


camping = Event.create!(name: "Mt. Osceola Weekend", image: "http://icampnh.com/wp-content/uploads/2010/04/Tripoli-camp2.jpg", description: "Camping Thursday through Sunday off Tripoli Road. Fun fun fun barrels of mo nkeys. Fun fun fun barrels of monkeys", date: "2018/07/15", limit: "10")

camping_items = ["Grill", "10 bundles firewood", "Securable Food Bin", "Shower in a Bag", "Wood Splitter", "First Aid Kit"]

camping_items.each do |item|
  EssentialItem.create(item_name: item, event: camping)
end

skiing = Event.create!(name: "Killington Trip", image: "https://theskimonster.com/files/theskimonster/ckfinder/images/killington-superstar-2.jpeg", description: "Three Days and Four Nights Skiing the Beast of the East. Fun fun fun barrels of monkeys. Fun fun fun barrels of monkeys", date: "2019/01/22", limit: "12")

skiing_items = ["Slow Cooker", "Mix for whiskey smash", "Board Games", "Apres ski lunch"]

skiing_items.each do |item|
  EssentialItem.create(item_name: item, event: skiing)
end

rafting = Event.create!(name: "Rafting the Deerfield River", image: "http://www.zoaroutdoor.com/tl_files/Zoar%202015/Rafting/Zoar%20Gap%2012.jpg", description: "Day Trip up to Deerfield River. Leave at 6:00 AM, on the river by 8:30 AM, lunch at 12:30 PM on the bank and head back close to 6:00 PM. Rafts, oars and vests provided", date: "2018/06/04", limit: "8")

rafting_items = ["6 life jackets", "Cooler", "Dinghy", "4 dry compression sacks", "Folding Table", "Plastic Bins", "First Aid Kit"]

rafting_items.each do |item|
  EssentialItem.create(item_name: item, event: rafting)
end

snowshoeing = Event.create!(name: "Snowshoeing and Ice Fishign", image: "http://www.visitsequoia.com/img/snowshoeing.jpg", description: "Take a four day trip up to Moosehead Lake for some snowshoeing and ice fishing. There is a cabin for 6 people and two ice fishing huts. We will motor in and out by snowmobile.", date: "2019/02/07", limit: "6")

snowshoeing_items = ["Cast Iron Skillet and Pot", "Two Fishing Nets", "Coal", "Beef Brisket", "Cooler", "Chainsaw", "First Aid Kit"]

snowshoeing_items.each do |item|
  EssentialItem.create(item_name: item, event: snowshoeing)
end

tubing = Event.create!(name: "Tubing in the Berkshires", image: "http://www.snowtrails.com/upload/images/tubing/linking-up-tubes-vertical-descent-tubing-park-at-snow-trails_2.jpg", description: "This is just a day trip out to the Berkshire Mountains up in North Adams, MA. We will grab lunch in a cabin then head to the hills for an afternoon of tubing.", date: "2018/12/16", limit: "12")

tubing_items = ["Cocoa Mix", "Lunch Meat", "Hot Dogs", "Kettle", "First Aid Kit"]

tubing_items.each do |item|
  EssentialItem.create(item_name: item, event: tubing)
end

scuba = Event.create!(name: "Scuba in Vinelhaven", image: "http://www.funfix.com/Gallery/Images/lg_Scuba-Diving-with-All-Resource-Divers-in-Sebec-Maine.jpg", description: "House rented on Vinelhaven Island off the coast of Maine. We will take a ferry out to the island where the hosue is located and spend three GRAND days diving!", date: "2018/08/05", limit: "8")

scuba_items = ["Generator", "Storage Bins", "Paper Towels", "Toilet Paper", "Kitchen Utensils", "Spare Flippers"]

scuba_items.each do |item|
  EssentialItem.create(item_name: item, event: scuba)
end
