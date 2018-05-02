

var right = 0;
var wrong = 0;
var noa = 0;

var ques1 = {
    q: "What is back clipping ?",
    a1: "Clipping the quickdraw upside down.",
    a2: "Attaching the rope to your harness with a figue 8 knot.",
    a3: "Clipping the rope through the quickdraw away from you.",
    a4: "Leaving your quickdraws at home"
}
var ques2 = {
    q: "Why do you flake out the rope before climbing ?",
    a1: "To check for knots and to make sure you belay from the right side.",
    a2: "Just to check for knots.",
    a3: "To check for any animal bite marks.",
    a4: "So you dont belay from the wrong end of the rope."
}
var ques3 = {
    q: "question 3?",
    a1: "To check for knots and to make sure you belay from the right side.",
    a2: "Just to check for knots.",
    a3: "To check for any animal bite marks.",
    a4: "right."
}
var ques4 = {
    q: "Why do you climb?",
    a1: "kfijs fowje fow efo weofj owefowefo weopif wefo wef.",
    a2: "right.",
    a3: "Toj wefoj woj fow jefojw efjfojowuef wojfowiefowjef.",
    a4: "So you dont belay from the wrong end of the rope."
}

function que1() {
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
        stop();
    })
    $('#answer1').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques1.a3);
        stop();
    })
    $('#answer2').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques1.a3);
        stop();
    })
    $('#answer4').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques1.a3);
        stop();
    })
}

    function que2() {
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
        stop();
    })
    $('#answer3').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques2.a1);
        stop();
    })
    $('#answer2').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques2.a1);
        stop();
    })
    $('#answer4').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques2.a1);
        stop();
    })
}

    function que3() {
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
        stop();
    })
    $('#answer1').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques3.a4);
        stop();
    })
    $('#answer2').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques3.a4);
        stop();
    })
    $('#answer3').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques3.a4);
        stop();
    })
}

    function que4() {
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
        stop();
    })
    $('#answer1').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques4.a2);
        stop();
    })
    $('#answer4').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques4.a2);
        stop();
    })
    $('#answer3').on('click', function(){
        wrong++;
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Incorret!');
        $('#correct-answer').text(ques4.a2);
        stop();
    })
}

    function timesUp1(){
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Times up!');
        $('#correct-answer').text(ques1.a3);
        noa++;
    };
    function timesUp2(){
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Times up!');
        $('#correct-answer').text(ques2.a1);
        noa++;
    };
    function timesUp3(){
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Times up!');
        $('#correct-answer').text(ques3.a4);
        noa++;
    };
    function timesUp4(){
        $('.que-div').hide();
        $('.result').show();
        $('#title').text('Times up!');
        $('#correct-answer').text(ques4.a2);
        noa++;
    };
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
        setTimeout(timesUp1, 5000);
        setTimeout(que2, 10000);
        setTimeout(timesUp2, 15000);
        setTimeout(que3, 20000)
        setTimeout(timesUp3, 25000);
        setTimeout(que4,30000);
        setTimeout(timesUp4, 35000);
        setTimeout(final,40000);

    })
});


