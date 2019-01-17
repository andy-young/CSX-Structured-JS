#  Examine the code given to you. Determine what arguments must be passed into
#  isX1 and isX2 respectively to obtain an output of true for both, and pass in
#  the arguments accordingly.

x = 3


def isX1(num):
    x = 5
    return num == x


def isX2(num):
    return num == x


one = isX1()  # add code in parathesis
two = isX2()  # add code in parathesis

print(one)  # true
print(two)  # true
