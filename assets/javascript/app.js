//Question Set Obj

var questionSet = [
    {
      question: "In what country would you find shish kebab as an everyday food?",
      options: {
        a: 'China',
        b: 'Turkey',
        c: 'Chile',
      },
      name: 'kebab',
      corAns: 'b'
    },
    {
      question: "What country is renowned for chocolate?",
      options:{
        a: 'Argentina',
        b: 'Belgium',
        c: 'Finland',
      },
      name:'chocolate',
      corAns: 'c'
    },
    {
      question: "To what country is the mung bean native?",
      options: {
        a: 'India',
        b: 'Italy',
        c: 'Indonesia',
      },
      name: 'mung',
      corAns: 'a'
    },
    {
      question: "In what country might you eat haggis?",
      options: {
        a: 'Paraguay',
        b: 'Norway',
        c: 'Scotland',
      },
      name: 'haggis',
      corAns: 'c'
    },
    {
      question: "What country does the word mocha come from?",
      options: {
        a: 'Tonga',
        b: 'Yemen',
        c: 'Saudi Arabia',
      },
      name: 'mocha',
      corAns: 'b'
    },
    {
      question: "If you were eating mole poblano, you would most likely be in what country?",
      options: {
        a: 'Mexico',
        b: 'Tanzania',
        c: 'China',
      },
      name: 'mole',
      corAns: 'a'
    }
  ];


//=======================



for(i=0; i<questionSet.length; i++){

var box = '<input type="checkbox" name= "'+ questionSet[i].name +'">';

$("#qField").append(questionSet[i].question+"<br>");
$("#qField").append(box + questionSet[i].options.a + "<br>");
$("#qField").append(box + questionSet[i].options.b + "<br>");
$("#qField").append(box + questionSet[i].options.c + "<hr>");
console.log(questionSet[i].corAns);


// Need to work on making this add up results
var results = 0;

if ($('input:checkbox[name="' + questionSet[i].name + '"]:checked').val() === questionSet[i].corAns) {

    results++;
};

}




  //Timer
  var timeLeft = 60;
  var elem = document.getElementById('timer');
  var timerId = setInterval(countdown, 1000);
  
  function countdown() {
      if (timeLeft == -1) {
          clearTimeout(timerId);
          timesUp();
      } else {
          elem.innerHTML = "Time Left: 00:"+timeLeft;
          timeLeft--;
      }
  }
  
  function timesUp() {
      alert("FINISHED!!!")
      $("#timer").text("Score: "+results+"/6");
  }
  
    //Sumbit button  
    $("#submit").click(function() {
        clearTimeout(timerId);
        timesUp();
        }); 

