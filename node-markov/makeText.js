/** Command-line tool to generate Markov text. */
const fs = require('fs')
const axios = require('axios');
const { default: generate } = require('@babel/generator');
const argv = process.argv
const markovMachine = require('./markov')



function fileOrURL() {
    if (argv.includes("url")) {
      urlToText(argv[3])
    }
    else if (argv.includes("file")) {
      fileToText(argv[3])
    }
  }
  
  function fileToText(path) {
    return fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        console.log("Sorry, the file you were looking for was not found")
        return
      }
      else {
        return generateMarkovMachine(data)
      }
    })
  }
  
  async function urlToText(path) {
    let request = await axios.get(path)
    if (request.status != 200) {
      console.log("Sorry, the page you were looking for was not found")
      return
    }
    return generateMarkovMachine(request.data)
  }
  
  function generateMarkovMachine(text) {
    console.log(`Generated from ${argv[3]}`)
    let output = new markovMachine.MarkovMachine(text).makeText(20)
    console.log(output)
    return output
  }
  
  fileOrURL()

  module.exports = {
    fileOrURL,
    fileToText,
    urlToText,
    generateMarkovMachine
  }

