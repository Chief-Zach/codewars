import itertools


def getPINs(observerd):
    adjacent = {
        '1': ['2', '4'],
        '2': ['1', '3', '5'],
        '3': ['2', '6'],
        '4': ['1', '5', '7'],
        '5': ['2', '4', '6', '8'],
        '6': ['3', '5', '9'],
        '7': ['4', '8'],
        '8': ['5', '7', '9', '0'],
        '9': ['6', '8'],
        '0': ['8'],
    }
    L = [[digit] + adjacent[digit] for digit in observerd]
    return [''.join(element) for element in list(itertools.product(*L))]
