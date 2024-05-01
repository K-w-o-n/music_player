const playTag = document.getElementsByClassName("playListContainer")[0];
const audioTag = document.getElementsByClassName("audioTag")[0];
const currentTimeAndTotalTimeTag = document.getElementsByClassName(
  "currentAndTotalTime"
)[0];
const currentProgressTag = document.getElementById("currentProgress");
  

const tracks = [
    {trackId : "music/track1.mp3", title: "December Nya - Lin Nit"},
    {trackId : "music/track2.mp3", title: "T Saw Ra Ai - Ann Naw"},
    {trackId : "music/track3.mp3", title: "Lan Ma Gyi Yae Bay - Wine Su"},
    {trackId : "music/track4.mp3", title: "Yee Zar Sar -Sai Sai"},
];


for (let i = 0; i < tracks.length; i++) {
  const trackTag = document.createElement("div");
  trackTag.addEventListener("click", () => {
    let musicSrc = tracks[i].trackId;
    audioTag.src = musicSrc;
    audioTag.play();

  })
  trackTag.classList.add("trackItem");
  const title = (i + 1).toString() + "." + tracks[i].title;
  trackTag.textContent = title;
  playTag.append(trackTag);

}

let duration = 0;
let durationText = "00:00";

audioTag.addEventListener("loadeddata", () => {
  duration = Math.floor(audioTag.duration);
  durationText = createMinuteAndSecondText(duration);
});

audioTag.addEventListener("timeupdate", () => {
  const currentTime = Math.floor(audioTag.currentTime);
  const currentTimeText = createMinuteAndSecondText(currentTime);
  const currentTimeTextAndDurationText = currentTimeText + " / " + durationText;
  currentTimeAndTotalTimeTag.textContent = currentTimeTextAndDurationText;

  updateCurrentProgress(currentTime);
})

const updateCurrentProgress = (currentTime) => {
  const currentProgressWidth = (500/duration) * currentTime;
  currentProgressTag.style.width = currentProgressWidth.toString() + "px";

}

const createMinuteAndSecondText = (totalSecond) => {
  const minutes = Math.floor(totalSecond / 60);
  const seconds = totalSecond % 60;

  const minutesText = minutes < 10 ? "0" + minutes.toString() : minutes;
  const secondsText = seconds < 10 ? "0" + seconds.toString() : seconds;

  return minutesText + ":" + secondsText;
}



