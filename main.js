console.log('Hello Hacker! If you\'re reading this, you should join us!')

// Append the Templates
var templateWinner = Tangular.compile(document.getElementById('template-winner').innerHTML);
$( ".winners .container" ).append(templateWinner(data));

var templateSponsor = Tangular.compile(document.getElementById('template-sponsors').innerHTML);
$( ".sponsors .container" ).append(templateSponsor(data));

var templateChallenge = Tangular.compile(document.getElementById('template-challenge').innerHTML);
$( ".challenges .container" ).append(templateChallenge(data));

var templateMentor = Tangular.compile(document.getElementById('template-mentor').innerHTML);
$( ".mentor .container" ).append(templateMentor(data));

var templateJudge = Tangular.compile(document.getElementById('template-judge').innerHTML);
$( ".judge .container" ).append(templateJudge(data));

var templateOrganizer = Tangular.compile(document.getElementById('template-organizer').innerHTML);
$( ".organizer .container" ).append(templateOrganizer(data));

var templateApi = Tangular.compile(document.getElementById('template-api').innerHTML);
$( ".api .container" ).append(templateApi(data));

var templateFaq = Tangular.compile(document.getElementById('template-faq').innerHTML);
$( ".faq .row" ).append(templateFaq(data));

// Disable Map Scroll
$('.maps').click(function () {
    $('.maps iframe').css('pointer-events', 'auto');
});

$('.maps').mouseleave(function() {
  $('.maps iframe').css('pointer-events', 'none'); 
});