
const readMoreButtonsArray = document.querySelectorAll(".read-more-button");
const readMoreButtonsArrayLength = readMoreButtonsArray.length;
const hiddenTextArray = document.querySelectorAll(".read-more");

/* Automatically add functionality to all existing "Read More..." buttons */
document.addEventListener("click", (e) => {
	for (let i = 0; i < readMoreButtonsArrayLength; i++) {
		if (
			e.target == readMoreButtonsArray[i] &&
			hiddenTextArray[i].classList.contains("expand-text-container") == false
		) {
			hiddenTextArray[i].classList.add("expand-text-container");
			readMoreButtonsArray[i].innerHTML = "Read Less";
			readMoreButtonsArray[i].classList.add("active");
		} else if (
			e.target == readMoreButtonsArray[i] &&
			hiddenTextArray[i].classList.contains("expand-text-container")
		) {
			hiddenTextArray[i].classList.remove("expand-text-container");
			readMoreButtonsArray[i].innerHTML = "Read More...";
			readMoreButtonsArray[i].classList.remove("active");
		}
	}
});

