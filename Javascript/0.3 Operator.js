//arithmatic operators
 let a=5;
let b=2;
console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);

//Unary operator
 let c=5;
let d=2;
console.log("c=",c,"d=",d);
     //increment
     a= a+1;      //a++ postincrement
     console.log("a=",a); //6
     ++a;            //preincrement
     console.log("++a=",a);
     //decrement
     a=a-1;        //postdecrement
     console.log("a=",a); //5
     --a;            //predecrement
      console.log("a=",--a);

//assignment operator
 let e=2;
 let f=2;
e+=4;
console.log("e=",e);

f*=4;
console.log("f=",f);

f-=3;
console.log("f=",f);
//comparision operator
let x=5;
let y=2;
console.log("5==3",x==y);
console.log("5==5",x==y);

console.log("5!=2",x!=y);

//== equal
let xa=5;
let ya="5";
console.log("xa==ya",xa==ya);

//=== equal
let xb =5;
let yb="5";
console.log("xb===yb",xb===yb);

//logical operators
  //&&
let aa=7;
let bb=6;
let cond1 = aa > bb;
let cond2 = aa=== 7;
console.log("cond1 && cond2=",cond1 && cond2);
  //||

 let ab=6;
 let ac=5;
 console.log("cond1 || cond2 = ", a < b || a===6);
 // !

  let aba=6;
 let aca=5;
 console.log("!(6< 5) = ", !(aba===6 ));