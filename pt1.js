$(document).ready(console.log("Let's get ready to party with jQuery!"));

$("article img").addClass("image-center");

$('p').last().remove();

const randSize = Math.random() * 100;
$('#title').css("font-size", randSize);

$('ol').append("<li>New list item!</li>");

$('aside').children().remove();
$('aside').append("<p>Sorry that a list was ever here in the first place.</p>");


$('input').on("input", function() {
    const r = $('input').get(0).value;
    const b = $('input').get(1).value;
    const g = $('input').get(2).value;
    $('body').css("background", `rgb(${r}, ${g}, ${b})`);
})

$('img').on("click", function() {
    $('img').remove();
})