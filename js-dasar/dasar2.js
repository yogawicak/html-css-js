console.log("PopUp Box JS")
console.log("jenis popup : alert , prompt , confirm")
console.log("syntax : alert() , prompt() , confirm()")
// alert("test popup box")
// var nama = prompt("input namamu")
// alert("hai " + nama)
// confirm("apakah benar namamu " + nama + "?");
console.log("------------------------------")
console.log("Control Flow JS")
console.log("pengertian : \n apabila program memiliki > 1 statement maka akan diexecute dari atas kebawah atau kiri ke kanan")
console.log("Control Flow Terbagi dua : \n pengulangan & pengkondisian")
console.log("pengulangan : \n for , while , do while ")
console.log("pengkondisian : \n if \n if.. else \n if.. else if.. else \n switch")
console.log("------------------------------")
console.log("Perulangan While")
console.log("syntax : while(kondisi) { \n \t\t\t   aksi \n \t\t\t }")
console.log("while yang dihentikan oleh program sendiri \n syntax : \n nilai awal \n\t while(kondisi terminasi) { \n\t\t\t aksi \n\t increment/decrement\n } ")
var nilaiawal = 1;
while (nilaiawal <= 20) {
    console.log("hai ");
    nilaiawal++;
};
console.log("Latihan")
var angkotawal = 1;
while(angkotawal <= 10){
    console.log("Angkot No. " + angkotawal + " beroperasi dengan baik" );
    angkotawal++
}
console.log("")
console.log("Perulangan For")
console.log("for(nilaiawal,kondisi terminasi,increment/decrement){\n\t\t\taksi\n\t\t}")
console.log("Contoh")
for(var angkaawal=1; angkaawal <= 10; angkaawal++){
    console.log(angkaawal)
}
console.log("Latihan For dan While")
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
// var keputusan = (angkotBeroperasi < 7) && (noAngkot <= jumlahAngkot)
// var keputusan2 = angkotBeroperasi < 2 <= jumlahAngkot
// console.log(keputusan2)
// console.log(keputusan)
while(noAngkot <= angkotBeroperasi){
    console.log("Angkot No. " + noAngkot + " Beroperasi dengan baik")
    noAngkot++
}
for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
    console.log("Angkot No. " + noAngkot + " Tidak Beroperasi dengan baik");
}
console.log("-------------------------------")
console.log("Percabangan If Else")
console.log("Logika : jika bernilai true maka akan menjalankan syntax jidak tidak keluar dari syntax")
console.log("Syntax : if(kondisi){\n\taksi\n\t}")
console.log("Contoh if Else lihat kodingan")
// var nilai = window.prompt("Input")
// if(nilai % 2 == 0){
//     alert("angka " + nilai + " termasuk bilangan genap")
// }else{
//     alert("angka " + nilai + " termasuk bilangan ganjil")
// }
console.log("Latihan If Else dan For")
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " beroperasi Dengan Baik");
    }else{
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi");
    }
}
console.log("")
console.log("Percabangan Else If")
console.log("Syntax : if(kondisi 1){\n\taksi\n}else if(kondisi 2){\n\taksi2\n}else{\n\taksi3\n}")
console.log("Contoh Else if lihat kodingan")
// var nilai = window.prompt("Input")
// if(nilai % 2 == 0){
//     alert("angka " + nilai + " termasuk bilangan genap")
// }else if(nilai % 2 == 1){
//     alert("angka " + nilai + " termasuk bilangan ganjil")
// }else{
//     alert("anda tidak memasukan angka")
// }
console.log("Latihan Else if For")
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " beroperasi Dengan Baik");
    }else if(noAngkot == 8){
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    }else{
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi")
    }
}
console.log("")
console.log("Latihan Pengkondisian")
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot <= angkotBeroperasi){
        console.log("Angkot No. " + noAngkot + " beroperasi Dengan Baik");
    }else if(noAngkot == 8 || noAngkot == 10){
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    }else{
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi")
    }
}
var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;
for(noAngkot; noAngkot <= jumlahAngkot; noAngkot++){
    if(noAngkot < 5){
        console.log("Angkot No. " + noAngkot + " sedang beroperasi");
    }else if(noAngkot == 8 || noAngkot == 10 || noAngkot == 5){
        console.log("Angkot No. " + noAngkot + " sedang lembur");
    }else{
        console.log("Angkot No. " + noAngkot + " sedang tidak beroperasi")
    }
}
console.log("------------------------------------")
console.log("Percabangan Switch")
console.log("switch(ekspresi) {\n\t case 'nilai 1':\n\taksi 1\n\t[break;]\n\tdefault:\n\taksi default\n\t[break;]\n\t}")
console.log("Contoh Switch")
// var angkot = parseInt(prompt("Masukan Angka :"));
console.log("Parse int memkasa untuk merubah type data menjadi integer")
console.log("semua yang diinput dari prompt hasilnya menjadi 'string'")
// switch (angkot) {
//     case 1:
//         alert("anda memasukan angka " + angkot)
//         break;
//     default:
//         alert("anda memasukan angka bukan 1")
//         break;
// }
console.log("Contoh Switch tanpa Break")
// var item = prompt('Masukan nama makanan / minuman \n cth: nasi,daging,susu,hamburger,softdrink')
// switch (item) {
//     case 'nasi':
//     case 'daging':
//     case 'susu':
//         alert(item + " Merupakan makanan sehat")
//         break;
//     case 'hamburger':
//     case 'softdrink':
//         alert(item + " Merupakan makanan tidak sehat")
//         break;
//     default:
//         alert("Item yang anda masukan tidak ada di database")
// }
var isi = "";
for (let i = 0; i < 40 ; i++) {
    isi += "-";
}
console.log(isi)
console.log("Latihan Pengulangan & Pengkondisian Bersarang")
var isian = "";
for (var i = 0; i < 5 ; i++) {
    isian += '*';
    isian += '\n';
}
console.log(isian)
var isian = "";
for (var y = 0; y <= 20 ; y++) {
    for(var x = 0; x <= y; x++){
        isian += '*';
    }
    isian += '\n';
}
console.log(isian)
console.log("Latihan Pengulangan & Pengkondisian")
var isian = "";
for (var a = 0; a <= 10; a++){
    for(var b = 0; b <= a; b++){
        isian += '*';
    }
    isian += '\n';
}
console.log(isian)