
function myfuncton2(params) {
console.log("inside myfunction2");

}
function MyFunc( callback) {
   
    console.log("hello there i am a function inside of a function");
    
   callback();
}
MyFunc(myfuncton2);
