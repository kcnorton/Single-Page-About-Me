def fav_foods
	food_array = []
	3.times do 
		puts "Name a favorite food."
		food_array << gets.chomp
	end
	food_array.each do |food|
		puts "I like #{food} too!"
	end
	p food_array
	puts "Your favorite foods are #{food_array.join(", ")}."
end

fav_foods