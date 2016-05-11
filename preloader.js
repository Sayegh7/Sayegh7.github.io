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

function calculateTotal(cb){
var el = document.getElementById('bar'); 
var hl = document.getElementById('h1'); 
var progress = document.getElementById('progress'); 
var content = document.getElementById('content'); 
var t  = (man.val + map.val + horizontal.val) / 3;
t = Math.round(t);
//el.textContent = t + ' %';
h1.innerHTML = t + '%';
el.style.width = t + '%'	;

  if(t == 100){
 //	alert("Image loaded")
 	progress.style.opacity = 0;
 	h1.style.opacity = 0;
 	content.style.opacity = 1;
  	return cb();
  }
  setTimeout(function(){
  	calculateTotal(cb);}, 20);
}
	
	



}