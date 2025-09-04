let array = [8, 3, 9, 2, 5]

function cek(input, arr){
    if (isNaN(input)){
        return "input harus angka"
    }

    if (arr.includes(input)){ 
        return input
    } else{
        return false
    }
}

console.log(cek(0, array))
