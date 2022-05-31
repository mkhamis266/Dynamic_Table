function addColumn() {
	let tbody = document.getElementById("body");
	let rowsLength = tbody.children.length;
	
	const delcol = createDelBtn();

	for(let i=0; i<rowsLength; i++){
		let newTd = createTd();
		if (i==0){
			newTd.appendChild(delcol);
		}
		if (tbody.querySelectorAll("tr")[i].lastChild.tagName == "BUTTON") {
			tbody.querySelectorAll("tr")[i].insertBefore(newTd, tbody.querySelectorAll("tr")[i].lastChild)
		} else {
			tbody.querySelectorAll("tr")[i].append(newTd);
		}
	}
	delcol.addEventListener("click", (e)=>{
		let currentCol = e.target.parentElement.cellIndex;
		tbody.querySelectorAll('tr').forEach(row=>{
			row.removeChild(row.children[currentCol]);
		})
	})

}

function addRow(){
	let tbody = document.getElementById("body");
	let colLength = document.getElementById("body").firstElementChild.children.length;
	const newRow = document.createElement('tr');
	for (let i=0; i<colLength; i++){
		let newTd = createTd();
		newRow.append(newTd);
	}
	tbody.append(newRow);
	const delRow = createDelBtn();
	tbody.lastElementChild.appendChild(delRow);

	delRow.addEventListener("click", (e)=>{
		let rows = [...tbody.querySelectorAll("tr")];
		let currentRow =  rows.indexOf(e.target.parentElement)
		tbody.removeChild(tbody.children[currentRow]);
	}) 
}


function createDelBtn(){
	const delBtn = document.createElement("button");
	delBtn.classList = "btn btn-danger detRow"
	delBtn.textContent = "X";

	return delBtn;
}

function createTd(){
	const td = document.createElement("td");
	td.innerHTML = '<input type="text" class="form-control">'

	return td;
}