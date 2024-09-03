// Sum of all natural from 1 to n
 const SumOfNaturalNumber=(num)=>{
  let sum =0;
  for(let i=1;i<=num;i++){
    sum=sum+i
  }
  return sum
 }
 console.log(SumOfNaturalNumber(5))


  // Sum of digit of number 
//  const sumofdigit =(num)=>{
//     let sum =0;
//     while (num>0)
//  }



// Count the number of digit of the number 

const countdigit =(num)=>{
    console.log(num)
    num=Math.abs(num);
   
    let count =0;
    do{
        count ++;
        num=Math.floor(num/10);
    }while(num>0);
    return count
}
console.log('countdigit :>> ', countdigit(123456));