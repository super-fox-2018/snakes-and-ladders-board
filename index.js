function generateBoard(rowCol) {
	var finalArr=[]

	for(var k=0;k<rowCol;k++) {
		var subArr=[]
		finalArr.push(subArr)
	}


	if(rowCol%2==0) {
		var evenRow=rowCol*rowCol
		for(var i=0;i<finalArr.length;i++) {
			for(var j=0;j<rowCol;j++) {
				if(i==0 || i%2==0) {
					finalArr[i].push(evenRow)
					evenRow--
				}else{
					evenRow--
				}
			}
		}

		var oddRow=1
		for(var i=finalArr.length-1;i>0;i--) {
			for(var j=0;j<rowCol;j++) {
				if(i%2==1) {
					finalArr[i].push(oddRow)
					oddRow++
				}else{
					oddRow++
				}
			}
		}
	}

	if(rowCol%2!==0) {
		var oddRow=rowCol*rowCol
		for(var i=0;i<finalArr.length-1;i++) {
			for(var j=0;j<rowCol;j++) {
				if(i%2==1) {
					finalArr[i].push(oddRow)
					oddRow--
				}else{
					oddRow--
				}
			}
		}

		var evenRow=1
		for(var i=finalArr.length-1;i>=0;i--) {
			for(var j=0;j<rowCol;j++) {
				if(i%2==0 || i==0) {
					finalArr[i].push(evenRow)
					evenRow++
				}else{
					evenRow++
				}
			}
		}
	}
	
	return finalArr
}

console.log(generateBoard(7))