const changeBackground = () => {
    document.body.classList.toggle('aqua-back-color')
    return `anda telah mengganti warna background menjadi ${document.body.style.backgroundColor}`
}

const changeRandomBackground = () => {
    function angkaRandom() {
        let random = Math.floor(Math.random() * 255 + 1);
        return random
    }
    document.body.style.backgroundColor = `rgb(${angkaRandom()},${angkaRandom()},${angkaRandom()})`
    return document.body.style.backgroundColor
}

// const colorRed = () => {
//     let a = parseInt(document.getElementById('rangeRed').value);
//     document.getElementById('colorRed').innerHTML = `Red : ${a}`
//     return a
// }

// const colorGreen = () => {
//     let a = parseInt(document.getElementById('rangeGreen').value);
//     document.getElementById('colorGreen').innerHTML = `Green : ${a}`;
//     return a;
// }

// const colorBlue = () => {
//     let a = parseInt(document.getElementById('rangeBlue').value);
//     document.getElementById('colorBlue').innerHTML = `Blue : ${a}`
//     return a;
// }

const changeBackgroundByRangeRgb = () => {
    let a = parseInt(document.getElementById('rangeRed').value);
    let b = parseInt(document.getElementById('rangeGreen').value);
    let c = parseInt(document.getElementById('rangeBlue').value);
    document.getElementById('colorText').innerHTML = `Red : ${a} ; Green : ${b} ; Blue : ${c}`
    document.body.style.backgroundColor = `rgb(${a},${b},${c})`
}

//Event Listener
document.getElementById('changeBackgroundColor').addEventListener('click' , () => changeRandomBackground())

// document.getElementById('rangeRed').addEventListener('input', () => { changeBackgroundByRangeRgb(); });
// document.getElementById('rangeGreen').addEventListener('input', () => { changeBackgroundByRangeRgb(); });
// document.getElementById('rangeBlue').addEventListener('input', () => { changeBackgroundByRangeRgb(); });

for (let index = 0; index < document.getElementsByClassName("warna").length; index++) {
    document.getElementsByClassName("warna")[index].addEventListener('input', () => { changeBackgroundByRangeRgb(); });    
}
