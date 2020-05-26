

var btDetalhes = document.querySelectorAll(".details");
var dropDownItem = document.querySelector(".dropdown-item");

dropDownItem.addEventListener("click", function () {
  window.location.href = "./login-page.html";
})

// dropDownItem.addEventListener("mouseup", function () {
//   dropDownItem.style.backgroundColor = "transparent";
// })

btDetalhes.forEach(item => {
  item.addEventListener('click', event => {
    window.location.href = "./view-product.html";
    console.log(item.value);
  })
});
