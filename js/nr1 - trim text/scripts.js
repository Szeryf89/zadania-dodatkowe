let testText = "Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym" ;

function trimmTextByReplace(text) {
	return text.replace(/\s/g, '');
}

function trimmTextBySplit(text) {
	return text.split(' ').join('');
}

console.log('trimmTextBySplit', trimmTextBySplit(testText));
console.log('trimmTextByReplace', trimmTextByReplace(testText));
