// Digital clock
function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent =
    now.toLocaleTimeString();
}
setInterval(updateClock, 1000);
updateClock();

// Button pulse effect
document.getElementById("pulseBtn").addEventListener("click", () => {
  const btn = document.getElementById("pulseBtn");
  btn.classList.add("pulse");
  setTimeout(() => btn.classList.remove("pulse"), 500);
});

// NASA APOD fetch
// NASA APOD fetch
const apiKey = "k8zN8TwDidu0csaIis1Ia0KTAvaFeInSt7ZK89vq";
fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  .then(response => response.json())
  .then(data => {
    if (data.media_type === "image") {
      document.getElementById("apodImg").src = data.url;
      document.getElementById("apodDesc").textContent = data.explanation;
    } else {
      document.getElementById("apodImg").style.display = "none";
      document.getElementById("apodDesc").textContent =
        "Today's APOD is a video: " + data.url;
    }
  })
  .catch(err => console.error("Error fetching APOD:", err));
