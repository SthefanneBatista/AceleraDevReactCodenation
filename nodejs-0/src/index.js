'use strict'

const fibonacci = () => {
    const limit = 350; 
    const array = [0,1]; 
    while(array[array.length - 1] <= limit){
        array.push(array[array.length - 2] + array[array.length - 1]); 
    }
    return array;
}

const isFibonnaci = (num) => fibonacci().includes(num);

module.exports = {
    fibonacci,
    isFibonnaci
}
