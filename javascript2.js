(function(){
    // Functions
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // gather answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track of user's answers
      let numCorrect = 0;
  
      // for each question...
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
  
          // color the answers green
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        // if answer is wrong or blank
        else{
          // color the answers red
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }
  
    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    // Variables
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
      {
        question: "794. Where was David born? ",
        answers: {
          a: "Beersheba",
          b: "Jerusalem",
          c: "Bethlehem",
          d: "Bethany",
        },
        correctAnswer: "c"
      },
      {
        question: "371. What profession did Zebedee, father of James and John, have?  ",
        answers: {
          a: "Carpenter",
          b: "Tax Collector",
          c: "Fisherman",
          d: "Priest"
        },
        correctAnswer: "c"
      },
      {
        question: " 389. What was Noah’s ark made out of?",
        answers: {
          a: "Cedar",
          b: "Raff wood",
          c: "Mahogany",
          d: "Gopher wood"
        },
        correctAnswer: "d"
      },
      {
        question: "27. Which book of the Bible records many of the hymns David wrote?",
        answers: {
          a: "Songs of Solomon",
          b: "Psalms",
          c: "1 Kings",
          d: "2 Kings"
        },
        correctAnswer: "b"
      },
      {
        question: "36. Who was David’s father? ",
        answers: {
          a: "Torah",
          b: "Saul",
          c: "Jesse",
          d: "Eli"
        },
        correctAnswer: "c"
      },
      {
        question: "451. On what island was John when he was given the vision of Revelation?  ",
        answers: {
          a: "Tarshish",
          b: "Cyprus",
          c: "Patmos",
          d: "Layes"
        },
        correctAnswer: "c"
      },
      {
        question: "507. What did the Queen of Sheba give to Solomon? ",
        answers: {
          a: "120 talents of gold, spices and precious stones",
          b: "240 grams of rose and fine linen",
          c: "30 changes of fine linen and silver",
          d: "spices and fine perfumes"
        },
        correctAnswer: "a"
      },
      {
        question: "614. Who stole her father’s household gods?  ",
        answers: {
          a: "Rebekah",
          b: "Rachel",
          c: "Leah",
          d: "Deborah"
        },
        correctAnswer: "b"
      },
      {
        question: " 710. Who were the first two disciples to be called?  ",
        answers: {
          a: "James and John",
          b: "Simon Peter and Andrew",
          c: "Thomas and Andrew",
          d: "Judas and James"
        },
        correctAnswer: "b"
      },
      {
        question: "  711. How many sons did Gideon have?  ",
        answers: {
          a: "Twenty-five",
          b: "Thirty-five",
          c: "Seventy-five",
          d: "Seventy"
        },
        correctAnswer: "d"
      },
      {
        question: " 729. Who came into Galilee preaching the Kingdom of God?  ",
        answers: {
          a: "Jesus",
          b: "Paul",
          c: "Philip",
          d: "Peter"
        },
        correctAnswer: "a"
      },
    ];
    
  
    // Kick things off
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    submitButton.addEventListener('click', showResults);
    previousButton.addEventListener("click", showPreviousSlide);
    nextButton.addEventListener("click", showNextSlide);
  })();
  