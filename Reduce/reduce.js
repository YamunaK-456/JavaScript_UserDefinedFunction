function reduce(arr,method){
    document.write("<br><br>");
    method(arr);
}

function getSum(arr){
    document.write("Sum of rounded elements: ");
    var sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=Math.round(arr[i]);
    }
    document.write(sum+"\n");
}

function getSubtraction(arr){
    document.write("Subtraction of rounded elements: ");
    var subtraction=Math.round(arr[0]);
    for(let i=1;i<arr.length;i++){
        subtraction-=Math.round(arr[i]);
    }
    document.write(subtraction+"\n");
}

function countNegative(arr){
    document.write("Count of Negative Numbers: ");
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<0){
            count+=1;
        }
    }
    document.write(count+"\n");
}

let numbers=[15.5,-2.3,1.1,4.7]
reduce(numbers,getSum);
reduce(numbers,getSubtraction);
reduce(numbers,countNegative);

