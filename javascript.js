// JS Code for getting a date and time within one's locale 
let date = new Date();
document.getElementById('datetime').innerHTML = date.toLocaleTimeString()
// Array for storing the verses to be called at random
let verses = [
    " \"For it is by grace you have been saved, through faith--and this is not from yourselves, it is the gift of God--\" <br><b>Ephesians 2:8<b>",
    "\"But he said to me, 'My grace is sufficient for you, for my power is made perfect In weakness.' Therefore I will boast all the more gladly about my weaknesses, so that Christ's power may rest on me.\"<br><b> 2nd Corinthians 12:9<b>",
    " \"For sin shall no longer be your master, because you are not under the law, but under grace\"<br><b> Romans 6:14<b>",
    "\"And God said, 'Let there be light,'' and there was light\" <br><b>Genesis 1:3<b>",
    " \"Children are a heritage from the LORD, offspring a reward from him.\" <br><b>Psalms 127:3<b>",
    " \" The LORD will make you the head, not the tail. If you pay attention to the commands of the LORD your God that I give you this day and carefully follow them, you will always be at the top, never at the bottom.\"<br><b> Deuteronomy 28:13<b>",
    " \"Now Daniel so distinguished himself among the administrators and the satraps by his exceptional qualities that the king planned to set him over the whole kingdom.\"<br><b> Daniel 6:3<b> ",
    " \" In every matter of wisdom and understanding about which the king questioned them, he found them ten times better than all the magicians and enchanters in his whole kingdom\" <br><b>Daniel 1:20 <b>",
    "\"I can do all this through him who gives me strength.\"<br><b> Philippians` 4:13<b>",
    "\"Dishonest money dwindles away, but whoever gathers money little by little makes it grow.\"<br><b> Proverbs 13:11<b>",
    "\"Do everything without grumbling or arguing,\"<br><b> Philippians 2:14<b>",
    "\"Let everything that has breath praise the LORD. Praise the LORD.\" <br><b>Psalms 150:6<b>",
    "\"And now these three remain: faith, hope and love. But the greatest of these is love.\" <br><b>1 Corinthians 13:13<b>",
    "\"That is why, for Christ's sake, I delight in weaknesses, in insults, in hardships, in persecutions, in difficulties. For when I am weak, then I am strong.\" <br><b>2 Corinthians 2:10<b>",
    "\"My flesh and my heart may fail, but God is the strength of my heart and my portion forever.\" <br><b> Psalms 73:26<b>",
    "\"for it is God who works in you to will and to act in order to fulfill his good purpose.\"<br><b> Philippians 2:13<b>",
    "\"A song of ascents. I lift up my eyes to the mountains-- where does my help come from?\"<br><b> Psalms 121:1<b>",
    "\"My help comes from the LORD, the Maker of heaven and earth.\" <br> <b>Psalms 121:2<b>",
    "\"But on Mount Zion will be deliverance; it will be holy, and Jacob will possess his inheritance.\" <br> <b>Obadiah 1:17<b>",
    "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.\"<br> <b> Matthew 7:7<b>",
    "\"Keep this Book of the Law always on your lips; meditate on it day and night, so that you may be careful to do everything written in it. Then you will be prosperous and successful.\" <br> <b>Joshua 1:8<b>",
    "\"My dear children, I write this to you so that you will not sin. But if anybody does sin, we have an advocate with the Father--Jesus Christ, the Righteous One.\"<br> <b>1 John 2:1<b>",
    "\"Call to me and I will answer you and tell you great and unsearchable things you do not know.'\" <br> <b>Jeremiah 33:3<b>",
    "\"But you are a chosen people, a royal priesthood, a holy nation, God's special possession, that you may declare the praises of him who called you out of darkness into his wonderful light.\" <br> <b>1 Peter 2:9<b>",
    "\"In the same way, the Spirit helps us in our weakness. We do not know what we ought to pray for, but the Spirit himself intercedes for us through wordless groans.\" <br> <b>Romans 8:26<b>",
    "\Be joyful in hope, patient in affliction, faithful in prayer.\" <br> <b> Romans 12:12<b>",
    "\"Dear friend, do not imitate what is evil but what is good. Anyone who does what is good is from God. Anyone who does what is evil has not seen God.\"<br> <b>3 John 1:11<b>",
    "\"Blessed is the one who does not walk in step with the wicked or stand in the way that sinners take or sit in the company of mockers,\" <br> <b>Psalms 1:1<b>",
    "\"A psalm. For giving grateful praise. Shout for joy to the LORD, all the earth.\"<br><b>Psalms  100:1<b>",
    "\"Children, obey your parents in the Lord, for this is right.\" <br><b>Ephesians 6:1<b>",
    "\"For I know the plans I have for you,\" declares the LORD, \"plans to prosper you and not to harm you, plans to give you hope and a future.\"<br><b>Jeremiah 29:11<b>",
    "\"One thing I ask from the LORD, this only do I seek: that I may dwell in the house of the LORD all the days of my life, to gaze on the beauty of the LORD and to seek him in his temple.\"<br><b>Psalms 27:4<b>",
    "\"A friend loves at all times, and a brother is born for a time of adversity.\"<br><b>Proverbs 17:17<b>",
    "\" Greater love has no one than this: to lay down one's life for one's friends.\"<br><b>John 15:13<b>",
    "\"Be on your guard; stand firm in the faith; be courageous; be strong.\"<br><b>1 Corinthians 16:13<b>",
    "\"Be strong and courageous. Do not be afraid or terrified because of them, for the LORD your God goes with you; he will never leave you nor forsake you.\"<br> <b>Deuteronomy 31:6<b>",
    "\"1 The LORD is my shepherd, I lack nothing.\"<br> <b>Psalms 23:1<b>",
    "\"and receive from him anything we ask, because we keep his commands and do what pleases him\" <br><b> 1 John 3:22<b>"





]
// JS Code for accessing the arrays at random
function newVerse(){
    let randomQuotes = Math.floor(Math.random() * (verses.length));
    document.getElementById('displayVerse').innerHTML = verses [randomQuotes];
}
//////////////////////////////////////////////////////////////////////
 function start(){
    let correct = 0;
    let incorrect = 0;
    let question = "none";
    let input = "none";
    let answer = "none";

   
var timeLeft = 24;
var timerId = setInterval(countdown, 1000);

function countdown(){
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        alert(timeLeft);
        timeLeft--;
    }
} 
//  the ask function
let ask = function(){
    input = prompt(question); 
};
// the score function 
let score = function(){
    if(input==answer){ // if (condition){ do smtin} else { do smtin}
       correct = correct+1;
       alert("Correct");
 } else{
     incorrect= incorrect+1;
     alert("Incorrect");
 }
};
//  this function calls both the ask and score functions
let both = function(){
    ask();
    score();
    countdown();
};

alert('Welcome to my Bible Quiz.You will be answering 25 questions');

question= "What was the name of the man who was paralyzed and bedridden for for eight years?";
answer = "Aeneas";
both();
question = "Who was David's great friend?";
answer = "Jonathan";
both();
question = "Which is the longest Psalm?";
answer = `Psalm ${119}`;
both();
question = "With whom did David commit adultery?";
answer = "Bathsheba";
both();
question = "Who was Jacob's mother?";
answer = "Rebekah";
both();
question = "Who's mother-in-law did Jesus heal?";
answer = "Peter";
both();
question = "Who became nurse to Ruth's son?";
answer=  "Naomi";
both();
question = "What was Paul's hometown?";
answer = "Tarsus";
both();
question = " Who was the father of Abraham?"
answer = "Terah";
both();
question = " Who came into Galilee preaching the Kingdom of God?";
answer = "Jesus";
both();
question = "What was the name of the prophet who prophesied that Paul would be bound at Jerusalem?";
answer = "Agabus";
both();
question = "How many horns did the ram in Daniel's vision have?";
answer= "Two";
both();
question = "In which tribe was the city of Ramoth-Gilead?";
answer = "Gad";
both();
question = " Where was David born?";
answer = "Bethlehem";
both();
question = " Who was Noah's father?";
answer = "Lamech";
both();
question = " Who carried the cross for Christ?";
answer = "Simon";
both();
question = " Which prophet anointed David as king?";
answer = "Samuel";
both();
question = "Who was Jacob's first wife?";
answer= "Leah";
both();
question = "To which tribe did Jesus belong?";
answer = "Judah";
both();
question = "What are the wages of sin?";
answer = "Death";
both();
question = " What was the name of James' and John's father?";
answer = "Zebedee";
both();
question = "  Who was Bathsheba's first husband?";
answer = "Uriah";
both();
question = " Who wrote the book of Acts?";
answer = "Luke";
both();
question = "In which town did Martha and Mary live?";
answer = "Bethany";
both();
question = " To which city did Samson go down to and kill thirty men";
answer = "Ashkelon";
both();   
// end of quiz note 
alert(`Quiz over! You got ${correct} out of 25`)
}