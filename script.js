
var cells = [],
		iter,
		rowEl,
		wrapper,
		i,
		_i,
		j,
		_j,
		br;


wrapper = document.getElementById('wrapper');
for (_i = i = 1; _i <= 10; _i++) {
	for (_j = j = 1; _j <= 10; _j++) {

		rowEl = document.createElement('div');
		rowEl.classList.add('float-left');

		iter = _i * _j;

		rowEl.innerHTML = iter;
		cells.push(rowEl);
		wrapper.appendChild(rowEl);
	}
	br = document.createElement('br');
	wrapper.appendChild(br);
}

console.log(cells.length);
console.log(cells);
console.log(rowEl);





