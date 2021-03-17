function login(){
    a = document.getElementById("userbox").value;
    localStorage.setItem("username", a);
    window.location = "kwitter_room.html";
}