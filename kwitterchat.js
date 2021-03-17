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
  person = localStorage.getItem("username");
  roomname = localStorage.getItem("roomname");
  function message(){
      inputbox = document.getElementById("msg").value;
      firebase.database().ref(roomname).push({
          name: person,
          message: inputbox,
          like: 0
      });
      document.getElementById("msg").value = "";
  }
  function logout(){
    localStorage.removeItem("username");
    localStorage.removeItem("roomname");
    window.location = "index.html";
}
function getData() {firebase.database().ref("/"+roomname).on('value', function(snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function(childSnapshot) {
          childKey  = childSnapshot.key;
          childData = childSnapshot.val();
    if(childKey != "purpose"){
        firebase_message_id = childKey;
        message_data = childData;
       console.log("ID: "+firebase_message_id);
       console.log("Message: "+message_data);
        n = message_data['name'];
        m = message_data['message'];
        l = message_data['like'];
        console.log("Name is "+n);
        console.log("Message is "+m);
        console.log("Likes are "+l);
        name_width_tag = "<h4> "+ n +"<img class='user_tick' src='tick.png'></h4>";
        message_width_tag = "<h4 class='message_h4'>" + m + "</h4>";
        like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+l+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ l +"</span></button><hr>";
        row = name_width_tag+message_width_tag+like_button+span_with_tag;
        document.getElementById("output").innerHTML += row;
    }
    });});}
getData();
function updateLike(id2){
console.log("i clicked the like button, the message id is: "+id2);
y = id2;
likes = document.getElementById(y).value;
console.log(likes);
g = Number(likes)+1;
console.log(g);
firebase.database().ref(roomname).child(id2).update({
like: g
});
}