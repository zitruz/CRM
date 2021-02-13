anychart.onDocumentReady(function () {

    // create data
    var data = [
      {x: "Leads in Funnel", value: 11},
      {x: "Opportunities in Funnel", value: 2},
      {x: "Number of Sold Projects", value: 5},
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
    chart.title("Total: 18");

    // set the container id
    chart.container("containerpai4");

    // initiate drawing the chart
    chart.draw();
});