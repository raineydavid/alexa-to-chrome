const MadLibs = () =>{
// List of prompts for the user

const prompts = [
  //'How many of you in this story?',
	'This is the story of ',
	'and',
	'and a dragon called'
   ];

const story = [
 'Long ago, two young heroes named', 
  'and',
   'were on summer break from school and dreamed of adventure. But specifically, a dragon type of adventure.  One summer morning, ', 
  'and',
   'discovered an old map of dragon caves and decided to investigate. After a long walk in the dark mountains, they found a cave. A cave which should have been dark and wet, but instead was glowing. Smoke came out of the entrance.',
   'said, "It\'s a dragon cave!"',
   'said, "We must be careful, for a dragon loves its gold. Let\'s go take a look."',
'Well the crafty dragon named',
'could smell them from far away, but pretended to sleep. When the two young heroes entered his cave, the dragon grabbed them and said, You are trying to rob me. Now, I will keep you here forever to polish my gold, and bring me food, so that I will never, leave, my treasures. If you run, I will hunt you down.',
'said, "This won\'t do. Our parents will be so angry."',
'worried, "I hope we don\'t run out of food and the dragon eats us." ',
 'The heroes were stranded and had to figure a way out.',
 'After a few days of gathering chickens and rabbits for the dragon to eat,',
'said to the other, "I have an idea!" Whispering in low voices, the siblings smiled and said, "It\'s brilliant." From then on, at every meal,',
   'would put a single gold coin in the dragon\'s food, and',
   'would feed the beast. Since the dragon was so big, he ate a lot at every meal. Soon, he had eaten so much he could not move. There was too much gold in his belly!',
 'The next morning, while the dragon slept,',  
   'made a run for it.'  ,
   'was so angry he blew fire in their direction, but was too heavy to chase them.',
 'Finally',   
   'made it home. Their family and friends were so happy, they did not mind the burned clothes. The map of dragon caves was hidden in the attic for many years after.'
   ];

let answers=[];

// Keep track of current prompt we're on
let currentPrompt = 0;

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

 // speech API
const recognition = new SpeechRecognition();
  recognition.lang = 'en-US'
            
// A function that will call the next prompt
const nextPrompt = function() {
  //if there's no answer in the form
  if (currentPrompt != 0){
    answers.push($('input').val());
  } 
  else {
       recognition.start();
    console.log('Ready to receive a voice command.')
      $('.wizard').text('Next');
    }
    
	// if there is a next prompt
	if (currentPrompt < prompts.length) {
		// put first prompt in all html elements with class 
		$('.prompt').html(prompts[currentPrompt] +'<br><input type="text">');
		// move the next prompt into variable currentPrompt 
   currentPrompt = currentPrompt + 1;
	}
	//or else if we're at the end of the array
	else {
		// put a new message into the html.
		
    	showFinal();
	}
}

const randomiser = function(myArray){
  // to do
   return Math.round(Math.random(myArray.length));
}

const addInput = function(input){
 return '<span class="fill">' +input+'</span>'
}
//puts user answers into HTML
const showFinal = function() {
//  $('.prompt').html('This is the story of'+answers[0]+' and the ' +answers[1])
//  $('button').hide();
// }
  final='';
  var names = answers.slice(0, 2);
  var monsters = answers[2];
  for (var i = 0; i < story.length; i++) {
    let actor =names[randomiser(names)];
  if((i===7) ||(i===17)) {actor=answers[2];}
   if(i != story.length-1)
  // final+=story[i]+addInput(names[randomiser(names)])+' ';
     final+=story[i]+addInput(actor)+' ';
    else
        final+=story[i]
}
   $('.prompt').html(final);
  
    $(document).ready(function(){
   $('.wizard').text('Restart');
     currentPrompt = 0;
       answers=[];
       names=[];
      monsters=[];
});
  // $('button').hide();
}
// run nextPrompt function when button is clicked
$('.wizard').click(function() {
   
	nextPrompt();
});

// Show the first prompt as soon as js load
 nextPrompt();
 }
  //DOM load event
window.addEventListener("DOMContentLoaded",MadLibs);
