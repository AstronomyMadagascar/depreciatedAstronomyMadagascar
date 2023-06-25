document.addEventListener("DOMContentLoaded", function () {
  // Hide the banner after 10 seconds
  setTimeout(function () {
    var banner = document.getElementById("banner");
    banner.style.display = "none";
  }, 10000);
});