var selector, elems, makeActive;

selector = ".nav__list .nav__link";

elems = document.querySelectorAll(selector);

makeActive = function () {
  for (var i = 0; i < elems.length; i++) elems[i].classList.remove("linked");

  this.classList.add("linked");
};

for (var i = 0; i < elems.length; i++)
  elems[i].addEventListener("mousedown", makeActive);
