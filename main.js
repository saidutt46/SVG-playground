var btns = document.querySelectorAll(".buttons button");
var dog = document.getElementsByClassName("dog")[0];

for(i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", manageDogClasses);
}

function manageDogClasses() {
  if(this.getAttribute("data-add")) {
    dog.classList.add(this.getAttribute("data-add"));
  }

  if(this.getAttribute("data-remove")) {
    dog.classList.remove(this.getAttribute("data-remove"));
  }
}
