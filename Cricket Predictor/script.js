var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var box = document.querySelector(".box");
var teams = ["SRH", "CSK", "GT", "MI", "RR", "KKR", "RCB", "PBKS", "DC", "LSG"];

btn.addEventListener("click", function () {
  var interval;
  var count = 0;
  var r = Math.floor(Math.random() * 256);
  var g = Math.floor(Math.random() * 256);
  var b = Math.floor(Math.random() * 256);
  box.style.backgroundColor = `rgb(${r},${g},${b})`;

  interval = setInterval(() => {
    var randomTeam = teams[Math.floor(Math.random() * teams.length)];
    h2.innerHTML = randomTeam;
    count++;
    if (count > 10) {
      clearInterval(interval);
      var finalTeam = teams[Math.floor(Math.random() * teams.length)];
      h2.innerHTML = finalTeam;
    }
  }, 100);
});
