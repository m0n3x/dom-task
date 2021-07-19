//1.
const onresize = function () {
  heigth = window.outerHeight;
  width = window.outerWidth;
  console.log(`width: ${width}, heigth: ${heigth}`);
}
window.addEventListener("resize", onresize);

//2.
let href = new URL('http://127.0.0.1:8080/')

const setUrlParameter = (x, n) => {
  href.searchParams.set(x, n);
  return href.toString()
}

// function setUrlParameter(hashParameterName, hashParameterValue) {
//   href.search = window.location.hash; 
// }

// console.log(setUrlParameter("x", 12));
// console.log(setUrlParameter("y", 13));
// console.log(setUrlParameter("x", 10));

// setUrlParameter("y", 18) \\ localhost:8000?x=12&y=18
// setUrlParameter("x", 2) \\ localhost:8000?x=2&y=18

//3.
function setUrlHashParameter(hashParameterName, hashParameterValue) {
  href.search = window.location.hash.substring(1);
  href.searchParams.set(hashParameterName, hashParameterValue);
  window.location.hash = href.searchParams;
}

// setUrlHashParameter("x", 12)\\ localhost: 8000# x = 12
// setUrlHashParameter("y", 18)\\ localhost: 8000# x = 12 & y = 18
// setUrlHashParameter("x", 2)\\ localhost: 8000# x = 2 & y = 18

//4.
const previousPage = document.querySelector('.previous');
const nextPage = document.querySelector('.next');

previousPage.addEventListener('click', () => {
  history.back();
});
nextPage.addEventListener('click', () => {
  history.forward();
});

//5.
const infoBtn = document.querySelector('.info');
infoBtn.addEventListener('click', () => {
  document.getElementById("cookies").innerHTML = `cookiesEnabled is <b/>${navigator.cookieEnabled} <br/>`;
  document.getElementById("appName").innerHTML = `navigator.appName is <b/>${navigator.appName}`;
  document.getElementById("appCodeName").innerHTML = `navigator.appCodeName is <b/>${navigator.appCodeName}`;
  document.getElementById("engine").innerHTML = `navigator.product is <b/>${navigator.product}`;
  document.getElementById("version").innerHTML = navigator.appVersion;
  document.getElementById("agent").innerHTML = navigator.userAgent;
  document.getElementById("platform").innerHTML = `navigator.platform is <b/>${navigator.platform}`;
  document.getElementById("language").innerHTML = `navigator.language is <b/>${navigator.language}`;
  document.getElementById("online").innerHTML =`navigator.online is <b/>${navigator.onLine}`;
  document.getElementById("java").innerHTML = `navigator.javaEnabled is <b/>${navigator.javaEnabled()}`;
})
