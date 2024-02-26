$('button').on("click", function(e) {
    e.preventDefault();
    const movie = $('#movie').get(0).value;
    const rating = $('#rating').get(0).value;
    if (movie.length < 2) {
        alert("Movie title must contain at least 2 characters.")
        return;
    }
    if (rating < 0 || rating > 10) {
        alert("Rating must be between 0 and 10.")
        return;
    }
    const newRate = `${movie} ${rating}`;
    const li = $(`<li>${newRate}</li>`);
    const rmv = $('<button class="rmv">X</button>')

    li.append(rmv);
    $('.list').append(li);
})

$('.list').on("click", ".rmv", function(){
    $('li').remove();
})