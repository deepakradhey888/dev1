let clargs = process.argv;
let n = parseInt(clargs[2], 10);

let is Prime = true;
for(let div = 2; div*div <= n; div++){
    if(n % div == 0){
        is Prime = false;
        break;
    }
}
if(is prime == true){
console.log(n + "is prime");
}else{
    console.log(n + "is not prime");
}

