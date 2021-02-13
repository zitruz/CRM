anychart.onDocumentReady(function () {

    // create data
    var data = [
      {x: "Zitruz", value: 0},
      {x: "INNDOT", value: 4},
      {x: "Brainware", value: 0},
      {x: "T3", value: 1},
    ];

    // create a chart and set the data
    var chart = anychart.pie(data);

    // configure outlines
    chart.normal().outline().enabled(true);
    chart.normal().outline().width("5%");
    chart.hovered().outline().width("10%");
    chart.selected().outline().width("3");
    chart.selected().outline().fill("#455a64");
    chart.selected().outline().stroke(null);
    chart.selected().outline().offset(2);

    // set the chart title
    chart.title("");

    // set the container id
    chart.container("containerpai2");

    // initiate drawing the chart
    chart.draw();
});