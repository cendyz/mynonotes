const popup = document.querySelector(".popup");
const selectInput = document.getElementById("select");
const messageInput = document.getElementById("message");
const openPanelBtn = document.querySelector(".nav__right-add");
const closePanelBtn = document.querySelector(".popup__btns-right");
const addNoteBtn = document.querySelector(".popup__btns-left");
const errorText = document.querySelector(".popup__error");
const main = document.querySelector(".main");
const deleteAllNotesBtn = document.querySelector(".nav__right-delete");
let id = 1;

const showPopup = () => {
	popup.style.opacity = 1;
	popup.style.zIndex = 10;
};

const closePopup = () => {
	popup.style.opacity = 0;
	popup.style.zIndex = -10;

	setTimeout(() => {
		cleanAllInputs();
	}, 200);
};

const cleanAllInputs = () => {
	selectInput.value = 0;
	messageInput.value = "";
	errorText.style.visibility = "hidden";
};

const addNote = () => {
	let bgColor;
	let titleNote;

	if (selectInput.value == 1) {
		bgColor = "blue";
		titleNote = selectInput[1].textContent;
	} else if (selectInput.value == 2) {
		bgColor = "purple";
		titleNote = selectInput[2].textContent;
	} else if (selectInput.value == 3) {
		bgColor = "green";
		titleNote = selectInput[3].textContent;
	}
	const div = document.createElement("div");
	div.classList.add("main__note");
	div.classList.add(bgColor);
	div.setAttribute("id", id);

	div.innerHTML = `<div class="main__note-top">
					<h2 class="main__note-top-title">${titleNote}</h2>
					<button class="main__note-top-btn" onclick="deleteOneNote(${id})"><i class="fa-solid fa-x"></i></button>
				</div>
				<p class="main__note-text">${messageInput.value}</p>`;

	if (selectInput.value == 0 || messageInput.value == "") {
		errorText.style.visibility = "visible";
	} else {
		main.appendChild(div);
		closePopup();
		id++;
	}
};

const deleteOneNote = id => {
	const note = document.getElementById(id);
	if (note) {
		note.remove();
	}
};

const deleteAllNotes = () => {
	const notes = document.querySelectorAll(".main__note");

	notes.forEach(note => {
		note.remove();
	});
};

window.onload = () => {
	cleanAllInputs();
};

openPanelBtn.addEventListener("click", showPopup);
closePanelBtn.addEventListener("click", closePopup);
deleteAllNotesBtn.addEventListener("click", deleteAllNotes);
addNoteBtn.addEventListener("click", addNote);
