// https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example

let qrCodeContainer = document.getElementById('qrCodeContainer')
const btn = document.getElementById("btn");
let qrImg = document.getElementById("qrImg");
let qrText = document.getElementById("qrText");

btn.addEventListener("click", ()=>{
    try {
    if(qrText.value){
    qrImg.setAttribute("src", "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+ qrText.value );
    qrCodeContainer.classList.add("showImg");
    qrText.value = "";
    }
    else{
        qrText.classList.add("empty");
        setTimeout(() => {
            qrText.classList.remove("empty")
        }, 1000);
    }
    } catch (error) {
        console.log("Something Went Wrong! Please Try Again");
        qrImg.setAttribute("src", "");
        qrText.value = "";
    }
});