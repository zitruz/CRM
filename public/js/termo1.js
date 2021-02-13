anychart.onDocumentReady(function () {
    
    // create data
    var data = [3208303.81];
    
    // set the gauge type
    var gauge = anychart.gauges.thermometer();

    // set the data for the gauge
    gauge.data(data);

    // set the title of the gauge
    gauge.title((3208303.81).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));

    // add a thermometer pointer
    gauge.addPointer(0);

    // use the primary scale a Fahrenheit scale
    var fScale = gauge.scale();

    // set the minimum and maximum values of the Fahrenheit scale
    fScale.minimum(0);
    fScale.maximum((11786303.81));
    
    // set the intervals of major and minor ticks on the Fahrenheit scale
    fScale.ticks().interval(10);
    fScale.minorTicks().interval(2);    

    // add an axis on the left side of the gauge
    var axisLeft = gauge.axis(0);

    // configure minor ticks on the left axis
    axisLeft.minorTicks(true)
    axisLeft.minorTicks().stroke('#cecece');

    // set the width of the left axis
    axisLeft.width('0');

    // set the offset of the left axis (as a percentage of the gauge width)
    axisLeft.offset('-0.18%');

    // bind the left axis to the Fahrenheit scale
    axisLeft.scale(fScale);

    // configure a Celsius scale
    var cScale = anychart.scales.linear();
    cScale.minimum(0);
    cScale.maximum(11786303.81);
    cScale.ticks().interval(10);
    cScale.minorTicks().interval(1);

    // configure an axis on the right side of the gauge
    var axisRight = gauge.axis(1);
    axisRight.minorTicks(true);
    axisRight.minorTicks().stroke('#cecece');
    axisRight.width('0');
    axisRight.offset('3.15%');
    axisRight.orientation('right');

    // bind the right axis to the Celsius scale
    axisRight.scale(cScale);

    // set the container id
    gauge.container('containertermo');

    // initiate drawing the gauge
    gauge.draw();
});