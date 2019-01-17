# Create a function getRemainder that takes two numbers and returns the remainder (value left over from division) of dividing the larger number by the smaller one.

# Hint- You have no guarantee which number will be the bigger number, how can you determine which is which?


def getRemainder(num1, num2):
  if num2 > num1:
    return num2 % num1
  else:
    return num1 % num2


print(getRemainder(17, 5)) #=> 2
print(getRemainder(20, 5)) #=> 0
print(getRemainder(8, 22)) #=> 6
print(getRemainder(7, 42)) #=> 0