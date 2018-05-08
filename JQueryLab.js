$(".form").hide();

$("#close").on("click", () => {
    $(".form").hide();
    $("span").detach();
})
// $(document).ready(function(){
//     $("p").click(alertMe);
//     $("button").click(function(){
//         $("p").unbind("click", alertMe);
//     });
// });


$(".buttons").on("click", () => {
    $(".form").hide().delay(0).fadeIn(1000);
})

$("#btn1").click(function() {
    $("<span> 1</span>").appendTo("p");
    // $(document).ready(function(close){
    //     document.getElementById("close").addEventListener("click", function(close){
    //         $(".form").hide();
    //         $("span").detach();
    //         $("#submit").off("click", submit1)
    //     });
    // });
        $("#submit").click(function(submit1){
        $("#btn1").css("background-color", "black");
        $("#btn1").css("color", "white");
        $(".form").hide();
        $("span").detach();
        document.getElementById("btn1").disabled = true;
    });
});
$("#btn2").click(function(){
    $("<span> 2</span>").appendTo("p");
    // $(document).ready(function(close){
    // document.getElementById("close").addEventListener("click", function(close){
    //     $(".form").hide();
    //     $("span").detach();
    //     $("#submit").off("click", submit2)
    // });
    $("#submit").click(function(submit2){
        $("#btn2").css("background-color", "black");
        $("#btn2").css("color", "white");
        $(".form").hide();
        $("span").detach();
        document.getElementById("btn2").disabled = true;
    });
});
$("#btn3").click(function(){
    $("<span> 3</span>").appendTo("p");
    $("#submit").click(function(){
        $("#btn3").css("background-color", "black");
        $("#btn3").css("color", "white");
        $(".form").hide();
        $("span").detach();
        document.getElementById("btn3").disabled = true;
    });
});
$("#btn4").click(function(){
    $("<span> 4</span>").appendTo("p");
    $("#submit").click(function(){
        $("#btn4").css("background-color", "black");
        $("#btn4").css("color", "white");
        $(".form").hide();
        $("span").detach();
        document.getElementById("btn4").disabled = true;
    });
});
$("#btn5").click(function(){
    $("<span> 5</span>").appendTo("p");
    $("#submit").click(function(){
        $("#btn5").css("background-color", "black");
        $("#btn5").css("color", "white");
        $(".form").hide();
        $("span").detach();
        document.getElementById("btn5").disabled = true;
    });
});
$("#btn6").click(function(){
    $("<span> 6</span>").appendTo("p");
    $("#submit").click(function(){
        $("#btn6").css("background-color", "black");
        $("#btn6").css("color", "white");
        $(".form").hide();
        $("span").detach();
        document.getElementById("btn6").disabled = true;
    });
});
$("#btn7").click(function(){
    $("<span> 7</span>").appendTo("p");
    $("#submit").click(function(){
        $("#btn7").css("background-color", "black");
        $("#btn7").css("color", "white");
        $(".form").hide();
        $("span").detach();
        document.getElementById("btn7").disabled = true;
    });
});
$("#btn8").click(function(){
    $("<span> 8</span>").appendTo("p");
    $("#submit").click(function(){
        $("#btn8").css("background-color", "black");
        $("#btn8").css("color", "white");
        $(".form").hide();
        $("span").detach();
        document.getElementById("btn8").disabled = true;
    });
    
});
$("#btn9").click(function(){
    $("<span> 9</span>").appendTo("p");
    $("#submit").click(function(){
        $("#btn9").css("background-color", "black");
        $("#btn9").css("color", "white");
        $(".form").hide();
        $("span").detach();
        document.getElementById("btn9").disabled = true;
    });
});
