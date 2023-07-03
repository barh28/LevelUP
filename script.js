const subMenuInfo = document.getElementById("subMenuInfo");
const subMenuDynamic = document.getElementById("subMenuStart");
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".navbar-center");
showButtonAgent();

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
        if(true){ //if its agent
            localStorage.setItem("showUploadAgent",true);
        }
    })
}

const a = document.getElementById("logOutDrop");
if(a){
    document.querySelector("#logOutDrop").addEventListener("click",function(){
        localStorage.setItem("userName",null);
       location.reload();
       localStorage.setItem("showUploadAgent",false);
    })
}

document.querySelector(".dropdown").addEventListener("click",function(){
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("open");
})

hamburger.addEventListener("click",function(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => 
    n.addEventListener("click",function(){
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

function showButtonAgent(){
    var show = localStorage.showUploadAgent;
    if(show=="true"){
        document.getElementById("uploadHtmlbtn").style.display = "block";
    }else{
        document.getElementById("uploadHtmlbtn").style.display = "none";
    }
}