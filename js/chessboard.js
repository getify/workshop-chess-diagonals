export default {
	draw,
	highlight
};


// ****************************

var tiles;

function draw(boardEl) {
	for (let i = 0; i <= 7; i++) {
		let rowEl = document.createElement("div");
		for (let j = 0; j <= 7; j++) {
			let tileEl = document.createElement("div");
			tileEl.dataset.row = i;
			tileEl.dataset.col = j;
			rowEl.appendChild(tileEl);
		}
		boardEl.appendChild(rowEl);
	}
	tiles = boardEl.querySelectorAll("div > div");
}

function highlight(tileEl) {
	// clear all currently highlighted tiles (if any)
	for (let el of tiles) {
		el.classList.remove("highlighted");
	}

	// clicked on a board tile?
	if (tileEl) {
		let rowEl = tileEl.parentNode;
		let boardEl = rowEl.parentNode;
		let tileRowIdx = [...boardEl.childNodes].findIndex(el => el == rowEl);
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
	for (let el of tiles) {
		if (el.dataset.row == row && el.dataset.col == col) {
			return el;
		}
	}
}
