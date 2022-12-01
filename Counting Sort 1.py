# https://www.hackerrank.com/challenges/three-month-preparation-kit-countingsort1/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=three-month-preparation-kit&playlist_slugs%5B%5D=three-month-week-two


def countingSort(arr):
    N = lambda e: int(e)
    Z = '0' * (max(arr) +1)

    rge = list(map(N, Z))

    for i in range(len(rge)):
        rge[arr[i]] = arr.count(arr[i])

    return rge

# <--------------- Others --------------->

def countingSort(arr):
    c = [0 for i in range(100)]
    for i in arr: c[i] += 1
    return c