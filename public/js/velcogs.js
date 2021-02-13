var opts = {
    angle: -0.2, // The span of the gauge arc
    lineWidth: 0.2, // The line thickness
    radiusScale: 1,
    lines: 12,
    staticLabels: {
        font: "15px sans-serif",  // Specifies font
        labels: [0,10,20,30,40,50,60,70,80,90,100],  // Print labels at these values
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
        { strokeStyle: "#30B32D", min: 0, max: 20 }, 
        { strokeStyle: "#F03E3E ", min: 20, max: 100 }, 
        
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
var target2 = document.getElementById('cantidadVel3');
target2.innerHTML = "27.43953368%"
var target = document.getElementById('velCogs');
var gauge = new Gauge(target).setOptions(opts);
gauge.maxValue = 100;
gauge.animationSpeed = 32;
gauge.set(27.43953368);