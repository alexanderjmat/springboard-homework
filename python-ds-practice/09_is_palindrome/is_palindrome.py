from operator import truediv


def is_palindrome(phrase):
    """Is phrase a palindrome?

    Return True/False if phrase is a palindrome (same read backwards and
    forwards).

        >>> is_palindrome('tacocat')
        True

        >>> is_palindrome('noon')
        True

        >>> is_palindrome('robert')
        False

    Should ignore capitalization/spaces when deciding:

        >>> is_palindrome('taco cat')
        True

        >>> is_palindrome('Noon')
        True
    """

    remove_spaces = ""
    for letter in phrase:
        if not letter == " ":
            remove_spaces += letter
    to_lower = remove_spaces.lower()
    phrase_forward = list(to_lower)
    p_f = ''
    p_b = ''

    for letter in phrase_forward:
        p_f += letter
    
    phrase_forward.reverse()
    
    for letter in phrase_forward:
        p_b += letter
    
    if p_f == p_b:
        return True
    else:
        return False