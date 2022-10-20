//Writing code for chicking a string palindrome or not 
//<<-------Code writen by Vicky Sarkar------>>


let str = "civic";
let N=str.length-1
for(let i =0;i<=N/2; i++) {
     if(str[i]!=str[N-1-i]){
	 console.log("Yes")
        break;
     }else{
	     console.log("No")
       
         break;
     }
}

