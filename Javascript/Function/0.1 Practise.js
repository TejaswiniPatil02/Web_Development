function countvowels(str)
{
    let count=0;
    for(let char of str )
   {
      if(char==="a"||char==="e" ||char==="i" || char==="o" || char==="u")
      {
        count ++;
      }

    }
    console.log(count);
}

const countvow= (str)=> 
{
     let count=0;
    for(let char of str )
   {
      if(char==="a"||char==="e" ||char==="i" || char==="o" || char==="u")
      {
        count ++;
      }

    }
 return  count ;
}

