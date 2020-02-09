const fs = require('fs')

const book = {
  title: 'dd',
  author: 'ddd'
}

const bookJSON = JSON.stringify(book)

fs.writeFileSync('1-json.json', bookJSON)
