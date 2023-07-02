const subMenuInfo = document.getElementById("subMenuInfo");
const subMenuDynamic = document.getElementById("subMenuStart");

function toggleMenu(){
    var userName = localStorage.getItem("userName");
    if (userName!=null & userName!="null") {
        subMenuInfo.style.display = "block";
        subMenuDynamic.style.display = "none";
        document.getElementById("userNameMenu").textContent = userName;
    } else if (userName==null || userName=="null") {
        subMenuInfo.style.display = "none";
        subMenuDynamic.style.display = "block";
    }
    subMenu.classList.toggle("open-menu");
}

const button = document.getElementById("loginbtn");
if(button){
    document.querySelector("#loginbtn").addEventListener("click",function(){
        var userName = document.getElementById("inputUserName").value;
        localStorage.setItem("userName",userName);
    })
}

const a = document.getElementById("logOutDrop");
if(a){
    document.querySelector("#logOutDrop").addEventListener("click",function(){
        localStorage.setItem("userName",null);
       location.reload();
    })
}

document.querySelector(".dropdown").addEventListener("click",function(){
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("open");
})