def titleize(phrase):
    """Return phrase in title case (each word capitalized).

        >>> titleize('this is awesome')
        'This Is Awesome'

        >>> titleize('oNLy cAPITALIZe fIRSt')
        'Only Capitalize First'
    """
    split = phrase.split(" ")
    phrase_final = ""
    for word in split:
        word = f"{word.capitalize()} "
        phrase_final += word
    
    return phrase_final.strip()
    
    


