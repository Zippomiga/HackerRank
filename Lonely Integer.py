# Given an array of integers, where all elements but one occur twice, find the unique element.

# Example
# a = [1,2,3,4,3,2,1]
# The unique element is 4.


def lonelyinteger(a):
    for x in a:
        if a.count(x) == 1:
            return x


# <--------------- Others --------------->

def lonelyinteger(a):
    return [x for x in a if a.count(x) == 1][0]