document.addEventListener("DOMContentLoaded", () => {
  const wrapper = document.querySelector(".video-wrapper");
  const trigger = document.querySelector(".presentation-play-trigger");
  const video = document.querySelector(".video-wrapper video"); // Assurez-vous que votre balise <video> est bien dans .video-wrapper

  document.body.addEventListener("click", (e) => {
    if (e.target.closest(".presentation-play-trigger") || e.target.classList.contains("close-video")) {
      wrapper.classList.toggle("show");

      if (wrapper.classList.contains("show")) {
        video.play();
      } else {
        video.pause();
      }
    }
  });
});

function toggleSwitch() {
  const section = document.getElementById("standby-impact");
  const isOn = section.classList.contains("on");

  section.classList.toggle("on");
  section.classList.toggle("off");

  const sound = new Audio(
    isOn
      ? "/assets/sounds/switch_turnedoff.mp3"
      : "/assets/sounds/switch_turnedon.mp3"
  );
  sound.play();
}