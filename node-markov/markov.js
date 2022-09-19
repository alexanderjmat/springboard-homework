/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains() {
    const keys = [...this.words]
    const values = [...this.words]
    const markovChain = {}
    for (let i = 0; i < keys.length; i++) {
      markovChain[keys[i]] = []
    }
    const markovKeys = Object.keys(markovChain)
    for (let i = 0; i < markovKeys.length; i++) {
      for (let j = 0; j < values.length; j++) {
        if (markovKeys[i] == values[j]) {
          markovChain[markovKeys[i]].push(values[j + 1])
        }
      }
    }
    for (let i in markovChain) {
      if (markovChain[i].includes(undefined)) {
        markovChain[i].splice(markovChain[i].indexOf(undefined), 1)
        markovChain[i].push(null)
      }
    }
    return markovChain;
}
  


  /** return random text from chains */

  makeText(numWords) {
    const resultArr = []
    const wordChain = this.makeChains()
    const keys = Object.keys(wordChain)
    let randomKey = keys[Math.round(Math.random() * (keys.length - 1))]
    resultArr.push(randomKey)
    for (let i = 1; i <= numWords; i++) {
      let nextWord = wordChain[randomKey][Math.round(Math.random() * (randomKey.length - 1))]
      if (nextWord == null) {
        resultArr.push('.')
        nextWord = wordChain[randomKey][Math.round(Math.random() * (randomKey.length - 1))]
        resultArr.push(nextWord)

      }
      else {
        resultArr.push(nextWord)
      }

  
    }
    console.log(resultArr)
  }
}

let t = new MarkovMachine("Enlightenment is man's release from his self-incurred tutelage. Tutelage is man's inability to make use of his understanding without direction from another. Self-incurred is this tutelage when its cause lies not in lack of reason but in lack of resolution and courage to use it without direction from another. Sapere aude! 'Have courage to use your own reason!'- that is the motto of enlightenment.")
t.makeText(10)
