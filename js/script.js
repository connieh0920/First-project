/*
	<div class="user">
		<h1>Yan Hong</h1>
		<h2>26</h2>
		<h2>SFU</h2>
		<p>
			<span>HTML</span>
			<span>CSS</span>
			<span>JavaScript</span>
		</p>		
	</div>

*/


var userArray = [
	{
		name: 'Yan Hong',
		age: 26,
		school:'SFU',
		tages:['HTML', 'CSS', 'JavaScript']
	},
	{
		name: 'Ben Sun',
		age: 31,
		school:'SFU',
		tages:['UIUX', 'Graphics', 'Design']
	},
	{
		name: 'Harry Potter',
		age: 100,
		school:'SFU',
		hobby:'football',
		tages:['UIUX', 'Graphics', 'Design']
	},

]

$('#search-btn').click(function(e) {
	var searchVal = $('#search-input').val();

	for (var i = 0; i < userArray.length; i++) {
		if (searchVal == userArray[i].name) {
			var userDiv = $('<div>').addClass('user');

			$('<h1>').text(userArray[i].name).appendTo(userDiv)
			$('<h2>').text(userArray[i].hobby).appendTo(userDiv)
			$('<h2>').text(userArray[i].age).appendTo(userDiv)
			$('<h2>').text(userArray[i].school).appendTo(userDiv)
	
			var p = $('<p>');

			for (var j = 0; j < userArray[i].tages.length; j++) {
				$('<span>').text(userArray[i].tages[j]).appendTo(p);	
			}
			$(p).appendTo(userDiv);
			$(userDiv).appendTo($('#user-container'));
}				

		}

		

});


/*

function addUser(userObj){
	var userDiv = $('<div>').addClass('user')
	$('<h1>').text(userObj.name).appendTo(userDiv)
	$('<h2>').text(userObj.age).appendTo(userDiv)
	$('<h2>').text(userObj.school).appendTo(userDiv)
	$(userDiv).appendTo($('#user-container'))
}

/*
var userDiv = $('<div>').addClass('user')
var x = "hello"
$('<h1>').text('Yan Hong').appendTo(userDiv)
$('<h2>').text('26').appendTo(userDiv)
$('<h2>').text('SFU').appendTo(userDiv)
$(userDiv).appendTo($('#user-container'))


for (var i=0; i < userArray.length; i++) {
	addUser(userArray[i]);
}

*/


