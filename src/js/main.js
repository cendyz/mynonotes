const popup = document.querySelector(".popup");
const selectInput = document.getElementById("select");
const openPanelBtn = document.querySelector(".nav__right-add");
const closePanelBtn = document.querySelector(".popup__btns-right");
const notes = document.querySelectorAll(".main__note");
const deleteAllNotesBtn = document.querySelector(".nav__right-delete");

const showPopup = () => {
	popup.style.opacity = 1;
	popup.style.zIndex = 10;
};

const closePopup = () => {
	popup.style.opacity = 0;
	popup.style.zIndex = -10;
};

const deleteAllNotes = () => {
	notes.forEach(note => {
		note.remove();
	});
};

window.onload = () => {
	selectInput.value = 0;
};

openPanelBtn.addEventListener("click", showPopup);
closePanelBtn.addEventListener("click", closePopup);
deleteAllNotesBtn.addEventListener("click", deleteAllNotes);
