export default {
	draw,
	highlight
};


// ****************************

var origBoardEl;

function draw(boardEl) {
	origBoardEl = boardEl;

	for (let i = 0; i <= 7; i++) {
		let rowEl = document.createElement("div");
		for (let j = 0; j <= 7; j++) {
			let tileEl = document.createElement("div");
			rowEl.appendChild(tileEl);
		}
		boardEl.appendChild(rowEl);
	}
}

function highlight(tileEl) {
	var tiles = origBoardEl.querySelectorAll("div > div");

	// clear all currently highlighted tiles (if any)
	for (let el of tiles) {
		el.classList.remove("highlighted");
	}

	// clicked on a board tile?
	if (tileEl) {
		let rowEl = tileEl.parentNode;
		let tileRowIdx = [...origBoardEl.childNodes].findIndex(el => el == rowEl);
		let tileColIdx = [...rowEl.childNodes].findIndex(el => el == tileEl);

		// highlight in up-left direction
		for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j >= 0; i--, j--) {
			let el = findTile(i,j);
			el.classList.add("highlighted");
		}
		// highlight in the up-right direction
		for (let i = tileRowIdx, j = tileColIdx; i >= 0 && j <= 7; i--, j++) {
			let el = findTile(i,j);
			el.classList.add("highlighted");
		}
		// highlight in down-left direction
		for (let i = tileRowIdx, j = tileColIdx; i <= 7 && j >= 0; i++, j--) {
			let el = findTile(i,j);
			el.classList.add("highlighted");
		}
		// highlight in the down-right direction
		for (let i = tileRowIdx, j = tileColIdx; i <= 7 && j <= 7; i++, j++) {
			let el = findTile(i,j);
			el.classList.add("highlighted");
		}
	}
}

function findTile(row,col) {
	return document.querySelector(`#board > div:nth-child(${ row + 1 }) > div:nth-child(${ col + 1 })`);
}
