const subMenuInfo = document.getElementById("subMenuInfo");
const subMenuDynamic = document.getElementById("subMenuStart");
let c = 0;

function toggleMenu(){
  if (c%2==2) {
    subMenuInfo.style.display = "block";
    subMenuDynamic.style.display = "none";
  } else if (c%2==0) {
    subMenuInfo.style.display = "none";
    subMenuDynamic.style.display = "block";
  } else {
    console.log("none of them")
    // Invalid menu choice
    subMenuInfo.style.display = "none";
    subMenuDynamic.style.display = "none";
  }
  subMenu.classList.toggle("open-menu");
}