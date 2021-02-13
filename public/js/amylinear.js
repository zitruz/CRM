am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    
    
    var container = am4core.create("chartdiv", am4core.Container);
    container.width = am4core.percent(100);
    container.height = am4core.percent(100);
    container.layout = "vertical";
    
    createBulletChart(container, "solid");

    /* Create ranges */
    function createRange(axis, from, to, color) {
      var range = axis.axisRanges.create();
      range.value = from;
      range.endValue = to;
      range.axisFill.fill = color;
      range.axisFill.fillOpacity = 0.8;
      range.label.disabled = true;
      range.grid.disabled = true;
    }
    
    /* Create bullet chart with specified color type for background */
    function createBulletChart(parent, colorType) {
      var colors = ["#19d228", "#b4dd1e", "#f4fb16", "#f6d32b", "#fb7116"];
    
      /* Create chart instance */
      var chart = container.createChild(am4charts.XYChart);
      chart.paddingRight = 25;
    
      /* Add data */
      chart.data = [{
        "category": "Evaluation",
        "value": 65,
        "target": 78
      }];
    
      /* Create axes */
      var categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      categoryAxis.dataFields.category = "category";
      categoryAxis.renderer.minGridDistance = 10;
      categoryAxis.renderer.grid.template.disabled = true;
    
      var valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.minGridDistance = 30;
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.min = 0;
      valueAxis.max = 100;
      valueAxis.strictMinMax = true;
      valueAxis.numberFormatter.numberFormat = "#'%'";
      valueAxis.renderer.baseGrid.disabled = true;
    
      /* 
        In order to create separate background colors for each range of values, 
        you have to create multiple axisRange objects each with their own fill color 
      */
      if (colorType === "solid") {
        var start = 0, end = 20;
        for (var i = 0; i < 5; ++i) {
          createRange(valueAxis, start, end, am4core.color(colors[i]));
          start += 20;
          end += 20;
        }
      }
      /*
        In order to create a gradient background, only one axisRange object is needed
        and a gradient object can be assigned to the axisRange's fill property. 
      */
      
    
      /* Create series */
      var series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueX = "value";
      series.dataFields.categoryY = "category";
      series.columns.template.fill = am4core.color("#000");
      series.columns.template.stroke = am4core.color("#fff");
      series.columns.template.strokeWidth = 1;
      series.columns.template.strokeOpacity = 0.5;
      series.columns.template.height = am4core.percent(25);
      series.tooltipText = "{value}"
    

     
    
      chart.cursor = new am4charts.XYCursor()
      chart.cursor.lineX.disabled = true;
      chart.cursor.lineY.disabled = true;
    
      valueAxis.cursorTooltipEnabled = false;
      chart.arrangeTooltips = false;
    }
    
    }); // end am4core.ready()