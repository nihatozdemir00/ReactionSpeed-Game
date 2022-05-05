$(function()
{
    //Count down from 3 to 1 and showing game page.
    var timeleft = 3;
    var Timer = setInterval(function(){
    timeleft--;
    document.getElementById("countdown").textContent = timeleft;
    if(timeleft <= 0){
        $("#countdown").css("display","none");
        $(document.body).css("background-color", "white");
        $(".game").css("display","flex");
        $("#first").fadeIn(1000).delay(500).fadeOut(1000);
        clearInterval(Timer);
    }},1000);

   //Times goes down 10 to 0 and showing "time is up" prompt.
    var timeleft1 = 13;
    var Timer1 = setInterval(function(){
    timeleft1--;
    document.getElementById("time").textContent = timeleft1;
    if(timeleft1 <= 0){
        $("#timeup").css("display", "flex");
        clearInterval(Timer1);
    }},1000);

    //3 randomly placed black tile 
    var num1; 
    var num2;
    var num3;

    num1 = Math.floor(Math.random() * 16);
    do{ num2 = Math.floor(Math.random() * 16)}while(num2 ===num1)
    do{ num3 = Math.floor(Math.random() * 16)}while(num3===num1 && num3 ===num1)

    var posOfBlack = [];
    posOfBlack = [num1,num2,num3];

    $("td").eq(num1).css("background", "black").addClass("B");
    $("td").eq(num2).css("background", "black").addClass("B");
    $("td").eq(num3).css("background", "black").addClass("B");

    
    $("td").click(function(){

        if($(this).hasClass("B") && timeleft1 !=0){

            //Point bar shrinks during one second.
            var pointBarTimer = 1;
            var pointBarWidth = 250;
            pointBarTimer = setInterval(function(){
            pointBarTimer--;
            if(pointBarWidth >= 5){
            pointBarWidth -= 5;}
            $("#pointBar2").css({"width": pointBarWidth});
            }, 20);

            //Calculating and showing score per click according to point bar && Updating Score 
            let  score = parseInt($("#score").text());
            let clickScore = 10-(10 - Math.floor(parseInt($("#pointBar2").css("width")) / 25));
            $(this).html(`<p class='clickScores'>+${clickScore}</p>`);
            $(this).css("color", "green");
            $(this).css("font-size", "30px");
            $(".clickScores").fadeOut(400);
            score += clickScore;
            $("#score").text(score);

            //Changing location of the clicked tile
            $(this).css("background", "white").removeClass("B");
            posOfBlack.pop($(this));
            do{num4 = Math.floor(Math.random() * 16);}while(num4 === posOfBlack[0] && num4 === posOfBlack[1] && num4 === posOfBlack[2])
            $("td").eq(num4).css("background", "black").addClass("B");
            posOfBlack.push(num4);
        }
    });
})

   
       

   
    


