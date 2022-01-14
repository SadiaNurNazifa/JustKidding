// // function storecomment() {

// //   var _name = document.getElementById("name").value;
// //   var _email= document.getElementById("email").value;
// //   var _post= document.getElementById("post").value;


// //    firebase.database().ref('User/' + _name).set({
// //           name : _name,
// //           email : _email,
// //           comment : _post
// //         }, function(error) {
// //           if (error) {
// //             alert('Error Occured');
// //           } else {
// //               alert("DONE");
// //             console.log('Hoise');
         
// //           }
// //         });
// // }



// function storecomment() {

//   var _name = document.getElementById("name").value;
//   var _email= document.getElementById("email").value;
//   var _comment= document.getElementById("comment").value;


//    firebase.database().ref('User/' + _name).set({
//           name : _name,
//           email : _email,
//           comment : _comment
//         }, function(error) {
//           if (error) {
//             alert('Error Occured');
//           } else {
//               alert("Sent");
//             console.log('SUCCESS');
         
//           }
//         });
// } 
// function showComment() {

// firebase.database().ref('User/').once('value').then(function (snapshot) {
//   snapshot.forEach(function (child) {
//     let dc = document.getElementById("comment-1").cloneNode(true);
//     dc.children[0].children[0].innerHTML = child.val().name;
//     dc.children[0].children[1].innerHTML = child.val().comment;
//     document.getElementById('blog-comments').appendChild(dc);
//     dc.style.display = "block";
//   });

// }, function (error) {
//   if (error) {
//   } else {
    
//   }
// });

// let demo_disappear = document.getElementById("blog-comments");
// demo_disappear.children[1].style.display = "none";


// }