class Pet
	attr_reader :color, :breed
	attr_accessor :name

	def initialize(color, breed)
		@color = color
		@breed = breed
		@hungry = true
	end

	def feed(food)
			puts "Mmmm, " + food + "!"
			@hungry = false
	end

	def hungry?
		if @hungry
			puts "I\'m hungry!"
		else
			puts "I\'m full!"
		end
		@hungry
	end
end

class Cat < Pet
	def speak
		puts "Meow!"
	end
end

class Dog < Pet
	def speak
		puts "Woof!"
	end
end

puppy = Dog.new("blonde", "Retriever")

puts "let\'s inspect our new dog:"
puts puppy.inspect
puts "what class does our new dog belong to?"
puts puppy.class
puts "is our new dog an object?"
puts puppy.is_a?(Object)
puts "what color is our dog?"
puts puppy.color
puts "let\'s give our dog a name"
puppy.name = "stevie"
puts puppy.name
puts "is our dog hungry now?"
puppy.hungry?
puts "Let\'s feed our dog kibble"
puppy.feed("kibble")
puts "is our dog hungry now?"
puppy.hungry?
puts "what do you say dog?"
puts puppy.speak

kitty = Cat.new("grey", "Persian")

puts "let\'s inspect our new cat:"
puts kitty.inspect
puts "what class does our new cat belong to?"
puts kitty.class
puts "is our new cat an object?"
puts kitty.is_a?(Object)
puts "what color is our cat?"
puts kitty.color
puts "let\'s give our new cat a name"
kitty.name = "betsy"
puts kitty.name
puts "is our cat hungry now?"
kitty.hungry?
puts "Let\'s feed our cat"
kitty.feed("tuna")
puts "is our cat hungry now?"
kitty.hungry?
puts "our cat can make noise"
kitty.speak