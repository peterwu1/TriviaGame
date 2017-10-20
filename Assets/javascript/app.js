var panel = $('#quiz-area');


$(document).on('click', '#start', function(e) {
  game.start();
});

$(document).on('click', '#done', function(e) {
  game.done();
});


var questions = [{
  question: "1 . What is the name of the old man in the Disney film Up?",
  answers: ["Paul", "Carl", "John", "Edward"],
  correctAnswer: "Carl"
}, {
  question: "2 . What color is Mike Wazowski from Monsters Inc.?",
  answers: ["Blue", "Yellow", "Green", "Red"],
  correctAnswer: "Green"
}, {
  question: "3 . What is Sleeping Beauty's name?",
  answers: ["Ariel", "Aurora", "Anna", "Amanda"],
  correctAnswer: "Aurora"
}, {
  question: "4 . What kind of animal does Princess Jasmine have as a pet?",
  answers: ["Monkey", "Parrot", "Tiger", "Lion"],
  correctAnswer: "Tiger"
}, {
  question: "5 . What is the name of the bird in the Disney film Up?",
  answers: ["Kevin", "Kyle", "Carl", "Chris"],
  correctAnswer: "Kevin"
}, {
  question:  "6 . In the Lion King, what is the name of Simba's uncle?",
  answers: ["Timone", "Mufasa", "Scar", "Nala"],
  correctAnswer: "Scar"
}, {
  question: "7 . Which is Pixar's first animated movie?",
  answers: ["Monsters Inc ", "A Bug's Life", "Brave", "Toy Story"],
  correctAnswer: "Toy Story"
}, {
  question: "8 . In the movie Cars, what color is Lightning McQueen?",
  answers: ["Red", "White", "Blue", "Yellow"],
  correctAnswer: "Red"
}];

var game = {
  correct:0,
  incorrect:0,
  counter:45,
  countdown: function(){
    game.counter--;
    $('#counter-number').html(game.counter);

    if (game.counter === 0){
      console.log('TIME UP');
      game.done();
    }
  },
  start: function() {
    timer = setInterval(game.countdown, 1000);

    $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter-number">45</span> Seconds</h2>');
    $('#start').remove();


    for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].answers.length; j++) {
        panel.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].answers[j] + '">' + questions[i].answers[j]);
      }
    }

    panel.append('<button id="done">Done</button>');
  },
  done: function() {


    $.each($("input[name='question-0']:checked"), function() {
      if ($(this).val() == questions[0].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-1']:checked"), function() {
        if ($(this).val() == questions[1].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-2']:checked"), function() {
      if ($(this).val() == questions[2].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-3']:checked"), function() {
      if ($(this).val() == questions[3].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-4']:checked"), function() {
      if ($(this).val() == questions[4].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-5']:checked"), function() {
      if ($(this).val() == questions[5].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-6']:checked"), function() {
      if ($(this).val() == questions[6].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });
    $.each($("input[name='question-7']:checked"), function() {
      if ($(this).val() == questions[7].correctAnswer) {
        game.correct++;
      } else {
        game.incorrect++;
      }
    });

    this.result();
  },
    result: function() {

    clearInterval(timer);

    $('#subwrapper h2').remove();
    panel.html('<h2>Finished!</h2>');
    panel.append('<h3>Correct Answers: ' + this.correct + '</h3>');
    panel.append('<h3>Incorrect Answers: ' + this.incorrect + '</h3>');
    panel.append('<h3>Unanswered: ' + (questions.length - (this.incorrect + this.correct)) + '</h3>');
  }

};
