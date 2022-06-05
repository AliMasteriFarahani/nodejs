function add(){
    console.log("add module")
}

const url = 'http://www.google.com'

// module.exports = add

// module.exports.add = add
// module.exports.url = url

module.exports = {
    url,
    add
}