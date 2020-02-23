//get pilihan user
var user = prompt("Pilih gajah,semut atau orang")


//get pilihan computer
//bikin bilangan random
var comp = Math.floor(Math.random() * 3 + 1)
if(comp == 3){
    comp = 'gajah';
}else if(comp == 2){
    comp = 'semut';
}else if(comp == 1){
    comp = "orang";
}
console.log(comp)
//nentuin rules
var hasil = '';
if(comp == user){
    hasil = 'Seri !'
}else if(user == 'gajah'){
    if(comp == 'orang'){
        hasil = 'Gajah Menang'
    }else if(comp == 'semut'){
        hasil = 'Orang Menang'
    }
}else if(user == 'semut'){
    if(comp == 'orang'){
        hasil = 'orang Menang'
    }else if(comp == 'gajah'){
        hasil == 'gajah Menang'
    }
}else if(user == 'orang'){
    if(comp == 'semut'){
        hasil = 'orang menang'
    }else if(comp == 'gajah'){
        hasil = 'gajah menang'
    }
}
alert("anda memilih : " + user + " & Komputer memilih : " + comp + "; " + "Hasilnya : " + hasil)
//tampilkan hasil