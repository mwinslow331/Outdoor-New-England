# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
camping = Event.create!(name: "Mt. Osceola Weekend", image: "http://icampnh.com/wp-content/uploads/2010/04/Tripoli-camp2.jpg", description: "Camping Thursday through Sunday off Tripoli Road. Fun fun fun barrels of monkeys. Fun fun fun barrels of monkeys", date: "2017/07/15")

camping_items = ["Grill", "10 bundles firewood", "Securable Food Bin", "Shower in a bag"]

camping_items.each do |item|
  EssentialItem.create(item_name: item, event: camping)
end

# camping = EssentialItem.create()

skiing = Event.create!(name: "Killington Trip", image: "https://theskimonster.com/files/theskimonster/ckfinder/images/killington-superstar-2.jpeg", description: "Three Days and Four Nights Skiing the Beast of the East. Fun fun fun barrels of monkeys. Fun fun fun barrels of monkeys", date: "2017/07/22")

skiing_items = ["Slow Cooker", "Mix for whiskey smash", "Board Games", "Apres ski lunch"]

skiing_items.each do |item|
  EssentialItem.create(item_name: item, event: skiing)
end

rafting = Event.create!(name: "Rafting the Deerfield River", image: "http://www.zoaroutdoor.com/tl_files/Zoar%202015/Rafting/Zoar%20Gap%2012.jpg", description: "Day Trip up to Deerfield River. Leave at 6:00 AM, on the river by 8:30 AM, lunch at 12:30 PM on the bank and head back close to 6:00 PM. Rafts, oars and vests provided", date: "2017/06/04")

rafting_items = ["6 life jackets", "cooler", "dinghy", "4 dry compression sacks"]

rafting_items.each do |item|
  EssentialItem.create(item_name: item, event: rafting)
end
