anychart.onDocumentReady(function () {

    // create data
    var target2 = document.getElementById('cantidadlinear2');
    target2.innerHTML = "28%";
    var data = [28];

    // set the gauge type
    var gauge = anychart.gauges.linear();

    // set the data for the gauge
    gauge.data(data);

    // set the layout
    gauge.layout('horizontal');

    // create a color scale
    var scaleBarColorScale = anychart.scales.ordinalColor().ranges(
        [
            {
                from: 0,
                to: 50,
                color: ['#dd2c00']
            },
            {
                from: 50,
                to: 100,
                color: ['#16685d']
            },
        ]
    );

    var scaleBar = gauge.scaleBar(0);

    scaleBar.points([
        { height: 0, left: 1, right: 0 }
    ]);

    scaleBar.width('10%');
    scaleBar.offset('31%');

    scaleBar.colorScale(scaleBarColorScale);

    var marker = gauge.marker(0);
    marker.color('black');
    marker.width(5);
    marker.offset('32%');
    marker.type('triangle-up');
    marker.zIndex(10);

    var scale = gauge.scale();
    scale.minimum(0);
    scale.maximum(100);
    scale.ticks().interval(10);

    var axis = gauge.axis();
    axis.minorTicks(true)
    axis.minorTicks().stroke('#cecece');
    axis.width('1%');
    axis.offset('29.5%');
    axis.orientation('top');

    // format axis labels
    axis.labels().format('{%value}%');

    // set paddings
    gauge.padding([0, 50]);

    // set the container id
    gauge.container('containerlinear2');

    // initiate drawing the gauge
    gauge.draw();
});