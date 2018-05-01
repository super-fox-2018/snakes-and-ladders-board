function generateBoard(luas){
	let board = []
	let isi = luas*luas
	for(var i=0;i<luas;i++){
		board.push([])
		for(var j=0;j<luas;j++){
			board[i].push(isi--)
		}
	}
	//console.log(board);
	let pembanding = board[board.length-1][board.length-5]
	for(var i=0;i<board.length;i++){
		if (i===board.length-1) {
			board[i].sort(function(a, b){return a-b})
			}
		}
	for(var i=0;i<board.length-1;i++){
		if (board.length%2===0) {
			if (i%2===1) {
				board[i].sort(function(a, b){return a-b})
			}
		}
		else if (board.length%2===1) {
			if (i%2===0) {
				board[i].sort(function(a, b){return a-b})
			}
		}
	}
	console.log(pembanding);
	console.log(board);
}
generateBoard(5)