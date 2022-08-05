let getDate=function(){
    const today=new Date()
    console.log('Current Date is : ',today.getDate())
}   

let getMonth=function(){
    const today=new Date()
    console.log('Current Month is : ',today.getMonth())
}   

function getBatchInfo(){
    console.log('Plutonium,W3D5,the topic for today is Nodejs module system')
}

module.exports.getMonth=getMonth
module.exports.getDate=getDate
module.exports.getBatchInfo=getBatchInfo
