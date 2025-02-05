document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".video-wrapper");
  const trigger = document.querySelector(".presentation-play-trigger");

  document.body.addEventListener("click", (e) => {
    if (
      e.target.closest(".presentation-play-trigger") ||
      e.target.classList.contains("close-video")
    ) {
      wrapper.classList.toggle("show");
    }
  });
});

function toggleSwitch() {
  const section = document.getElementById("standby-impact");
  const isOn = section.classList.contains("on");

  section.classList.toggle("on");
  section.classList.toggle("off");

  const sound = new Audio(
    isOn ? "/assets/audios/switch_turnedoff.mp3" : "/assets/audios/switch_turnedon.mp3"
  );
  sound.play();
}
