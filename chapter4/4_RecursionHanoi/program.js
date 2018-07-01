var hanoi = function(disc, src, aux, dst) {
	if (disc > 0) {

		hanoi(disc - 1, src, dst, aux); // move (disc - 1) discs from src to aux using dst
		console.log('Move disc ' + disc + 'from ' + src + ' to ' + dst);
		hanoi(disc - 1, aux, src, dst); // move (disc - 1) discs from aux to dst using src
	}
};

hanoi(3, 'Src', 'Aux', 'Dst');

