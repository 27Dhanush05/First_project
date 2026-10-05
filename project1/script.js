const passwordInput = document.getElementById("password");
const usernameInput = document.getElementById("username");
const leftHand = document.getElementById("leftHand");
const rightHand = document.getElementById("rightHand");
const pupils = document.querySelectorAll(".pupil");

// Password field focus pannum podhu kai keela irundhu smooth-a mela vandhu kanna moodum
passwordInput.addEventListener("focus", () => {
  leftHand.classList.add("cover");
  rightHand.classList.add("cover");
});

// Password field vittu veliya varum podhu kai thirumbi keela poydum
passwordInput.addEventListener("blur", () => {
  leftHand.classList.remove("cover");
  rightHand.classList.remove("cover");

  // Reset pupils position
  pupils.forEach((pupil) => {
    pupil.style.transform = `translate(-50%, -50%)`;
  });
});

// Username type pannum podhu pupils move aagum
usernameInput.addEventListener("input", (e) => {
  let textLength = e.target.value.length;
  let move = textLength > 15 ? 15 : textLength;

  pupils.forEach((pupil) => {
    pupil.style.transform = `translate(calc(-50% + ${move}px), calc(-50% + 4px))`;
  });
});
