//Destructuring Function return array
const perjumlahanPerkalian = (a,b) => {
    return [a + b , a * b];
}

const [jumlah , kali] = perjumlahanPerkalian(5,6);

console.log(jumlah);
console.log(kali);

//Destructuring Function return object

const kalkulasi = (a,b) => {
    return {
        tambah: a+b,
        kurang: a-b,
        kali: a-b,
    }
}
const {tambah , kurang , kali : a} = kalkulasi(5,6)
console.log(kurang);

//Destructuring Function argument

const siswa1 = {
    nama: 'Yogs',
    umur: 19,
    email: 'yogs@gmail.com',
    alamat: {
        kos: 'jln percetakan negara 7',
        rumah: 'jln kemuning 2'
    }
}

const cetakSiswa = ({nama,email,alamat:{kos,rumah}}) => {
    return `Halo ${nama} , email anda : ${email}
alamat anda : 
1.kos : ${kos} 
2.rumah : ${rumah}`
}

console.log(cetakSiswa(siswa1));

//Looping Baru for..of for..in
/*
    for..of : looping untuk menulusuri object iterable
    object iterable : string,array,nodelist,typedarray,map,set,user-defined iterable
*/

const mhs = ['penyoks','udin','bejo']

//array
//foreach biasa
mhs.forEach((m) => {
    return console.log(m);
});

//forof
for(const m of mhs){
    console.log(m);
}

//string
const nama = 'Penyoks Bedun'
for (const m of nama) {
    console.log(m);
}

/*
    for..in : looping untuk unemerable 
    example : properti dari object
*/

//---Spread Operator---//
/*
    Memecah iterables menjadi single content
*/

//menggabungkan array
const arr1 = ['bedo','syahul','urip']
const arr2 = [10,20,30]
const combine = [...arr1 , ...arr2]
console.log(combine);

//mecoppy array
const arr3 = [...arr1]
arr3[0] = 'bedo2'
console.log(arr3);

//---Rest Parameter---//
/*
    Mereprestantikan Arguments pada function dengan jumlah yang tidak
    terbataas menjadi sebuah array
*/

const myFunc = (...args) => {
    return args;
}

console.log(myFunc(1,2,3));
