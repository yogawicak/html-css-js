//input user
alert("Permainan Tebak Angka 1-10\nTekan Ok untuk melanjutkan")
var user = parseInt(prompt("Masukan angka Tebakan Anda"))
//membuat bil random
var comp = Math.floor(Math.random() * 10 + 1)
// console.log(comp)
// alert(comp)

//rules

if(user != comp){
    for(var i = 3; i > 0; i--){
        if(user < comp){
            hasil = 'terlalu kecil'
            alert("tebakan anda : " + hasil + "\n Masih ada " + i + "kesempatan")
            user = parseInt(prompt("Masukan angka Tebakan Anda"))
        }else if(user > comp){
            hasil = 'terlalu besar'
            alert("tebakan anda : " + hasil + "\n Masih ada " + i + "kesempatan")
            user = parseInt(prompt("Masukan angka Tebakan Anda"))
        }else if (user == comp){
            hasil = 'Tebakan anda benar'
        }
    }
}else{
    hasil = 'Tebakan anda benar'
}

switch (user) {
    case comp:
        alert("Tebakan anda benar" + "\nAnda menebak : " + user + "\nJawabannya adalah : "  + comp)
        break;
    default:
        alert("Tebakan anda salah" + "\nAnda menebak : " + user + "\nJawabannya adalah : "  + comp)
        break;
}
// alert(hasil + "\nJawabannya adalah : " + comp)

var angkaAcak8 = ''

//membuat angka acak
function createRandomNumber() {
    var acak = Math.floor(Math.random() * 9 + 1)
    return acak    
}



//perulangan angka acak 8 kali
for(var i = 0; i < 8; i++){
    angkaAcak8 += createRandomNumber();
}
console.log(angkaAcak8)

//buat huruf a - z

// {
// var hasil = '';
// if(user == comp){
//     hasil = 'anda Benar'
// }else if(user >= comp ){
//     hasil = 'terlalu besar'
// }else if(user <= comp){
//     hasil = 'terlal kecil'
// }else{
//     hasil = 'anda tidak memasukan angka'
// }
// alert(hasil)
// }

//hasil
var penumpang = ['Yoga','Sapri'];


//pemumpang naik func tambahPenumpang()
//penumpang turun func hapusPenumpang()
//2 param namapenumpang & array penumpang
//total tmpt duduk = 15

//nama = namaPNP , duduk = duduk di tmpt ke berapa
//duduk = array ke berapa , 

// function tambahPenumpang(nama,duduk) {
//     penumpang.push(nama)
//     return "Silahkan Masuk " + nama
// }

// function hapusPenumpang(nama) {
    
// }
// console.log(tambahPenumpang('Yoga',duduk))
