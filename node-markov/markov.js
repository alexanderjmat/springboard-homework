/** Textual markov chain generator */
const { default: generate } = require('@babel/generator');


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
      markovChain[i] = [...new Set(markovChain[i])]
    }
    return markovChain;

}
  


  /** return random text from chains */

  makeText(numWords) {
    const resultArr = []
    const wordChain = this.makeChains()
    const keys = Object.keys(wordChain)
    let randomKey = keys[Math.round(Math.random() * (keys.length - 1))]
    for (let i = 0; i < numWords; i++) {
      randomKey = wordChain[randomKey][Math.round(Math.random() * (wordChain[randomKey].length - 1))]
      if (randomKey == null) {
        randomKey = keys[Math.round(Math.random() * (keys.length - 1))]
        resultArr.push(randomKey)
      }
      else {
        resultArr.push(randomKey)
      }
    }
    let result = resultArr.join(" ")
    return result;
  
  }
}

module.exports = {
  MarkovMachine: MarkovMachine,
}

// let t = new MarkovMachine("All our cognition starts from the senses, goes from there to the understanding, and ends with reason, beyond which there is nothing higher to be found in us to work on the matter of intuition and bring it under the highest unity of thinking. Since I am now to give a definitiona of this supreme faculty of cognition, I find myself in some embarrassment. As in the case of the understanding, there is in the case of reason a merely formal, i.e., logical use, where reason abstracts from all content of cognition, but there is also a real use, since reason itself contains the origin of certain concepts and principles, which it derives neither from the senses nor from the understanding. The first faculty has obviously long since been defined by the logicians as that of drawing inferences mediately as distinct from immediate inferences, consequentis immedi-atis; but from this we get no insight into the second faculty, which it- self generates concepts. Now since a division of reason into a logical and a transcendental faculty occurs here, a higher concept of this source of cognition must be sought that comprehends both concepts under itself, while from the analogy with concepts of the understanding, we can expect both that the logical concept will put in our hands the key to the transcendental one and that the table of functions of the former will give us the family tree of the concepts of reason.")
// t.makeText(30)