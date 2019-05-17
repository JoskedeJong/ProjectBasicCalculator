
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

    $(".buttonPlus").click(function(){
        $(".calcField").text( $(".calcField").text() +'+' );
    });

    $(".buttonMinus").click(function(){
        $(".calcField").text( $(".calcField").text() +'-' );
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


    