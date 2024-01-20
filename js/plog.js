
let upToTop = document.getElementById("up-to-top");

window.onscroll = function () {
  if (this.scrollY >= 200) {
    upToTop.classList.add("shwo")
  }else{
    upToTop.classList.remove("shwo")
  }
};

function search_article() {
  let input = document.getElementById('searchbar').value
  input = input.toLowerCase();
  let x = document.getElementsByClassName('title-4');
  let y = document.getElementsByClassName('cards-body');
  
  for (let i = 0; i < x.length; i++) {
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          y[i].style.display = "none";
          
      } else {
          y[i].style.display = "block";

      }
  }
}



