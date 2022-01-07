function storecomment() {

  var _name = document.getElementById("name").value;
  var _email= document.getElementById("email").value;
  var _post= document.getElementById("post").value;


   firebase.database().ref('User/' + _name).set({
          name : _name,
          email : _email,
          comment : _post
        }, function(error) {
          if (error) {
            alert('Error Occured');
          } else {
              alert("Sent");
            console.log('Hoise');
         
          }
        });
}