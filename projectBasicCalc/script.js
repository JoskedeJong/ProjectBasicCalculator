
$(document).ready(function(event) {

    $(".buttonOne").click(function(){
        $(".calcField").text( $(".calcField").text() +'1' );
    });

    $(".buttonTwo").click(function(){
        $(".calcField").text( $(".calcField").text() +'2' );
    });

    $(".buttonThree").click(function(){
        $(".calcField").text( $(".calcField").text() +'3' );
    });

    $(".buttonFour").click(function(){
        $(".calcField").text( $(".calcField").text() +'4' );
    });

    $(".buttonFive").click(function(){
        $(".calcField").text( $(".calcField").text() +'5' );
    });

    $(".buttonSix").click(function(){
        $(".calcField").text( $(".calcField").text() +'6' );
    });

    $(".buttonSeven").click(function(){
        $(".calcField").text( $(".calcField").text() +'7' );
    });

    $(".buttonEight").click(function(){
        $(".calcField").text( $(".calcField").text() +'8' );
    });

    $(".buttonNine").click(function(){
        $(".calcField").text( $(".calcField").text() +'9' );
    });

    $(".buttonPlus").click(function(){
        $(".calcField").text( $(".calcField").text() +'+' );
    });

    $(".buttonMinus").click(function(){
        $(".calcField").text( $(".calcField").text() +'-' );
    });

    $(".buttonMultiply").click(function(){
        $(".calcField").text( $(".calcField").text() +'*' );
    });

    $(".buttonDivide").click(function(){
        $(".calcField").text( $(".calcField").text() +'/' );
    });

    $(".buttonGraph").click(function(){
        var f = !$(this).data("toggleLeft");
        if (f) {
            $(".graphField").addClass("inView");
        }
        else {
            $(".graphField").removeClass("inView");
        }
        $(this).data("toggleLeft", f);
    });

    $(".buttonClear").click(function(){
        $(".calcField").text("");
    });

    $(".buttonEquals").click(function(){
        var calc = $(".calcField").text(); 
        console.log(result);
        var result = eval (calc); 
        $(".calcField").text(result)
    });
});


    