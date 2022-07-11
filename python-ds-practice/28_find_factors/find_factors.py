def find_factors(num):
    """Find factors of num, in increasing order.

    >>> find_factors(10)
    [1, 2, 5, 10]

    >>> find_factors(11)
    [1, 11]

    >>> find_factors(111)
    [1, 3, 37, 111]

    >>> find_factors(321421)
    [1, 293, 1097, 321421]
    """
    num_list = {*range(1, num + 1, 1)}
    factor_set = set()
    for n in num_list:
        if num % n == 0:
            factor_set.add(n)
    
    factor_list = list(factor_set)
    factor_list.sort()
    print(factor_list)
    return factor_list


