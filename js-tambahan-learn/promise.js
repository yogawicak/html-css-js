// const axios = require('axios')
/**
 * Contoh promise Ajax
 * setiap kita request ke API itu pasti menggunakan promise
 */
/**
 * Promise : Object yang merepresentasikan berhasil / gagal sebuah event yang async di masa yg akan datang
 * states(bisa disebut janji) -> (fulfilled(terpenuhi),rejected(gagal),pending(waktu tunggu ketika janji dipenuhi atau tidak)) 
 * untuk menjalan diatas ada 3 fungsi callback yaitu resolve,reject,finally
 * aksi(then -> dijalankan ketika dipenuhi , catch -> dijalankan ketika tidak dipenuhi)
 */
/**
 * Async : digunakan untuk function , memberi tahu bahwa didalam function ada sebauh fungsi yang asynchronus
 * Await : digunakan untuk function , menunggu hasil balikan dari promise
 * Await menggunakan try untuk then dan tetap menggunakan catch untuk error
 */
// const xhr = new XMLHttpRequest();
const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = () => {
//     switch (xhr.readyState) {
//         case 0:
//             // UNSENT, Client has been created. open() not called yet.
//             console.log('0 UNSENT', xhr.statusText);
//             break;
//         case 1:
//             // OPENED, open() has been called.
//             console.log('1 OPENED', xhr.statusText);
//             break;
//         case 2:
//             // HEADERS_RECEIVED, send() has been called, and headers and status are available.
//             console.log('2 HEADERS_RECEIVED', xhr.statusText);
//             break;
//         case 3:
//             // LOADING, Downloading; responseText holds partial data.
//             console.log('3 LOADING', xhr.statusText);
//             console.log('interactive... ' + xhr.responseText.length + ' bytes.');
//             break;
//         case 4:
//             // DONE, The operation is complete.
//             console.log('4 DONE', xhr.statusText);


//             const header = xhr.getResponseHeader('Content-Type');
//             const headers = xhr.getAllResponseHeaders();


//             if (xhr.status == 200 || xhr.status == 304) {
//                 var data = xhr.responseText;
//                 console.log('COMPLETE!');
//                 console.dir(data);
//             } else {
//                 console.log('Failed. HttpStatus: ' + xhr.statusText);
//             }
//             break;
//     }
// };
// xhr.withCredentials = true;
// xhr.responseType = 'json';
// xhr.setRequestHeader('Content-Type', 'application/json');
// xhr.open('GET', '/server');
// xhr.send(null);


// Properties: onreadystatechange, readyState, response, responseText, responseType, responseURL, responseXML, status, statusText, timeout, upload, withCredentials
// Methods: open(), abort(), send(), setRequestHeader(), overrideMimeType(), getAllResponseHeaders(), getResponseHeader(),
// Events: loadstart, progress, abort, error, load, timeout, loadend
// 'Content-Type', *'application/x-www-form-urlencoded', 'text/plain', 'multipart/form-data', 'application/json'


// xhr.responseType = ''; // *'', 'arraybuffer', 'blob', 'document', 'json', 'text'
// xhr.overrideMimeType('text/xml'); // 'text/plain'
// request.open(method, url[, async=true[, user=null[, password=null]]])
//Metode XHR

xhr.onreadystatechange = () => {
    if (xhr.status === 200) {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.response));
        }
    }else{
        console.log(xhr.responseText);
    }
}
xhr.open('get','ttp://www.omdbapi.com/?i=tt3896198&apikey=44780b0d')
// xhr.send()

//Metode Fetch
//bentuk hasilnya promise
//Parameternya berisi resolve dan reject
//then dan  catch digunakan untuk mengambil value dari promise
const jumlah = 1+1
const janjiex1 = new Promise((resolve,reject) => {
    if (jumlah === 2) {
        setTimeout(() => {
            resolve('ya benar')
        },3000)
    }else{
        reject('salah')
    }
})
// janjiex1
//     .finally(() => console.log('maaf menunggu'))
//     //parameter response(bebas) menangkap hasil dari resolve
//     .then(response => console.log(`Hasil : ${response}`))
//     //parameter response(bebas) menangkap hasil dari reject
//     .catch(response => console.log(`Hasil : ${response}`))


// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=44780b0d')
// fetch('http://www.omdbapi.com/?i=tt3896198&apikey=44780b0d')
//     .finally(() => console.log('selesai menunggu'))
//     .then(response => {
//         console.log(response)
//         // reject on network failure or if anything prevented the request from completing.
//         // won’t reject on HTTP error status even if the response is an HTTP 404 or 500,
//         // it will resolve normally (with ok status set to false)
//         // console.log(response)
//         if (response.status >= 200 && response.status < 300) {
//             // console.log(Promise.resolve(response));
//             // console.log(resolve)
//             return response.json();
//         }
//         // return reject(new Error(response.statusText));
//     })
//     // .then(response => console.log(response))// console.log(response)}) // parses response to JSON
//     //catch buat nangkep error 
//     .catch(error => {
//         // common error
//         console.log(`return error : '${error}'`)
//         // return null;
//     });

//Penerapan Async Await
function getDetailFilm() {
    return fetch('http://www.omdbapi.com/?i=t6198&apikey=44780b0d')
            .finally(() => console.log('Sukses Fetch Api'))
            .then(response => response.json())
            .then(response => console.log(response))
}
// getDetailFilm()

function film() {
    return fetch('http://www.omdbapi.com/?i=tt3896198&apikey=44780b0d')
            .finally(() => console.log('Sukses Fetch Api'))
            .then(response => {
                console.log(response)
                switch (response.status) {
                    case 401:
                        throw new Error(response.statusText)
                        break;
                    case 500:
                        throw new Error('Internal Server Error')
                        break
                    default:
                        return response.json()
                }
                // response.json()
            })
            .then(response => {
                switch (response.Response) {
                    case 'False':
                        throw new Error(response.Error)
                    case 'True':
                        return response
                }
            })
}

const showDetailFilm = async () => {
    try{
        const getData = await film();
        console.log(`Judul : ${getData.Title}
Tahun : ${getData.Year}
Penulis : ${getData.Writer}`)        
    }catch(err){
        console.log(err)
    }
}

showDetailFilm()

/**
 * Error Handling Promise
 * Fetch hanya akan rejected ketika networknya error
 * jika ingin menghandling errornya di sd
 */

