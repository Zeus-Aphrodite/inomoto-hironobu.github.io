var l = 'data/投票率.csv';

function 投票率() {
	jQuery.get(l, function(d) {
		console.log(d);
		var t = d3.csvParseRows(d);
		console.log(t);
	});
}


var z = d3.csvParse('data/税収.csv');

console.log(z);

document.addEventListener('WebContentLoaded', function(e) {
	var table = document.getElementById('式表');
	$(table).filter('tr > td:nth-child(2)');
});