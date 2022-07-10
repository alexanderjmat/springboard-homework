# For a list of words, print out each word on a separate line, but in all uppercase. How can you change a word to uppercase? Ask Python for help on what you can do with strings!

# Turn that into a function, print_upper_words. Test it out. (Don’t forget to add a docstring to your function!)

# Change that function so that it only prints words that start with the letter ‘e’ (either upper or lowercase).

# Make your function more general: you should be able to pass in a set of letters, and it only prints words that start with one of those letters.

def print_upper_words(words, letters):
    '''This function loops through a list of words, determines if each word begins a letter specified in a list of letters, and prints the word in uppercase if that word contains that letter'''
    for word in words:
        for letter in letters:
            if word.startswith(letter):
                print(word.upper())

print(print_upper_words(['hello', 'hazel', 'sus', 'biscuit', "tight", "melon", "system"], ['h', 's']), "should print: HELLO, HAZEL, SUS, SYSTEM")
