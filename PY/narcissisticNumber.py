def narcissistic(value):
    base = len(str(value))
    finalSum = sum([x ** base for x in [int(x) for x in list(str(value))]])
    return finalSum == value


print(narcissistic(7))
