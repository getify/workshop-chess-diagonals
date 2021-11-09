export default {
	draw,
	highlight
};


// ****************************

var tiles = [];

function draw(boardEl) {
	for (let i = 0; i <= 7; i++) {
		let rowEl = document.createElement("div");
		let rowTiles = [];
		tiles.push(rowTiles);
		for (let j = 0; j <= 7; j++) {
			let tileEl = document.createElement("div");
			tileEl.dataset.row = i;
			tileEl.dataset.col = j;
			rowEl.appendChild(tileEl);
			rowTiles.push(tileEl);
		}
		boardEl.appendChild(rowEl);
	}
}

function highlight(tileEl) {
	// clear all currently highlighted tiles (if any)
	for (let row of tiles) {
		for (let el of row) {
			el.classList.remove("highlighted");
		}
	}

	// clicked on a board tile?
	if (tileEl) {
		let tileRowIdx = tileEl.dataset.row;
		let tileColIdx = tileEl.dataset.col;

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
	return tiles[row][col];
}
