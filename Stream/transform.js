const fs= require("fs")
const {Transform}=require("stream") 
const upper=new Transform({
    transform(chunk,encoding,cb){
        const modifiedData=chunk.toString().toUpperCase();
        cb(null,modifiedData)
    }
})
const removeVowel=new Transform({
    transform(chunk,encoding,cb){
        const modifiedData=chunk.toString().
        replace(/[AEIOU]/g,"*")
        cb(null,modifiedData)
    }
})

const readstream=fs.createReadStream('./info.txt')
const writestream=fs.createWriteStream('./infooutput.txt')

readstream
.pipe(upper)
.pipe(removeVowel)
.pipe(writestream)
