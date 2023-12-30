function filter(arr,method){
    let newArr=[];
    for(let i=0;i<arr.length;i++){
        let val=method(arr[i]);
        if(val!=null){
            newArr.push(val);
        }
    }
    return newArr;
}

function adults(age){
    if(age>=18){
        return age;
    }
    else{
        return null;
    }
}

function negative(num){
    if(num<0){
        return num;
    }
    else{
        return null;
    }
}

function twoDigitNumbers(num){
    if(num>9){
        return num;
    }
    else{
        return null;
    }
}

let members=[23,45,6,17,12,56,4];
let number=[-3,5,-7,2,1]
document.getElementById("try").innerHTML=filter(members,adults);
document.getElementById("negate").innerHTML=filter(number,negative);
document.getElementById("twodigit").innerHTML=filter(members,twoDigitNumbers);