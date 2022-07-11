def reverse_string(phrase):
    """Reverse string,

        >>> reverse_string('awesome')
        'emosewa'

        >>> reverse_string('sauce')
        'ecuas'
    """
    phrase_list = list(phrase)
    phrase_list.reverse()
    reversed_phrase = ""

    for char in phrase_list:
        reversed_phrase += char
        return reversed_phrase



