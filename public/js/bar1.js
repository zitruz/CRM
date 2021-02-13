anychart.onDocumentReady(function () {
    var datosTEle = {
        titulo: "telefonica",
        sumamontoOrden: 11692267.98,
        sumaCogsReal: 3208303.81,
        sumatotalcotpesos: 21036662.6,
        sumaCogsEsperado: 11786303.81
    }
    var data = anychart.data.set([
        ["PROSA", 0, 0],
        ["GTAC", 0, 0],
        ["AT&T", 0, 0],
        ["Telefónica", datosTEle.sumamontoOrden - datosTEle.sumaCogsReal, datosTEle.sumatotalcotpesos - datosTEle.sumaCogsEsperado],
        ["NAVI", 0, 0],
        ["NISSAN ", 0, 0],
    ]);
    var formatter = "{%seriesName}: {%value}{groupsSeparator:\\,}";
    var seriesData_1 = data.mapAs({ x: 0, value: 1 });
    var seriesData_2 = data.mapAs({ x: 0, value: 2 });


    var chart = anychart.column();

    var setupSeries = function (series, name) {
        series.name(name).stroke('2 #fff 1');
        series.hovered().stroke('2 #fff 1');
    };

    // create the first series, set the data and name
    var series1 = chart.column(seriesData_1);
    series1.color("orange");
    var columnTooltip = series1.tooltip();
    columnTooltip.format(formatter);
    setupSeries(series1, 'Grossmargin Real');


    // create the second series, set the data and name
    var series2 = chart.column(seriesData_2);
    setupSeries(series2, 'Grossmargin Esperado');
    var columnTooltip2 = series2.tooltip();
    columnTooltip2.format(formatter);

    chart.interactivity().hoverMode('by-x');

    chart.tooltip().titleFormat('{%X}').displayMode('union');
    chart.legend().enabled(true).fontSize(13);
    // set the padding between columns
    chart.barsPadding(-0.5);

    // set the padding between column groups
    chart.barGroupsPadding(2);

    // set the chart title
    chart.title("Grossmargin");

    // set the titles of the axes
    chart.xAxis().title("Client");

    chart.yAxis().title("Grossmargin, $");
    chart.yAxis()
    .labels()
    .format(function () {
      return '$' + formatMoney(parseInt(this.value), 0, '.', ',');
    });

    function formatMoney(value, c, d, t) {
        var n = value;
        c = isNaN(Math.abs(c)) ? 2 : Math.abs(c);
        d = d === undefined ? '.' : d;
        t = t === undefined ? ',' : t;
        var s = n < 0 ? '-' : '';
        var i = parseInt((n = Math.abs(+n || 0).toFixed(c))) + '';
        var j = i.length > 3 ? i.length % 3 : 0;
        return (
          s +
          (j ? i.substr(0, j) + t : '') +
          i.substr(j).replace(/(\d{3})(?=\d)/g, '$1' + t) +
          (c
            ? d +
            Math.abs(n - i)
              .toFixed(c)
              .slice(2)
            : '')
        );
      }
    // set the container id
    chart.container("containerbar1");

    // initiate drawing the chart
    chart.draw();
});