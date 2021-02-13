var datosTEle = {
    titulo: "grossmargin",
    sumamontoOrden: 11692267.98,
    sumaCogsReal: 3208303.81,
    sumatotalcotpesos: 21036662.6,
    sumaCogsEsperado: 11786303.81
}
var totalordenes = datosTEle.sumatotalcotpesos - datosTEle.sumaCogsEsperado
var cuarentapor = totalordenes * .40;
var noventantapor = totalordenes * .90;
var opts = {
    angle: -0.2, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 1,
    lines: 12,
    staticLabels: {
        font: "15px sans-serif",  // Specifies font
        labels: [0, totalordenes],  // Print labels at these values
        color: "#000000",  // Optional: Label text color
        fractionDigits: 0  // Optional: Numerical precision. 0=round off.
    },
    pointer: {
        length: 0.6, // // Relative to gauge radius
        strokeWidth: 0.035, // The thickness
        color: '#000000' // Fill color
    },
    limitMax: false,     // If false, max value increases automatically if vale > maxValue
    limitMin: false,     // If true, the min value of the gauge will be fixed
    colorStart: '#6FADCF',   // Colors
    colorStop: '#8FC0DA',    // just experiment with them
    strokeColor: '#E0E0E0',  // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true,
    staticZones: [
        { strokeStyle: "#F03E3E", min: 0, max: cuarentapor }, 
        { strokeStyle: "#FFDD00", min: cuarentapor, max: noventantapor }, 
        { strokeStyle: "#30B32D", min: noventantapor, max: totalordenes }, 
        // Red
    ],
    

    renderTicks: {
        divisions: 5,
        divWidth: 1.1,
        divLength: 0.7,
        divColor: '#333333',
        subDivisions: 3,
        subLength: 0.5,
        subWidth: 0.6,
        subColor: '#666666'
    }

};
var target2 = document.getElementById('cantidadVel2');
target2.innerHTML = (datosTEle.sumamontoOrden - datosTEle.sumaCogsReal).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
var target = document.getElementById('velgross');
var gauge = new Gauge(target).setOptions(opts);
gauge.maxValue = datosTEle.sumatotalcotpesos - datosTEle.sumaCogsEsperado;
gauge.animationSpeed = 32;
gauge.set(datosTEle.sumamontoOrden - datosTEle.sumaCogsReal);