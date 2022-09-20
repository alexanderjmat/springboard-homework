const markov = require('./markov')
const makeText = require('./makeText')
const { MarkovMachine } = require('./markov')
const { exportAllDeclaration } = require('@babel/types')


test('return markov machine', function() {
    let machine = new MarkovMachine("Hello everybody my name is spongebob squarepants")
    console.log(machine.makeChains())
    expect(machine.makeChains()['Hello']).toContain('everybody')
    expect(machine.makeChains()['squarepants']).toContain(null)
})

test('return generated text', function() {
    let machine = makeText.generateMarkovMachine("I love eggs and cheese and bacon because it is the best breakfast ever!")
    expect(machine.split(" ").length == 20)

})