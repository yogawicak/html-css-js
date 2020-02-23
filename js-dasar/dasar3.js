console.log("Function Javascript")
console.log("Pengertian : Sebuah Sub Program yang dapat dipanggil di bagian lain program\n")
console.log("Kenapa pakai function?\nReusability:DRY(Do not Repeat Yourself\nDekomposisi\nModularitas)")
console.log("Kategori Function : \n Built-in Function \n User Defined Function")
console.log("User Defined Function : \n Fungsi yang dibuat sendiri \n pake keyword function \n nama function(optional) \n argument/parameter(disimpan di dalam () boleh ada boleh tidak boleh lebih dari satu dipisah koma) \n function body dibungkus {} \n dapat mengembalikan nilai return atau tidak")
console.log("Membuat User Defined Function : \n deklarasi(function deklaration) \n function expression")
console.log("Contoh Function")
function jumlahDuaBilangan(a,b) {
    var total;
    total = a+b;
    return total;
}
var jumlahDuaBilangan2 = function (a,b) {
    var total;
    total = a+b;
    return total
}
console.log("Latihan")
// var sisiKubus1 = parseInt(prompt("Masukan Volume Kubus 1 : "))
// var sisiKubus2 = parseInt(prompt("Masukan Volume Kubus 2 : "))
// var volumeKubus1 = Math.pow(sisiKubus1,3)
// var volumeKubus2 = Math.pow(sisiKubus2,3)
// var JumlahVolume = volumeKubus1 + volumeKubus2
// console.log("Volume Kubus 1 : " + volumeKubus1 + "\nVolume Kubus 2 : " + volumeKubus2 + "\nJumlah Volume Kubus 1 + Kubus 2 : " + JumlahVolume)
function jumlahVolumeDuaKubus(a,b) {
    var volumeKubus1 = Math.pow(a,3)
    var volumeKubus2 = Math.pow(b,3)
    var total = volumeKubus1 + volumeKubus2
    return total
}

var kubus1 = prompt("Masukan sisi Kubus 1 : ")
var kubus2 = prompt("Masukan sisi Kubus 2 : ")
alert("Hasil Jumlah Kubus 1 & 2 : " + jumlahVolumeDuaKubus(kubus1,kubus2))
console.log("-------------------------------")
console.log("Pembahasan Parameter & Argumen pada function")
console.log("Parameter : variable yang ditulis di dalam kurung saat function dibuat")
console.log("Argument : Nilai yang dikirim ke parameter saat fungsi dipanggil")
console.log("jika parameter & argumen tidak sesuai :\n jika parameter lebih sedikit dari argument,maka argument lebihannya diabaikan\n jika parameter > argument, maka parameter lebihannya diisi dengan nilai undefined")
console.log("variable 'argument' adalah array yang berisi nilai yang dikirimkan saat fungsi dipanggil")
console.log("Contoh Penggunaan Variable Argument")
function kali() {
    hasil = 1
    for(var i = 1; i < arguments.length; i++){
        hasil = arguments[i] * hasil
    }
    return hasil;
}

var cobaKali = kali(1,2,3,4,5,6,7)
console.log(cobaKali)

function tes(){
    return arguments
}

console.log(tes(1,2,3,4,5))
console.log("------------------------------------")
console.log("Refactoring")
console.log("Pengertian :\n sebuah proses mengubah kode agar menjadi lebih 'baik tanpa' tanpa mengubah fungsionalitas")
console.log("Kenapa Refactoring ?\n Readability , DRY , Testability , Performance , Maintainability")
console.log("------------------------------------")
console.log("Scope")
console.log("Pengertian : bagaimana sebuah variabel dapat diakses dalam program")
console.log("javascript menggunakan konsep function scope")
console.log("------------------------------------")
console.log("Rekursif")
console.log("Pengertian : Sebuah Fungsi yang memanggil diri sendiri")
console.log("Contoh Kasus Looping Rekursif")
// function tampilAngka(n){
//     console.log(n)
//     return(n-1)
// }
// console.log(tampilAngka(10))
console.log("Base Case : Kondisi Rekursif yang menghasilkan nilai")

function tampilAngka(n){  
    if(n === 0){        /* Base Case */
        return
    }
    console.log(n)
    tampilAngka(n-1)
}
console.log(tampilAngka(10))
console.log("Contoh Faktorial")
function faktorial(n){
    if (n === 0){
        return
    }
    return n * faktorial(n-1)
}
console.log("Semua looping bisa dibuat rekursif tapi tidak sebaliknya")
console.log("------------------------------------")
console.log("Declaration vs Expression")
console.log("di javascript ada fitur hoisting yang mana kita dapat memanggil function diatas syntax functionnya")
console.log("------------------------------------")
console.log("Array")
console.log("Pengertian :\n susunan sistematis untuk objek-objek yang serupa")
console.log("Array Programming :\n tipe data yang digunakan untuk mendeskripsikan kumpulan elemen(nilai/variabel) yang mana tiap elemennya punya index")
console.log("Array Sakti :\n dapat menampung lebih dari 1 nilai")
console.log("contoh var Array")
var hari = ['senin','selasa','rabu',1,2,3];
console.log(typeof(hari[0]))
console.log("Array Multidimensional")
var myfunc = function(){
    alert("hello Function")
}
var myarray = ['teks',1,true,myfunc,[2,3,4]]
console.log(myarray[4][2])
console.log("--------------------------------------")
console.log("Contoh Array")
console.log("Menambah Array")
var arr = []
arr[0] = 'yoga'
arr[1] = 1
arr[2] = true
console.log(arr)
console.log("Menghapus Array")
var arr2 = ['penyok',2,false]
arr[2] = undefined
console.log(arr2)
console.log(arr)
console.log("Method Array")
console.log('length\njoin\npush,pop,shift,unshift\nslice,splice\nforeach,map,sort')
var arr4 = ['penyok',2,false] 
console.log(arr4.push("joni"))
console.log()                                  /* berubah menjadi string */
console.log(arr4.join("|"))
var arr5 = ['Shandika','Galih','Nofa']
arr5.splice(1,1,['udin'])
console.log(arr5)
var arr6 = ['Budut','raw','sumi']
console.log(arr6.slice(0,2))
var arr7 = [1,2,3,4,5,6]
arr7.forEach(function(e){
    console.log(e);
});
var arr8 = [1,2,3,4,5,6]
arr9 = arr8.map(function(e){
    return e + 5;
});
console.log(arr9)
var arr10 = [1,10,20,45,2,3,4,5,6]
arr11 = arr10.sort((a,b) => a-b)
console.log(arr11)
console.log("pop : menghapus element terakhir array")
console.log("shift : menghapus element pertama array")
console.log("unshift : menambahkan elemnt array di paling depan")
console.log("slice : memotong array dari mana sampe mana")
console.log("spice : memotong lalu menambahkan array")
console.log("--------------------------------------")
console.log("Object Javascript")
console.log("Pengertian: kumpulan nilai yang memiliki nama")
console.log("object adalah array yang lebih sakti")
console.log("Contoh Object")
var mahasiswa = {
    nama : 'Yogaw',                     //properti; var dalam object
    lulus : false,                      //properti
    nilaiSemester : [90,83,78,84,73,92],//properti
    alamat : {
        jalan : 'percetakan negara 7',
        kota : 'jakarta',
    },
    totalNilai : function (params) {   //function dalam object disebut method
        var total = 0;
        var semester = this.nilaiSemester;
        for (var i = 0; i < semester.length; i++) {
            total += semester[i];
        }
        return total/semester.length
    }
}
console.log(mahasiswa.alamat.jalan)

console.log("memanggil object")
console.log(mahasiswa.totalNilai())
console.log("---------------------------------")
console.log("Jangan menggunakan var,pakai let")
console.log("IIFE : membuat function yang langsung dipanggil")
console.log("Contoh")
(function() {
    for (var i = 0; i < 10; i++) {
        console.log(i);
    }    
}());