// const coding =["js","ruby","pyhton","cpp"]

// // foreach doesnot return anything
// const values = coding.forEach((item)=> {


//     // console.log(item);
    
//     return item
// }
// )
// const myNums= [1,2,3,45,6,7]

// const newnums=myNums.filter((num)=> num>4);
// console.log(newnums);
// {} if you are starting a scope then you must have to use  return keyword
// return num >4,

const myNums= [1,2,3,45,6,7]

myNums.forEach((num)=>{
    if(num>4){
        myNums.push(num)
    }
})

console.log(myNums);


