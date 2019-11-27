
document.addEventListener('DOMContentLoaded', function () {
  var user = getCookie("username");

  if (user) {
    addLoginNavItems();
    removeElement('signInBtn');
    removeElement('signUp');




  }
  else {
    console.log('User is not logged in')
  }

});


function loginUser() {
  //Todo:Will get user info from textboxs
  var user = "Theo";
  setCookie("username", user, 1);

}

function onLogOut() {
  deleteCookie('username=')
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function deleteCookie(cname){
  document.cookie = cname+';'+ "expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}

function removeElement(elementName) {
  var elem = document.getElementById(elementName);
  elem.parentNode.removeChild(elem);
}

function addLoginNavItems() {
  //Add Sens to Nav
  const liSens = document.createElement('li');
  liSens.className = 'nav-item';
  liSens.innerHTML = `<a id="sensNav" class="nav-link" href="sens.html">Sens</a>`;
  document.getElementById('navUl').appendChild(liSens);

  //Add Charting to Nav
  const liChart = document.createElement('li');
  liChart.className = 'nav-item';
  liChart.innerHTML = `<a id="sensNav" class="nav-link" href="chart.html">Charting</a>`;
  document.getElementById('navUl').appendChild(liChart);

  //Add To Profile
  const liProfile = document.createElement('li');
  liProfile.className = 'nav-item';
  liProfile.innerHTML = `<a id="sensNav" class="nav-link" href="profile.html">Profile</a>`;
  document.getElementById('navUl').appendChild(liProfile);

  //Add Logout
  const liLogOut = document.createElement('li');
  liLogOut.className = 'nav-item';
  liLogOut.innerHTML = `<a id="sensNav" class="nav-link" href="" onclick="onLogOut()">Log out</a>`;
  document.getElementById('navUl').appendChild(liLogOut);
}

$("#signInBtn").click(function () {
  $("#loginModal").modal('toggle');
});
