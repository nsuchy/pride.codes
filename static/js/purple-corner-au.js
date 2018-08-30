addLoadEvent(insert)

function addLoadEvent(func) {
  if (window.addEventListener)
    window.addEventListener("load", func, false);
  else if (window.attachEvent)
    window.attachEvent("onload", func);
  else { // fallback
    var old = window.onload;
    window.onload = function() {
      if (old) old();
      func();
    };
  }
}


function insert() {

  var corner = '<a target="_blank" href="http://wearitpurple.org" class="pridecodes-purple-au-corner"> <svg width="148px" height="149px" viewBox="0 0 148 149" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"> 	<g id="Purple-Corner"> 		<polygon id="Path-2" fill="#9D61A4" points="148 -1.42108547e-14 0 -1.42108547e-14 148 149"> 		</polygon> 		<path d="M103.973504,61.9300351 C103.51783,62.460191 102.002147,63.066343 101.282153,62.3463483 C100.562461,61.6266564 101.812914,59.7694455 101.812914,59.7694455 C102.911981,58.4432988 102.835985,60.5654362 103.518133,60.5651335 C104.200281,60.5654362 104.427361,61.3992737 103.973504,61.9300351 Z M109.468838,58.9362136 C106.891329,60.5272868 106.588859,59.5429711 104.011653,57.9509895 C101.43475,56.3593107 101.964906,54.5399465 101.965209,52.5698011 C101.965512,50.5990503 100.751997,49.6895195 100.449224,46.5824608 C100.145542,43.4744937 92.6055807,41.3905057 90.2176083,42.1858909 C87.8299388,42.9821845 85.9687918,41.6121357 87.6410083,39.6092909 C89.7531542,37.0799234 87.833572,34.1418121 90.255455,30.6287345 C93.0542906,26.5691512 97.3415593,29.3025878 97.3415593,29.3025878 C99.0846248,30.6665811 100.032002,29.5678171 101.055073,28.696133 C102.078144,27.824449 103.29075,28.8099758 104.73074,28.2795171 C106.170124,27.7490584 107.1938,28.013985 107.458726,28.7342825 C107.723956,29.4542772 106.923423,30.0555848 107.984341,30.8888167 C109.045258,31.7226541 109.126704,30.0225825 110.755927,29.6813571 C113.40277,28.9559125 112.798132,30.8618699 114.915425,31.9176401 C116.805336,32.8604759 114.312301,33.200793 113.142991,34.1157736 C111.750537,35.2042433 114.194825,36.057761 114.42251,38.255289 C114.64959,40.452817 116.894048,38.6243696 118.069111,37.2973146 C119.243871,35.9711679 120.223645,35.3977154 120.94909,35.6302452 C122.228609,36.0408057 120.039256,38.3591402 119.660487,38.9649894 C119.281415,39.5711414 119.963563,40.5566682 119.73618,41.3902029 C119.508798,42.2243431 117.5002,43.6261831 118.56142,44.8387898 C119.622338,46.0510938 119.016488,47.0366206 119.016488,47.0366206 C117.728188,48.8559849 119.090971,49.401885 118.106958,52.4181118 C115.719591,57.9125373 112.04453,57.3439292 109.468838,58.9362136 Z" id="Combined-Shape" fill="#FFFFFF"> 		</path> 	</g> </svg> </a>';
  
  var css =
  '@media only screen and (min-width: 768px) {' +
  '#pridecodes-purple-au-corner {width: 100px;}' +
  '} @media only screen and (max-width: 767px) {' +
  '#pridecodes-purple-au-corner {width: 50px;}' +
  '}' +
  '#pridecodes-purple-au-corner { animation: enterIn 2s; }' +
  '@keyframes enterIn {0% {opacity: 0;}100% {opacity: 100;}}' +
  '#pridecodes-purple-au-corner { transition: all .2s ease-in-out; }' +
  '#pridecodes-purple-au-corner:hover { transform: scale(1.1); transform-origin:right top;}';

  var style = document.createElement('style');
  style.innerHTML = css;

  document.body.insertAdjacentHTML( 'beforeEnd', corner );
  document.body.appendChild(style);

}