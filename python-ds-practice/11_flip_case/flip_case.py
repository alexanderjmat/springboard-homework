def flip_case(phrase, to_swap):
    """Flip [to_swap] case each time it appears in phrase.

        >>> flip_case('Aaaahhh', 'a')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'A')
        'aAAAhhh'

        >>> flip_case('Aaaahhh', 'h')
        'AaaaHHH'

    """
    flipped_case = ""
    to_lower = to_swap.lower()

    for letter in phrase:
        if letter == to_lower:
            flipped_case += letter.swapcase()
        elif letter == to_lower.upper():
            flipped_case += letter.swapcase()
        else:
            flipped_case += letter

    return flipped_case