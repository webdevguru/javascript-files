function loadingData(callback){

    setTimeout (()=>{

        console.log("1,loadingData");
        callback();
    },2000);

  

}

function collectingData(callback){

    

        console.log("2,collectingData");
    
   callback();
    
}

function ApprovingData() {
    console.log("3,ApprovingData");
    
}

function Approved() {
    
    console.log("4,Approved");
    
}


loadingData(function (params) {
    
    collectingData(function (params) {
        ApprovingData();
        Approved();
    });


});
