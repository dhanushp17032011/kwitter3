function addRoom()      
{
      room_name = document.getElementById("room_name").Value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

      localStorage.setItem("room_name " , room_name);

      window.location = "Kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
<div class="room_name"></div>
//End code
});});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location = "Kwitter_page.html";
}
