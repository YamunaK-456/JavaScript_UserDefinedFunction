function map(arr,method)
{
    document.write("<br><br>");
    arr.forEach(element => {
        method(element);
    });

}


function findSquare(element){
    document.write(element*element+"\n");
}


function Incerement(element){
    document.write(element+1+"\n");
}

const arr=[1,2,3,4,5];
map(arr,findSquare);
map(arr,Incerement);