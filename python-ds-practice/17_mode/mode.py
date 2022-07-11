def mode(nums):
    """Return most-common number in list.

    For this function, there will always be a single-most-common value;
    you do not need to worry about handling cases where more than one item
    occurs the same number of times.

        >>> mode([1, 2, 1])
        1

        >>> mode([2, 2, 3, 3, 2])
        2
    """
    freq_dict = {}
    freq_list = []
    for num in nums:
        if num not in freq_dict:
            freq_dict.update({num : 1})
        else:
            freq_dict[num] += 1

    for value in freq_dict.values():
        freq_list.append(value)
    
    highest_num = freq_list[0]

    for value in freq_list:
        if value > highest_num:
            highest_num = value
    
    for key in freq_dict.keys():
        if freq_dict[key] == highest_num:
            return key

    
    
    
    

