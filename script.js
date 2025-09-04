let array = [8, 3, 9, 2, 5]

function cek(input, arr){
    if (isNaN(input)){
        return "input harus angka"
    }

    for(let i = 0; i < arr.length; i++ ){
        if (input === arr[i]){
            return input
        }
        return false
    }
}

console.log(cek(8, array))
