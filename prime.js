//Writing code for chicking a number prime or not 
//<<-------Code writen by Vicky Sarkar------>>

let num =184
let count=0
for(let i=0;i<=num;i++){
	if(num%i==0){
	count++
	}
}

if(count==2){
	console.log(Num,"Number is prime number")
}else{
	console.log(num,"Number is not a prime number")
}
