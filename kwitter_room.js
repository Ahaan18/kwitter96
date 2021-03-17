var firebaseConfig = {
      apiKey: "AIzaSyBF2qqgKmoaWaanzjbiUuA3dQ6d8wqRz9s",
      authDomain: "chatappjs-2ae1c.firebaseapp.com",
      databaseURL: "https://chatappjs-2ae1c-default-rtdb.firebaseio.com",
      projectId: "chatappjs-2ae1c",
      storageBucket: "chatappjs-2ae1c.appspot.com",
      messagingSenderId: "772412106971",
      appId: "1:772412106971:web:812deb6aa10452922c44fe",
      measurementId: "G-17GQV6K7R0"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
b = localStorage.getItem("username");
document.getElementById("localname").innerHTML = "Welcome "+b+"!";
function room(){
      c = document.getElementById("roomname").value;
      console.log("Roomname is: ",c);
      firebase.database().ref("/").child(c).update({
            purpose: "addingRoomName"
      });
      localStorage.setItem("roomname", c);
      window.location = "kwitter_chat.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {
      document.getElementById("output").innerHTML = "";
      snapshot.forEach(function(childSnapshot) {
            childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Roomname of a child: "+Room_names);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >Room Name : "+ Room_names +"</div><hr>";
       document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(e){
      console.log(e)
      localStorage.setItem("roomname", e);
      window.location = "kwitter_chat.html"
}
function logout(){
      localStorage.removeItem("username");
      localStorage.removeItem("roomname");
      window.location = "index.html";
}