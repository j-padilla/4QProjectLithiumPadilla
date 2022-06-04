  let nameU = document.getElementById('nameU');
  let nameU = document.getElementById('email');

  nameU = nameU.value;
  email = email.value; 
  
  localStorage.setItem('name', nameU);
  localStorage.setItem('email', email);

function theyreTalking() {
  var message = "Yeah... Hey, this is Writer. Or JaeWa, whichever it was you called me earlier. Uh... you can't really continue using this site for now, apparently the link that was given to you corrupted something, and now we're under reconstruction. It was nice meeting you, though! I'll be sure to remember the Sign-up details you put in, so I could recognize you next time."
  
  alert(message);
}