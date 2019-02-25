const readline = require('readline-sync')

function start(){
    const content = {}

    content.seachTerm = askAndReturnSearchTerm()
    content.prefix = askAndReturnPrefix()

    function askAndReturnSearchTerm(){
        return readline.question('Type a Wikipedia search term: ')
    }

    function askAndReturnPrefix(){
        const prefixes = ['Who is', 'What is', 'The History of']
        const selectedPrefixIndex = readline.keyInSelect(prefixes, 'Choose one options: ')
        const selectedPrefixText = prefixes[selectedPrefixIndex]
        
        return selectedPrefixText
    }

    console.log(content)
}

start()