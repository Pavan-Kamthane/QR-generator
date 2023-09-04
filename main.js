 let wrapper = document.querySelector(".wrapper");
let btn = document.querySelector(".btn");
let qrinput = document.querySelector(".form input");
let qrimg = document.querySelector(".qr-code img");


btn.addEventListener("click", ()=>{
    let qrValue = qrinput.value;
    if(!qrValue) return;
    // console.log(qrValue);
    qrimg.src=` https://api.qrserver.com/v1/create-qr-code/?size=170x170&data=${qrValue}`;
    wrapper.classList.add("active");
}
)

