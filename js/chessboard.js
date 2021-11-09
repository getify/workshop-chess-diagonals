export default {
	draw,
	highlight
};


// ****************************

var diagonals = [];
var highlighted = [];
var tileDiagonals = new Map();

function draw(boardEl) {
	// setup all 15 top-left-bottom-right (major) diagonal
	// collections and all 15 top-right-bottom-left (minor)
	// diagonal collections
	for (let i = 0; i < 30; i++) {
		diagonals.push([]);
	}

	for (let i = 0; i <= 7; i++) {
		let rowEl = document.createElement("div");
		for (let j = 0; j <= 7; j++) {
			let tileEl = document.createElement("div");

			// select the top-left-bottom-right (major)
			// diagonal collection
			let majorDiag = diagonals[7 - (i - j)];
			// select the top-right-bottom-left (minor)
			// diagonal collection
			let minorDiag = diagonals[15 + (i + j)];

			// save a reference to this tile in each of its
			// two diagonals collections
			majorDiag.push(tileEl);
			minorDiag.push(tileEl);

			// save a reference to each of a tile's two diagonal
			// collections
			tileDiagonals.set(tileEl,[ majorDiag, minorDiag ]);

			rowEl.appendChild(tileEl);
		}
		boardEl.appendChild(rowEl);
	}
}

function highlight(tileEl) {
	// clear all currently highlighted tiles (if any)
	for (let diagonal of highlighted) {
		for (let el of diagonal) {
			el.classList.remove("highlighted");
		}
	}
	highlighted = [];

	// clicked on a board tile?
	if (tileEl) {
		// retrieve the clicked tile's two diagonal collections
		highlighted = tileDiagonals.get(tileEl);

		// highlight all tiles in both diagonal collections
		for (let diagonal of highlighted) {
			for (let el of diagonal) {
				el.classList.add("highlighted");
			}
		}
	}
}
