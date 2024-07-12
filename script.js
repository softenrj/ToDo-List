var time=document.querySelector(".main-heading h2");

function Time() {
    var dateString = new Date();
    time.innerHTML=dateString.getDay()+dateString.getMonth()+dateString.getFullYear();
  }
  
  var inputField = document.querySelector(".add-list input");
  var inputVal = inputField.value;

document.querySelector(".add-list input").addEventListener("click",function len(){
    var l=document.querySelector(".add-list .length").innerHTML=inputVal.length;
    inputVal=document.querySelector(".add-list input").value;
    if(l>=10){
        document.querySelector(".add-list .emoji1").innerHTML="😅";

        if(l>=16){
            document.querySelector(".add-list .emoji1").innerHTML="🥵";
            
        }if(l>=20){
                document.querySelector(".add-list .emoji1").innerHTML="🤯";
            }
        
    }
    else{
        document.querySelector(".add-list .emoji1").innerHTML="😚";
    }
    setTimeout(len,100);
})
var ran=Math.floor(Math.random()*3)+1;

document.querySelector(".add-list i").addEventListener("click",addFun);
function addFun(){
    if(inputVal.trim()==="") return;

    var listContainer=document.querySelector(".lists");
    var newitem=document.createElement("div");
    newitem.className=`list-item list`;
    if(ran===1){
        newitem.innerHTML=`
        <span class="circle">🔴</span>
        <p>${inputVal}</p>
        <i class="fa-solid fa-trash"></i>
    `;
    ran=Math.floor(Math.random()*3)+1;
    }
    else if(ran===2){
        newitem.innerHTML=`
        <span class="circle">🟢</span>
        <p>${inputVal}</p>
        <i class="fa-solid fa-trash"></i>
    `;
    ran=Math.floor(Math.random()*3)+1;
    }
    else{
        newitem.innerHTML=`
        <span class="circle">🟠</span>
        <p>${inputVal}</p>
        <i class="fa-solid fa-trash"></i>
    `;
    ran=Math.floor(Math.random()*3)+1;
    }
    listContainer.appendChild(newitem);
    newitem.querySelector(".fa-trash").addEventListener("click", function() {
        newitem.remove();
    });
    newitem.querySelector("span").addEventListener("click", function () {
        var p = newitem.querySelector("p");
        if (p.style.textDecoration === "line-through") {
            p.style.textDecoration = "none";
            p.style.color = "initial"; // Reset to default text color
        } else {
            p.style.textDecoration = "line-through";
            p.style.color = "rgb(106, 104, 104)";
        }
    });
    inputField.value="";
        
}

function edit(item, inputVal) {
    var newInputVal = prompt("Edit your task:", inputVal);
    if (newInputVal !== null && newInputVal.trim() !== "") {
        item.querySelector("p").innerHTML = newInputVal;
    }
}

document.querySelector(".add-list input").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        addFun();
    }
});