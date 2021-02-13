anychart.onDocumentReady(function () {
  var datosTEle = {
    titulo: "alexei",
    sumamontoOrden: 11692267.98,
    sumaCogsReal: 3208303.81,
    sumatotalcotpesos: 21036662.6,
    sumaCogsEsperado: 11786303.81
  }
  var data = anychart.data.set([
    ["Alex", 0, 0],
    ["Alexei", datosTEle.sumamontoOrden - datosTEle.sumaCogsReal, datosTEle.sumatotalcotpesos - datosTEle.sumaCogsEsperado],
    ["Julio", 0, 0],
    ["laura", 0, 0],
  ]);
  var formatter = "{%seriesName}: {%value}{groupsSeparator:\\,}";
  var seriesData_1 = data.mapAs({ x: 0, value: 1 });
  var seriesData_2 = data.mapAs({ x: 0, value: 2 });

  // create a chart
  var chart = anychart.bar();

  // create the first series, set the data and name
  var series1 = chart.bar(seriesData_1);
  series1.name("Grossmargin real");
  series1.color("orange")
  var columnTooltip = series1.tooltip();
  columnTooltip.format(formatter);

  // create the second series, set the data and name
  var series2 = chart.bar(seriesData_2);
  series2.name("Grossmargin esperado");
  var columnTooltip = series2.tooltip();
  columnTooltip.format(formatter);

  chart.tooltip().titleFormat('{%X}').displayMode('union');
  chart.legend().enabled(true).fontSize(13);
  // set the padding between bars
  chart.barsPadding(-0.5);

  // set the padding between bar groups
  chart.barGroupsPadding(2);

  // set the chart title
  chart.title("Grossmargin");

  // set the titles of the axes
  chart.xAxis().title("Sales man");
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
  chart.container("containerbar2");

  // initiate drawing the chart
  chart.draw();
});