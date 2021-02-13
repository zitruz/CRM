anychart.onDocumentReady(function () {

    // create data
    var data = [2222];

    // set the gauge type
    var gauge = anychart.gauges.thermometer();

    // set the data for the gauge
    gauge.data(data);

    // set the title of the gauge
    gauge.title('');
    var scaleBarColorScale = anychart.scales.ordinalColor().ranges(
        [
            {
                from: 0,
                to: 17000,
                color: ['#dd2c00']
            },
            {
                from: 17000,
                to: 22000,
                color: ['#16685d']
            },
        ]
    );
    var scaleBar = gauge.scaleBar(0);

    scaleBar.points([
        { height: 0, left: 0, right: 0 }
    ]);
    scaleBar.width('3%');
    scaleBar.offset('0%');

    scaleBar.colorScale(scaleBarColorScale);
    // add a thermometer pointer
    //gauge.addPointer(0);
    var marker = gauge.marker(0);
    marker.color('black');
    marker.width(3);
    marker.offset('4%');
    marker.type('triangle-left');
    marker.zIndex(230);

    // use the primary scale a Fahrenheit scale
    var fScale = gauge.scale();

    // set the minimum and maximum values of the Fahrenheit scale
    fScale.minimum(0);
    fScale.maximum(21000);

    // set the intervals of major and minor ticks on the Fahrenheit scale
    fScale.ticks().interval(10);
    fScale.minorTicks().interval(5);

    // add an axis on the left side of the gauge
    var axisLeft = gauge.axis(0);

    // configure minor ticks on the left axis
    axisLeft.minorTicks(true)
    axisLeft.minorTicks().stroke('#000000');

    // set the width of the left axis
    axisLeft.width('0');

    // set the offset of the left axis (as a percentage of the gauge width)
    axisLeft.offset('-0.18%');

    // bind the left axis to the Fahrenheit scale
    axisLeft.scale(fScale);

    // configure a Celsius scale
    var cScale = anychart.scales.linear();
    cScale.minimum(0);
    cScale.maximum(21000);
    cScale.ticks().interval(10);
    cScale.minorTicks().interval(5);

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
    gauge.container('containerterm1');

    // initiate drawing the gauge
    gauge.draw();
});