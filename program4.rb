# number = 0
# while (number <= 10) do # while this condition is true, do...
# 	p "the number is now #{number}" #whatever is in this code block
# 	number += 1 #short for number = number +1
# end

(0..10).each do |n|
	p "the new number is #{n}"
end