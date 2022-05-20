var qrimg = document.getElementById("qr-img");
function AddQR(){
    var text = document.getElementById("input-field").value;
    
    if(text==''){
        window.alert("Enter text or url");
    }
    else{
        document.getElementById("gen-btn").innerText = "Making QR Code ....";
        document.getElementById("QR-Box").classList.add("expand");

     /*   setTimeout(() => {
            
        
        },1000);
        
        */

        qrimg.style.opacity = "1";
        qrimg.setAttribute("src",`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`);
        qrimg.addEventListener('load',() => {
        document.getElementById("gen-btn").innerText = "Generated QR Code ";
        });
    }
    
}



function Shrink(){
    var input = document.getElementById("input-field").value;
    document.getElementById("gen-btn").innerText = "Generate QR Code";
   // if(input=='')
   // {
        qrimg.style.opacity = "0";
        qrimg.setAttribute("src","");
        document.getElementById("QR-Box").classList.remove("expand");
    //}
    
}