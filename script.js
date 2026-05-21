function loading() {
  const loading = document.querySelector(".loading");
  const isi = document.querySelector(".isi");

  setTimeout(function () {
    loading.style.display = "none";
    isi.style.display = "block";
  }, 5000);

  loading.style.display = "flex";
  isi.style.display = "none";
}
loading();

function paper() {
  const paper = document.getElementById("paper");

  for (let i = 0; i < 800; i++) {
    const box = document.createElement("div");
    box.classList.add("box");

    paper.append(box);
  }
}

paper();
let btn = document.querySelectorAll(".tab");
function navbar() {
  const open = document.getElementById("open");
  const close = document.getElementById("close");
  const container = document.querySelector(".container");

  open.addEventListener("click", function () {
    container.classList.toggle("active");
  });
  close.addEventListener("click", function () {
    container.classList.remove("active");
  });

  btn.forEach((e) => {
    e.addEventListener("click", function () {
      btn.forEach((l) => {
        l.classList.remove("aktif");
      });

      e.classList.add("aktif");
    });
  });
}

navbar();

const pro = document.querySelector(".pro");
const sertif = document.querySelector(".sertif");
const skil = document.querySelector(".skil");

function button() {
  btn[0].addEventListener("click", function () {
    pro.style.display = "flex";
    sertif.style.display = "none";
    skil.style.display = "none";
  });
  btn[1].addEventListener("click", function () {
    pro.style.display = "none";
    sertif.style.display = "flex";
    skil.style.display = "none";
  });
  btn[2].addEventListener("click", function () {
    pro.style.display = "none";
    sertif.style.display = "none";
    skil.style.display = "flex";
  });
}

button();
