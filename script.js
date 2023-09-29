const dataArray = ["a", "b", "c", "d", "e", "f"];
const resultArray = [];
const dataList = document.querySelector(".data-list");
const resultList = document.querySelector(".result-list");
generateMarkup(dataArray, dataList);
let itemArray = getClickableList();

setListeners();

function transferElement(index) {
	resultArray.push(dataArray[index]);
	resultArray.sort();
	dataArray.splice(index, 1);
	generateMarkup(dataArray, dataList, true);
	generateMarkup(resultArray, resultList, false);
	getClickableList();
}

function generateMarkup(array, list, isClickable) {
	list.innerHTML = "";
	array.forEach((item) => list.insertAdjacentHTML("beforeend", `<li>${item}</li>`));
	if (isClickable) {
		itemArray = getClickableList();
		setListeners();
	}
}

function setListeners() {
	itemArray.forEach((item, index) =>
		item.addEventListener("click", (e) => {
			transferElement(index);
		})
	);
}

function getClickableList() {
	return dataList.querySelectorAll("li");
}
