/* if link is below title
$(document).ready(function(){
    $("h1").css("color", "blue");
});
*/

//if link is just above the body close
//$("h1").css("color", "blue");

/* manipulating styles by adding class created in style.css*/

$("h1").addClass("big-title margin-50");

$("button");

/*.....manipulating text......*/

$("h1").text("bye");

//change button name
$("button").html("<em>hey</em>");

//$("button").text("<em>hey</em>");

/*..... manipulating attributes......*/

$("a").attr("href", "https://www.facebook.com");

/*...... adding event listeners......*/

$("button").click(function() {
    $("h1").css("color", "purple");
});

$("input").keypress(function(event) {
    console.log(event.key);
});

$(document).keypress(function(event) {
    $("h1").text(event.key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "blue");
});


/*.......Adding & Removing elements.....*/

$("h1").before("<button>New1</button>");
$("h1").after("<button>New2</button>");
$("h1").prepend("<button>New3</button>");
$("h1").append("<button>New4</button>");

//$("button").remove();


/*.........animation.........*/

$("button").on("click", function() {
    $("h1").slideUp().slideDown().animate({ opacity: 0.5 });
});