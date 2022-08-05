function trim(){
    const string='   Sample String    '
    console.log(string.trim())
}

function changetoLowerCase(){
    const string='Sample String'
    console.log(string.toLowerCase())
}

function changetoUpperCase(){
    const string='Sample String'
    console.log(string.toUpperCase())
}
module.exports.trim=trim
module.exports.changetoLowerCase=changetoLowerCase
module.exports.changetoUpperCase=changetoUpperCase