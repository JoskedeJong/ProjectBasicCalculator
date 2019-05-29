
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

    $(".buttonZero").click(function(){
        $(".calcField").text( $(".calcField").text() +'0' );
    });

/*-------------------------------------------------------------------- Graph Manipulators -------------------------------------------------------------------------------- */

    $(".buttonGOne").click(function(){
        $(".calcField").text( $(".calcField").text() +'x' );
    });

    // $(".buttonGTwo").click(function(){
    //     $(".calcField").text( $(".calcField").text() +'y' );
    // });

    // $(".buttonGThree").click(function(){
    //     $(".calcField").text( $(".calcField").text() +'(' );
    // });

    // $(".buttonGFour").click(function(){
    //     $(".calcField").text( $(".calcField").text() +')' );
    // });

    $(".buttonGTwo").click(function(){ plotChart(); })
/*-------------------------------------------------------------------- Main Manipulators -------------------------------------------------------------------------------- */

    $(".buttonDot").click(function(){
        $(".calcField").text( $(".calcField").text() +'.' );
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



/*-------------------------------------------------------------------- Data creation function ----------------------------------------------------------------------------- */

    function plotChart(){
        var entryFormula = $(".calcField").text();
        console.log(entryFormula);  

        myChart.data.datasets[0].data = [];

        for (x=-2; x<9; x++){                                       // creates new input data
            ydata = eval (entryFormula);
            myChart.data.datasets[0].data.push({
                x: x,
                y: ydata
              });
        }
        myChart.update();   
        console.log(myChart.data.datasets[0].data);
    }

/*-------------------------------------------------------------------- Chart Data --------------------------------------------------------------------------------------- */

    var ctx = document.getElementById('myChart');
    var myChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: ["plotted Graph"],
                data: [],
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
                xAxes: [{
                    type: 'linear',
                    position: 'bottom',
                    ticks: {
                        min: -1,
                        max: 8,
                        stepSize: 1,
                        fixedStepSize: 1,
                    }
                }],
                yAxes: [{
                    ticks: {
                        min: -2,
                        max: 4,
                        stepSize: 1,
                        fixedStepSize: 1,
                    }
                }]
            }
            
        }
    });


    function removeData(chart) {
        console.log("the data has been removed");
        chart.data.labels.pop();
        chart.data.datasets.forEach((dataset) => {
            dataset.data.pop();
        });
        chart.update();
    }

    function addData(chart, label, data) {
        console.log(chart, label, data);
        chart.data.labels.push(label);
        chart.data.datasets.forEach((dataset) => {
            dataset.data.push(data);
        });
        chart.update();
        console.log("The graph should be updated with the following data: "+data);
    }
});