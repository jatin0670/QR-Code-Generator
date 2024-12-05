let main_input = document.querySelector(".mid-input");
let btn = document.querySelector(".lower-btn");
let img = document.createElement("img");
document.querySelector(".img_div").appendChild(img);
img.style = "margin-top: 10px;"

btn.addEventListener("click", (val)=>{
    if(main_input.value !=0){
    val = main_input.value;
    let url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${val}`
    img.src = url;
    img.width = 200;
    img.height = 200;
    main_input.value = "";
    }
    else{
        
      alert("enter some text");
      img.src ="";
    }
})