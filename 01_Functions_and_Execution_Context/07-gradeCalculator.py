
def gradeCalculator(grade):
  if grade >= 92:
    return

print(gradeCalculator(92))  # => "A"
print(gradeCalculator(84))  # => "B"
print(gradeCalculator(70))  # => "C"
print(gradeCalculator(61))  # => "D"
print(gradeCalculator(43))  #=> "F"

def f(x):
    return {
        'a': 1,
        'b': 2,
    }[x] 