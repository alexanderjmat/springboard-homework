"""Word Finder: finds random words from a dictionary."""
import random


class WordFinder:

    def __init__(self, file):
        '''Initializes with path to file'''
        self.file = file
        self.word_list = []
        self.read_file()
    
    def __repr__(self):
        '''Returns a description of the word list'''
        return f"Word list with {len(self.word_list)} words"


    def read_file(self):
        '''Appends each word in the file to word_list'''
        self.word_list.clear()
        read = open(self.file)
        counter = 0
        for item in read:
            counter += 1
            word = item.replace("\n", "")
            self.word_list.append(word)
        print(f"{counter} words read")
    
    def random(self):
        '''Returns a random word from word_list'''
        rand_num = random.randrange(len(self.word_list))
        return self.word_list[rand_num]
    
  

                







    






