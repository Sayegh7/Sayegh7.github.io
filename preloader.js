$(function() {
function doRequest($progress, url, cb){
//$progress = document.querySelector('#progress');

//var url = 'https://upload.wikimedia.org/wikipedia/commons/6/63/A_large_blank_world_map_with_oceans_marked_in_blue.svg';
//var url = "/svg";
var request = new XMLHttpRequest();
request.onprogress = onProgress;
request.onload = onComplete;
request.onerror = onError;
request.onloadstart = onloadstart;
var total; 
function onloadstart(){
  get_filesize(url, null);
  //alert("Total SIze" + total);
  //alert("Load started - " + request.response.length);
}
function onProgress(event) {
  if (!event.lengthComputable) {
    //alert("Recieved so far: " + request.response.length);
    console.log(request.response.length);
//  $progress.textContent = 'Loading... ' + parseFloat(request.response.length / 1024 / 1024).toFixed(2) + ' MBs';
    return;
  }
  var loaded = event.loaded;
  var total = event.total;
  var progress = (loaded / total).toFixed(2);
  $progress.val =  parseInt(progress * 100);
  console.log($progress);

//  $progress.textContent = parseInt(progress * 100);

  console.log("ip " + progress);
}

function onComplete(event) {
 // $img.setAttribute('src', url);
 // $progress.appendChild($img);
 	return cb(url);
  console.log('complete', url);
  //alert("DOne " + request.response.length);
}

function onError(event) {
  console.log('error');
}
function get_filesize(url, callback) {
  xhr = new XMLHttpRequest();
    xhr.open("HEAD", url, true); // Notice "HEAD" instead of "GET",
                                 //  to get only the header
    xhr.onreadystatechange = function() {
        if (this.readyState == this.DONE) {
            //alert((xhr.getResponseHeader("Content-Length")));
        }
    };
    xhr.send();
}


//$progress.addEventListener('click', function() {
  request.open('GET', url, true);
  request.overrideMimeType('text/plain; charset=x-user-defined');
  request.send(null);
//});
}

function calculateTotal(){

var el = document.getElementById('bar'); 
var hl = document.getElementById('h1'); 
var progress = document.getElementById('progress'); 
var overlay = document.getElementById('overlay'); 
var nav = document.getElementsByTagName('nav')[0]; 
var t  = (profile.val + turkish.val + yugi.val + chat.val)/4;
t = Math.round(t);
//el.textContent = t + ' %';
h1.innerHTML = t + '%';
el.style.width = t + '%'	;

  if(t == 100){
  	TweenMax.to(progress, 1, {y: 0, ease:Elastic.easeInOut});
  	TweenMax.to(overlay, 1, {opacity: 0});
  	TweenMax.to(overlay, 1, {zIndex: -7});
  	TweenMax.to(nav, 1, {opacity: 1});
/* 	progress.style.opacity = 0;
 	h1.style.opacity = 0;
 	content.style.opacity = 1;
*/  
  }

var remove = function(){
	$('#overlay').parent.removeChild($('#overlay')); 

}
  setTimeout(calculateTotal, 20);
}

	
profile = {val: 0};
turkish = {val: 0};
yugi = {val: 0};
chat = {val: 0};


window.onload = function(){
doRequest(profile, "https://sayegh7.github.io/img/profile.jpg", function(url){
	var sprite = document.getElementById('profile');
	sprite.setAttribute('src', url);

});

doRequest(turkish, "https://sayegh7.github.io/img/portfolio/01.jpg", function(url){
	var sprite = document.getElementById('turkish1');
	sprite.setAttribute('src', url);
	var sprite = document.getElementById('turkish2');
	sprite.setAttribute('src', url);
});

doRequest(yugi, "https://sayegh7.github.io/img/portfolio/yugi.jpg", function(url){
	var sprite = document.getElementById('yugi1');
	sprite.setAttribute('src', url);
	var sprite = document.getElementById('yugi2');
	sprite.setAttribute('src', url);

});

doRequest(chat, "https://sayegh7.github.io/img/portfolio/chat.png", function(url){
	var sprite = document.getElementById('chat1');
	sprite.setAttribute('src', url);
	var sprite = document.getElementById('chat2');
	sprite.setAttribute('src', url);

});

calculateTotal();
}



})