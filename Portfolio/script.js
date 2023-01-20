document.querySelector(".header__icon").onclick = function () {
  document.querySelector("body").classList.toggle("is-black");
  if (document.getElementById("mode").classList.contains("bx-sun")) {
    document.getElementById("mode").classList.remove("bx-sun");
    document.getElementById("mode").classList.add("bx-moon");
  } else {
    document.getElementById("mode").classList.remove("bx-moon");
    document.getElementById("mode").classList.add("bx-sun");
  }
};

document.querySelector(".header__mob-menu").onclick = function () {
  document.querySelector(".header-menu").classList.toggle("is-active");
};
