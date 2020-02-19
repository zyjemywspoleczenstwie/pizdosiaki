var request = new XMLHttpRequest();
request.open('GET', 'http://raw.githubusercontent.com/zyjemywspoleczenstwie/pizdosiaki/master/pizdosiaki.json', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    pizdosiaki_json = JSON.parse(request.responseText);
  } else {

  }
};

request.onerror = function() {

};



function init(){
    potencjalne_pizdosiaki = document.querySelector("#pizdosiaki").value.replace(/\r\n/g,"\n").split("\n");
}
