//example return promise data
/**
 * fungsi promise yaitu menyuruh program untuk freeze sampai mendapatkan hasil diatasnya
 */
const fs = require('fs')
const util = require('util')
const read = util.promisify(fs.readFile)
const axios = import('axios')


function a(params) {
    return Promise.resolve('a')
}
async function b() {
    return Promise.resolve()
}
async function c(params) {
    return 'c'
}
console.log(a());
console.log(b());
console.log(c());

const readfile = async () => {
    read('tesss.txt')
    .then(data => {
        console.log(data.toString());
    })
    const data = await read('tesss.txt')
    console.log('jalankan ini dulu');
}

readfile()


