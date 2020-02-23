//Object Literal
let pegawai = {
    nama : 'Yoga',
    umur : 18,
    energi : 10,
    makan : function (porsi) {
        this.energi += porsi;
        //Stringliteral pakai backtick//
        console.log(`Selamat Makan ${this.nama}\nEnergimu bertambah menjadi ${this.energi}`)
    }
}
//Object Function Declaration
function Pegawai(nama,umur,energi) {
    let pegawai = {};
    pegawai.nama = nama;
    pegawai.umur = umur;
    pegawai.energi = energi;
    
    pegawai.makan = function (porsiMakan) {
        this.energi += porsiMakan;
        console.log(`Selamat Makan ${this.nama}\nEnergimu bertambah menjadi ${this.energi}`);
    }
    return pegawai
}

let Agoy = Pegawai('Agoy',19,20);

//Create Object Constructure Function

function namaPegawai(nama,umur,energi) {
    let pegawai = {};
    this.nama = nama;
    this.umur = umur;
    this.energi = energi;
    
    this.makan = function (porsiMakan) {
        this.energi += porsiMakan;
        console.log(`Selamat Makan ${this.nama}\nEnergimu bertambah menjadi ${this.energi}`);
    }
}

let Ayog = new namaPegawai('Ayog',21,10);

console.log("---------------------------------------")
console.log("Penggunaan Object.create()")
console.log("membawa properti & method dari parentnya")
console.log("contoh")
// const methodPegawai = {
//     makan : function (porsiMakan) {
//         this.energi += porsiMakan;
//         console.log(`Selamat Makan ${this.nama}\nEnergimu bertambah menjadi ${this.energi}`);
//     },
//     kerja : function (jamKerja) {
//         this.energi -= jamKerja * 2;
//         console.log(`Anda sudah bekerja selama ${jamKerja}, Energi anda tersisa ${this.energi} Silahkan beristirahat`);
//     },
//     tidur : function (jamTidur) {
//         this.energi += jamTidur * 2;
//         console.log(`Anda sudah tidur selama ${jamTidur}, Sekarang energi anda menjadi ${this.energi}`)
//     }
// }

// function pegawaiName(nama,umur,energi) {
//     let pegawai = Object.create(methodPegawai);
//     pegawai.nama = nama;
//     pegawai.umur = umur;
//     pegawai.energi = energi;
//     return pegawai;
// }

// let udin = pegawaiName('Udin',12,15)

console.log("-------------------------------------------------------")

function karyawan(nama, umur, energi) {
    this.nama = nama;
    this.umur = umur;
    this.energi = energi;
}

karyawan.prototype.makan = function (porsiMakan) {
    this.energi += porsiMakan;
    return `Selamat Makan ${this.nama}\n Energimu bertambah menjadi ${this.energi}`;
}

karyawan.prototype.tidur = function (jamTidur) {
    this.energi += jamTidur * 2;
    return `Anda sudah tidur selama ${jamTidur} jam, Sekarang energi anda menjadi ${this.energi}`;
}

karyawan.prototype.kerja = function (jamKerja) {
    this.energi -= jamKerja * 2;
    return `Anda sudah bekerja selama ${jamKerja}, Energi anda tersisa ${this.energi} Silahkan beristirahat`;
}


let udin = new karyawan('Udin',12,15);

console.log(`Kesimpulan :\n Semua tipe data yang ada di Javascript adalah object contohnya ada di kodingan`)

//background process
// let absen = [1,2,3];
// yang terjadi ketika membuat array adalah
// let absen = new Array(1,2,3);


console.log("----------------------------------------")
console.log("Execution Context, Hoisting, Scope")

console.log(nama)
var nama = 'cung';

//creation phase
/*1. cari nama var lalu set nilai jadi undefined
  2. cari nama functon lalu set nilainya jadi function()
  3. jika ada var yang dibawah lalu dipanggilnya diatas maka hasilnya jadi undefined
  4. mendefinisikan 2 var global yaitu this & window 
  5. hoisting: menaikan semua var keatas
 */
//note
/*
    1. function seharusnya mengembalikan nilai maka akhirnya harus ada return jika tidak maka nilainya undefined
    2. function membuat Local execution context sendiri di dalamnya yg terdapat creation & execution phase
    3. didalam function kita dapat mengakses 3 var secara global yaitu arguments,window,this
    4. jika kita memasukan argumen tapi tidak ada parameter di funcnya maka akan masuk ke objek argumen

*/

//execution phase
/*
  1.
 */

console.log("------------------------------------")
console.log("Lexical Scope")
console.log("inner function dapat mengakses variable di parent functionnya");
console.log("Closure adalah function yang mengambil data dari function parentnya");


function init(){
    let nama = 'penyog';
    function tampilNama() {
    return nama;
    }
    return tampilNama();
}
init();

function init2() {
    return function tampilNama(nama) {
        return nama;
    }
}

let panggilNama = init2();
console.log(panggilNama('udin'))

console.log("Alasan membuat closure :\n1.membuat function factory\n2.membuat private method")
console.log("contoh function factory")
function salam(waktu) {
    return function namaOrang(nama) {
        console.log(`selamat ${waktu}, Hai ${nama} semoga harimu menyenangkan`)
    }
}
let selamatPagi = salam('Pagi')
selamatPagi('Yogs')
console.log("contoh private method")
let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    }
})();
console.log("--------------------------------------")
console.log("Arrow function")
console.log("Pengertian : Bentuk lain dari function supaaya lebih ringkas")
console.log('contoh')

//implisit return
const namaKu = (nama) => 
    `Lu jelek ${nama}`;

console.log(namaKu('surip'))

let siswa = ['Penyok','Bengep','Benjol']

let jumlahHurufSiswa = siswa.map(function (nama) {
    return {
        'Nama Siswa': nama,
        'Jumlah Huruf Siswa':nama.length,
    };
})
console.log(jumlahHurufSiswa);

console.log("kalo return sebagai objek harus dibungkus lagi dengan kurun biasa")

let jumlahHurufSiswa2 = siswa.map(nama => ({nama: nama,jmlHuruf: nama.length}))

console.log(jumlahHurufSiswa2)
console.log("------------------------------------")
console.log("Konsep This arrow function")
console.log('arrow function tidak mengenal this , akan mengikuti this parentnya');
console.log("Higher Order Function")
console.log('Note : di js function diperlakukan seperti object');
console.log('Pengertian : function yang beroperasi pada function lainnya, di argument maupun return');
console.log("------------------------------------");
console.log('Filter Map Reduce');
console.log('contoh');
const angka = [2,6,7,1,3,9,0,3,-1,-2]


//for
const filterAngka = () =>{
    const newAngka = [];
    for (let i = 0; i < angka.length; i++) {
        if (angka[i] >= 3) {
            newAngka.push(angka[i]);
        }
    }
    return newAngka;
}

//filter
const newAngka = angka.filter((a) => a >= 3)
console.log(newAngka);

//map
const newAngka2 = angka.map((b) => b*3);
console.log(newAngka2)

//reduce
const newAngka3 = angka.reduce((a,b) => a - b)
console.log(newAngka3);

//method chaining menggabungkan beberapa high order function
// const RandomNumber = (banyakAngka) => {
//     for (let i = 0; i < banyakAngka; i++) {
        
//     }
// }

console.log("------------------------------------------");
console.log("Template Literal");
console.log('Pengertian : string yang bisa melakukan ekspresi');
console.log(`manfaat : 
1.Multi line string
2.Embedded expression : text ${newAngka3} text
3.html fragments
4.expression interpolation : text ${1+1} adalah ${2} text
5.Tagged template`);
console.log('-------------------------------------------');
console.log('Tagged Template Literal');
console.log('Bentuk yang lebih kompleks dari template literals');
console.log('contoh');

//parameter string dapat dipakai untuk memecah strings
const templateTagLiteral = (strings) => {
    return strings;
}

//parameter ...values untuk mengambil expressionssnya
const templateTagLiteral2 = (strings , ...values) => {
    return values;
}

const templateTagLiteral3 = (strings, ...values) => {
    return strings.reduce((hasil,str,i) => `${hasil}${str}${values[i] || ''}`,'')
}

const str = templateTagLiteral`Halo ${nama} umur anda ${pegawai.umur}`;
const str2 = templateTagLiteral2`Halo ${nama} umur anda ${pegawai.umur}`;
const str3 = templateTagLiteral3`Halo ${nama} umur anda ${pegawai.umur}`;
console.log(str);
console.log(str2);
console.log(str3);

//Penggunaan Tag Template Literal 
//1.Escaping / Sanitazing HTML Tags
//2.Translation / Internalization
//3.Styled Component
console.log('-------------------------------------------');
console.log('Destructuring Assigment');
console.log(`Pengertian : Expression pada js yang dapat membongkar nilai dari array / prop dari obj kedalam var terpisah`);

//Destructuring Array
const textPerkenalan = [
    'Halo','nama','saya','Penyoks'
]
// const [arr0,arr1,arr2,arr3] = textPerkenalan;
// console.log(arr1);

//skipping items
const [arr0,,,arr3] = textPerkenalan;
console.log(arr0);

//swap items
// let a = 1;
// let b = 2;
// [a,b] = [b,10];
// console.log(a,b);

//return value pada func
//jika ingin membuat return obj func pastikan desctructuring varnya sama dengan properti objectnya
function coba() {
    return {
        c : 'yogs',
        d : 25,
    }
}
function coba2() {
    return [1,2]
}

const {c,d} = coba();
const [a,b] = coba2();
console.log(c);

//Rest Parameter

const [e, ...val] = [1,2,3,4,5,6,7,8,9];
console.log(a,val);

//Destructuring Object
//Assigment tanpa deklarasi Object --> gaush deklarasi tipe varnya
//jika ingin berbeda assign ke var baru
//Memberikan Default Value --> jika ada email di obj akan tampil email jika tidak  akan tampil email default
({nama : f, umur : g , email : h = 'email@default.com'} = {
    nama : 'yogs',
    umur : 20,
    // email : 'yogs@gmail.com'
})

const mahasiswi = {
    id : 1234,
    nama : 'penyoks',
    umur : 22,
    email : "penyoks@gmail.com",
}

function getIdMahasiswi({id , nama}) {
    return `id : ${id}
nama : ${nama}`
}

console.log(h);
console.log(getIdMahasiswi(mahasiswi));







