let btn = document.getElementById("btn");

btn.addEventListener('click', ()=> {
  document.querySelector(".box").innerHTML = "<b>Yayy! You were clicked!</b>"
});

btn.addEventListener('contextmenu', ()=> {
  alert("Please dont click the button");
});

document.addEventListener('keydown', (e)=> {
  console.log(e.key);
});



