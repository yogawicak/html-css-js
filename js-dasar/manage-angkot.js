var penumpang = ["Yoga",'Ucup',undefined];
// penumpang[0] = undefined
// console.log(penumpang)

// var cariNama = penumpang.find(function(nama) {
//     for(var i = 0; i < penumpang.length; i++){
//         if(penumpang[i] === nama){
//             return console.log("nama anda sudah dipakai")
//         }else{
//             return console.log("masuk")
//         }
//     }
// })
// console.log(cariNama)

// var cari = penumpang.indexOf("sss")
// console.log(typeof(cari))

function tambahPenumpang(nama) {
    var a = penumpang.indexOf(nama)
    var b = penumpang[a]
    if(a == -1){
        for (let i = 0; (i < penumpang.length); i++) {
        if (penumpang[i] === undefined) {
            penumpang[i] = nama;
            break;
        }
    }
    console.log("Silahkan duduk " + nama + "\nAnda duduk di kursi nomor " + (a + 1))        
    }else if(b == nama){ 
        return console.log(nama + " Sudah Berada di dalam angkot") 
    }
}


function penumpangKeluar(nama) {
    var a = penumpang.indexOf(nama)
    // console.log(a)
    var b = penumpang[a]
    if(a == -1){
        console.log(nama + " Tidak ada di dalam Angkot")
    }else if(b == nama){
        console.log(typeof(penumpang[b]))
        penumpang[a] = undefined
        console.log(nama + " Sudah Keluar dari angkot") 
    }
}


console.log(penumpang)
console.log(tambahPenumpang("su"))

//Algoritma
//func tambah penumpang untuk menambah pnp
//jika pnp sudah ada di angkot notice sudah ada {jika belum akan ditambahkan di tempat yang undefined
//jika tidak ada yg undefined akan ditambahkan ke paling akhir
//func keluar penumpang untuk mengeluarkan pnp {jika nama ada di angkot maka akan keluar dan merubah posisinya
//menjadi undefined jika tidak ada namanya maka notice tidak ada}