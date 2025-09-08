let i=1;
let j=0;
let k=0;
setInterval(()=>{
    console.log(k,":",j,":",i);
    i++;
    if (i==60){
        j+=1;
        i=0;
    }
    if (j==60){
        k+=1;
        j=0;
        i=0;
    }
},1000)