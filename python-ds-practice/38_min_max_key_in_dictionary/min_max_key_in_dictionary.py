def min_max_keys(d):
    """Return tuple (min-keys, max-keys) in d.

        >>> min_max_keys({2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e'})
        (1, 10)

    Works with any kind of key that can be compared, like strings:

        >>> min_max_keys({"apple": "red", "cherry": "red", "berry": "blue"})
        ('apple', 'cherry')
    """
    lst = [[x, d[x]] for x in d]
    compare_1 = lst[0][0]
    compare_2 = lst[0][0]
    for item in lst:
        if type(item[0]) == int:
            if item[0] > compare_1:
                compare_1 = item[0]
            if item[0] < compare_2:
                compare_2 = item[0]
        if type(item[0]) == list or type(item[0]) == tuple or type(item[0]) == str or type(item[0]) == set:
            if len(item[0]) > len(compare_1):
                compare_1 = item[0]
            if len(item[0]) < len(compare_2):
                compare_2 = item[0]
    
    return (compare_2, compare_1)

        
        
        
        

