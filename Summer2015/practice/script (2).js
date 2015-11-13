$(document).ready(function() {
	loadGrid(4);
	color();
});

function loadGrid(size) {
	for (var i = 0; i < size; i++) {
		for (var j = 0; j < size; j++) {
			$("#container").append("<div class='block'></div>");
		}
		$("#container").append("<div class='new_row'></div>")
	}
	$(".block").css("width", 800/size );
	$(".block").css("height", 800/size );
};

function color() {
	$(".block").hover(function() {
		$(this).css("background", "#116493");
	});
};

function reset() {
	var size = prompt("Enter a grid size: ");
	$(".block").remove();
	loadGrid(size);
	color();
};