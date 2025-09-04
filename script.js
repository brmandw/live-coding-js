let array = [8, 3, 9, 2, 5]

function cek(input, arr){
    let nomor = 0
    for(let i = 0; i < arr.length; i++ ){
        nomor = arr[i] 
    }

    if (input === nomor){ 
        return input
    } else if (isNaN(input)){
        return "inputan harus angka"
    } else{
        return false
    }
}

console.log(cek(8, array))
