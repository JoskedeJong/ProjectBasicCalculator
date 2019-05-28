
$(document).ready(function(event) {

    /*-------------------------------------------------------------------- Numbers 1-9 -------------------------------------------------------------------------------- */


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

/*-------------------------------------------------------------------- Graph Manipulators -------------------------------------------------------------------------------- */

$(".buttonGOne").click(function(){
    $(".calcField").text( $(".calcField").text() +'x' );
});

$(".buttonGTwo").click(function(){
    $(".calcField").text( $(".calcField").text() +'y' );
});

/*-------------------------------------------------------------------- Main Manipulators -------------------------------------------------------------------------------- */

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

    $(".buttonClear").click(function(){
        $(".calcField").text("");
    });

    $(".buttonEquals").click(function(){
        var calc = $(".calcField").text(); 
        console.log(result);
        var result = eval (calc); 
        $(".calcField").text(result)
    });

/*-------------------------------------------------------------------- Field toggles --------------------------------------------------------------------------------------- */

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

});

/*-------------------------------------------------------------------- Chart Data --------------------------------------------------------------------------------------- */

var ctx = document.getElementById('myChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

    