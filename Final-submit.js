function cubeNumber(number) {
    if(typeof number !== "number"){
        return "please provide a number";
    }
    else{
        const cub = Math.pow(number, 3);
        return cub;
    }
}


function matchFinder(string1, string2) {
    if(typeof string1 !== 'string' || typeof string2 !== 'string'){
        return 'Invalid String';
    }
    else {
        const findMatchString = string1.includes(string2);
        return findMatchString;
    }
}


function sortMaker(arr) {
    let number1 = arr[0];
    let number2 = arr[1];
    if(number1 <=0 || number2 <= 0){
        return "Invalid Input";
    }
     else if(number1 === number2){
        return "equal";
    }
     else {
        if (number1 < number2){
            [number1, number2] = [number2, number1];
        }
        return [number1, number2];
     }
}


    function findAddress(obj) {
        if(typeof obj !== "object"){
            return "please provide me a valid object";
        }else{
            const street = obj.street || '__';
            const house = obj.house || '__';
            const society = obj.society || '__';
            return street + ' ' + house + ' '  + society; 
        }
    }
    const obj = {
        street: '10,', 
        house: '15A', 
        society: 'Earth Perfect'
    }


function canPay(changeArray, totalDue) {
    if (changeArray[0] === 0) {
        return "change array is empty.";
    } else {
        let sum = 0;
        for (let i = 0; i < changeArray.length; i++) {
            sum += changeArray[i];
        }
        if (sum >= totalDue) {
            return true;
        } else {
            return false;
        }
    }
}