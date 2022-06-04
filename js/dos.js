function endIng() {
  alert('NEW PERSON LOG');
  alert('HELLO');
  alert('Please hover your cursor over the dialogue ^~^');
  document.getElementById('firstContact').style.display = "none";
  document.getElementById('intro').innerHTML = "Welcome!";
  document.getElementById('uGh').innerHTML = "";
}

function callHim() {
  document.getElementById('callthemB').innerHTML = '<button type="button" id="firstname" onclick="hisWords()" value="JaeWa">Call them "JaeWa"</button> <button type="button" id="aName" onclick="yourWords()" value="Writer">Call them "Writer"</button>';
}

function hisWords() {
  alert("(Oh, wow, people don't usually choose that one.)");
  document.getElementById('aName').style.display = "none";
  document.getElementById('hesGlad').innerHTML = "Yes, that's my name. You've said it wonderfully! Let's move on.";

  let theirName = document.getElementById('firstName');
  
  theirName = theirName.value;
  localStorage.setItem('theirName', theirName);
}

function yourWords() {
  alert("(Well, never gets old.)");
  document.getElementById('firstname').style.display = "none";
  document.getElementById('hesGlad').innerHTML = "Yes, that's my name. You've said it wonderfully! Let's move on.";

  let theirName = document.getElementById('aName');
  
  theirName = theirName.value;
  localStorage.setItem('theirName', theirName);
}

function waitAsec(){
  document.getElementById("backtrack").innerHTML = "I'd be delighted to answer your inquiries, which you can enter in that text box I'll provied below this, or to my email of jae.inquiries@movdate.com for the longer messages.";
  document.getElementById("backTrk2").innerHTML = "Oh? What's the matter?";
  document.getElementById("holdUp").style.display = "none";
  document.getElementById("onetimeB").style.display = "none";
  document.getElementById('dumIdea').innerHTML = '<textarea id="dummyDum" rows="4" cols="40" disabled> </textarea> <button id="sendDum" onclick="expletives()">Send</button>';
  document.getElementById("dummyDum").innerHTML = "I'm not actually sure what you're talking about, I just got this link from a dating site.";
  document.getElementById
}

function expletives() {
  alert("WHAT");
  alert("WHAT");
  alert("WHAT");
  document.getElementById("expletive").innerHTML = "What do you mean you just clicked a random link from a stranger from a dating site?? Do you know how unsafe that is??";
  document.getElementById("dummyDum").style.display = "none";
  document.getElementById('sendDum').style.display = "none";
  document.getElementById('dotDotDot').innerHTML = "... <br /> ...<br /> ...<br />";
  document.getElementById('almostThere').innerHTML = " [RELOADING...]";
}

function loadedNew() {
  document.getElementById('almostThere').style.display = "none";
  document.getElementById('hulingBye').innerHTML = '[RELOAD PROTOCOL]';
}
