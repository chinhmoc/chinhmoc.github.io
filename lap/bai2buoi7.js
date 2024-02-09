document.addEventListener("DOMContentLoaded", function(){
    // console.log("đã load");
    var doituongmenutrai=document.querySelector(".trai");
    var doituongmenuphai=document.querySelector(".phai");
        var trangthai="duoi110";
    window.addEventListener("scroll", function(){
        console.log(window.pageXOffset);
        if(window.pageYOffset>110) {
            if(trangthai=="duoi110"){
                console.log("ok ");
                trangthai="tren110";
                doituongmenutrai.classList.add("nholaitrai");
                doituongmenuphai.classList.add("nholaiphai");
            }
        }
        else if(window.pageYOffset<=110) {
            if(trangthai="tren110"){
            doituongmenutrai.classList.remove("nholaitrai");
            doituongmenuphai.classList.remove("nholaiphai");
            trangthai="duoi110";
            }
        }
    })
})