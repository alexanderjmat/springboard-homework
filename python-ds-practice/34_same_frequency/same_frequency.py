def same_frequency(num1, num2):
    """Do these nums have same frequencies of digits?
    
        >>> same_frequency(551122, 221515)
        True
        
        >>> same_frequency(321142, 3212215)
        False
        
        >>> same_frequency(1212, 2211)
        True
    """
    num1_dict = {}
    num2_dict = {}

    for num in num1:
        if num not in num1_dict:
            num1_dict[num] = 1
        else:
            num1_dict[num] += 1
    
    for num in num2:
        if num not in num2_dict:
            num2_dict[num] = 1
        else:
            num2_dict[num] += 1
    
    

