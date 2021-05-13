const area = document.getElementById('area');
const contentWrapper = document.getElementById('content');
const modalResult = document.getElementById('modal-result-wrapper');
const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');
let result = '';
let move = 0;
let isDraw;

area.addEventListener('click', e => {
	if (e.target.className === 'box' && e.target.textContent != 'Х' && e.target.textContent != 'O') {
		move % 2 === 0 ? e.target.textContent = 'Х' : e.target.textContent = 'O';
		move++;
		check();
	}
})

const check = () => {
	const boxes = document.getElementsByClassName('box');
	const arr = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6]
	];

	for (let i = 0; i < boxes.length; i++) {
		if(boxes[i].textContent === 'O' || boxes[i].textContent === 'Х') {
			isDraw = true;
		} else {	
			isDraw = false;
			break;
		}
	}
	
	for (let i = 0; i < arr.length; i++) {
		if (boxes[arr[i][0]].textContent === 'Х' &&
			boxes[arr[i][1]].textContent === 'Х' &&
			boxes[arr[i][2]].textContent === 'Х') {
			result = 'Crosses wins';
			isDraw = false;
			prepareResult(result);
		} else if (boxes[arr[i][0]].textContent === 'O' &&
			boxes[arr[i][1]].textContent === 'O' &&
			boxes[arr[i][2]].textContent === 'O') {
			result = 'Noughts wins';
			isDraw = false;
			prepareResult(result);
		} else if(isDraw) {
			result = 'Draw';
			prepareResult(result);
		}
	}
}


const prepareResult = winner => {
	contentWrapper.textContent = `${winner}!`;
	modalResult.style.display = 'block';
}

const closeModal = () => {
	modalResult.style.display = 'none';
	location.reload();
}

overlay.addEventListener('click', closeModal);
btnClose.addEventListener('click', closeModal);