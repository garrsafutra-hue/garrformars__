function start(){
  document.getElementById("bgm").play();
  document.querySelector(".page").style.display="none";
  document.getElementById("login").classList.remove("hidden");
}

function login(){
  if(document.getElementById("pw").value==="ssaaqt"){
    window.location.href="letter.html";
  } else alert("salah yaa");
}

