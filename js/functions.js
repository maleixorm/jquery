$(function () {
    console.log($('#exemplo'));
});

$(document).ready(() => {
    $('div').attr('style', 'background-color: blue; width: 200px; height: 200px');
});
$(document).ready(() => {
    $('img').attr('src', 'img/esfera_2.png');
    $('img').attr('border', '2');
});

$(document).ready(() => {
    $('input').attr('value', 'Eu continuo sendo um input');
    $('input').attr('type', 'password');
});