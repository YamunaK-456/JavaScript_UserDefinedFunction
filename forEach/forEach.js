function forEach(arr,method){
    document.write("<br><br>");
    method(arr);
}

function getIndex(arr){
    document.write("Indices of the elemets: <br>");
    for(let i=0;i<arr.length;i++){
        document.write(i+" : "+arr[i]+"<br>");
    }
}

function isPositive(arr){
    document.write("Checking if elements are Postive or Not: <br>");
    for(let i=0;i<arr.length;i++){
        if(arr[i]>0){
            document.write(arr[i]+" : True"+"<br>");
        }
        else
        document.write(arr[i]+" : False"+"<br>");
    }
}

function isNegative(arr){
    document.write("Checking if elements are Negative or Not: <br>");
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            document.write(arr[i]+" : True"+"<br>");
        }
        else
        document.write(arr[i]+" : False"+"<br>");
    }
}

let fruits=["Apple","Orange","Cherry"];
forEach(fruits,getIndex);

let numbers=[15,-2,9,-4,-6,8]
forEach(numbers,getIndex);
forEach(numbers,isPositive);
forEach(numbers,isNegative);