"""Python serial number generator."""

class SerialGenerator:
    """Machine to create unique incrementing serial numbers.
    
    >>> serial = SerialGenerator(start=100)

    >>> serial.generate()
    100

    >>> serial.generate()
    101

    >>> serial.generate()
    102

    >>> serial.reset()

    >>> serial.generate()
    100
    """

    def __init__(self, start):
        '''Initializes starting number'''
        self.start = start
        self.accumulator = start
    
    def __repr__(self):
        return f"Serial Generator: Start = {self.start}, Accumulator = {self.accumulator}"
    
    def generate(self):
        '''Adds one to the accumulator'''
        self.accumulator += 1
        return self.accumulator
    
    def reset(self):
        '''Resets the accumulator to the start value'''
        self.accumulator = self.start
        return self.accumulator




