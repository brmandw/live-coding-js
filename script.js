let array = [8, 3, 9, 2, 5]

function cek(input, arr){
    for(let i = 0; i < arr.length; i++){
        nomor = arr[i]
    }
    console.log(nomor)
    if (input === nomor){
        return input
    } else if (isNaN(input)){
        return "inputan harus angka"
    } else{
        return true
    }
}

console.log(cek(8, array))
