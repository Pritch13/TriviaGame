

var right = 0;
var wrong = 0;
var noa = 0;

var ques1 = {
    q: "What is back clipping ?",
    a1: "Clipping the quickdraw upside down.",
    a2: "Attaching the rope to your harness with a figure 8 knot.",
    a3: "Clipping the rope through the quickdraw away from you.",
    a4: "Leaving your quickdraws at home"
}
var ques2 = {
    q: "Why do you flake out the rope before climbing ?",
    a1: "To check for knots and to make sure you belay from the right end.",
    a2: "Just to check for knots.",
    a3: "To check for any animal bite marks.",
    a4: "So you dont belay from the wrong end of the rope."
}
var ques3 = {
    q: "What is z clipping ?",
    a1: "Clipping a quickdraw to far above your head.",
    a2: "Attaching the rope to you harness with a z knot.",
    a3: "Dropping a z clip.",
    a4: "Pulling the rope from below your previous quick draw."
}
var ques4 = {
    q: "Why should you tie a knot at the end of the belay side rope ?",
    a1: "Knots are fun.",
    a2: "To prevent running out of rope and having it slip through the belay device.",
    a3: "To prevent the climber from falling.",
    a4: "So you dont belay from the wrong end of the rope."
}

function que1() {

    var timerup1 = setInterval(function(){
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Times up!');
        $('#correct-answer').text(ques1.a3);
        noa++;
        clearInterval(timerup1);
    },5000)

    $('.welcome').hide();
    $('.que-div').show();
    $('#question').text(ques1.q);
    $('#answer1').text(ques1.a1);
    $('#answer2').text(ques1.a2);
    $('#answer3').text(ques1.a3);
    $('#answer4').text(ques1.a4);
    $('#answer3').on('click', function(){
        right++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Correct!');
        $('#correct-answer').text(ques1.a3);
        clearInterval(timerup1);
    })
    $('#answer1').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques1.a3);
        clearInterval(timerup1);
    })
    $('#answer2').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques1.a3);
        clearInterval(timerup1);
    })
    $('#answer4').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques1.a3);
        clearInterval(timerup1);
    })
}

    function que2() {

    var timerup2 =  setInterval(function(){
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Times up!');
        $('#correct-answer').text(ques2.a1);
        noa++;
        clearInterval(timerup2);
    },5000)

    $('.result').hide();
    $('.que-div').show();
    $('#question').text(ques2.q);
    $('#answer1').text(ques2.a1);
    $('#answer2').text(ques2.a2);
    $('#answer3').text(ques2.a3);
    $('#answer4').text(ques2.a4);
    $('#answer1').on('click', function(){
        right++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Correct!');
        $('#correct-answer').text(ques2.a1);
        clearInterval(timerup2);
    })
    $('#answer3').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques2.a1);
        clearInterval(timerup2);
    })
    $('#answer2').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques2.a1);
        clearInterval(timerup2);
    })
    $('#answer4').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques2.a1);
        clearInterval(timerup2);
    })
}

    function que3() {

    var timerup3 = setInterval(function(){
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Times up!');
        $('#correct-answer').text(ques3.a4);
        noa++;
        clearInterval(timerup3);
    },5000);

    $('.result').hide();
    $('.que-div').show();
    $('#question').text(ques3.q);
    $('#answer1').text(ques3.a1);
    $('#answer2').text(ques3.a2);
    $('#answer3').text(ques3.a3);
    $('#answer4').text(ques3.a4);
    $('#answer4').on('click', function(){
        right++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Correct!');
        $('#correct-answer').text(ques3.a4);
        clearInterval(timerup3);
    })
    $('#answer1').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques3.a4);
        clearInterval(timerup3);
    })
    $('#answer2').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques3.a4);
        clearInterval(timerup3);
    })
    $('#answer3').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques3.a4);
        clearInterval(timerup3);
    })
}

    function que4() {

    var timerup4 = setInterval(function(){
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Times up!');
        $('#correct-answer').text(ques4.a2);
        noa++;
        clearInterval(timerup4);
    },5000);

    $('.result').hide();
    $('.que-div').show();
    $('#question').text(ques4.q);
    $('#answer1').text(ques4.a1);
    $('#answer2').text(ques4.a2);
    $('#answer3').text(ques4.a3);
    $('#answer4').text(ques4.a4);
    $('#answer2').on('click', function(){
        right++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Correct!');
        $('#correct-answer').text(ques4.a2);
        clearInterval(timerup4);
    })
    $('#answer1').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques4.a2);
        clearInterval(timerup4);
    })
    $('#answer4').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques4.a2);
        clearInterval(timerup4);
    })
    $('#answer3').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques4.a2);
        clearInterval(timerup4);
    })
}

    function final(){
        $('.que-div').hide();
        $('.result').show();
        $('#title').text("Let's see how you did...");
        $('.final-hide').hide();
        $('#correct-answer').text('No answer: ' + noa);
    };

$(document).ready(function() {


    $('.que-div').hide();
    $('.result').hide();

    $('.btn').on('click', function(){
        que1();
        setTimeout(que2, 10000);
        setTimeout(que3, 20000);
        setTimeout(que4, 30000);
        setTimeout(final,40000);
    })
});


