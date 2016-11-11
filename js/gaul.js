var gauge1, gauge2, gauge3, gauge4, gauge5, gauge6;

function drawGaul(){

    var config1 = liquidFillGaugeDefaultSettings();
    config1.circleThickness = 0.05;
    config1.circleFillGap = 0.05;
    config1.circleColor = "#FF7777";
    config1.textColor = "#FF4444";
    config1.waveTextColor = "#FFAAAA";
    config1.waveColor = "#FFDDDD";
    config1.textVertPosition = 0.5;
    config1.waveAnimateTime = 1000;
    config1.waveHeight = 0.15;
    config1.waveAnimate = true;
    config1.waveOffset = 0.25;
    config1.valueCountUp = false;
    config1.displayPercent = false;
    gauge1 = loadLiquidFillGauge("fillgauge1", 55, config1);


    var config2 = liquidFillGaugeDefaultSettings();
    config2.circleThickness = 0.15;
    config2.circleColor = "#D4AB6A";
    config2.textColor = "#553300";
    config2.waveTextColor = "#805615";
    config2.waveColor = "#AA7D39";
    config2.circleFillGap = 0.05;
    config2.textVertPosition = 0.8;
    config2.waveAnimateTime = 2000;
    config2.waveHeight = 0.3;
    config2.waveCount = 1;
    gauge2= loadLiquidFillGauge("fillgauge2", 28, config2);


    var config3 = liquidFillGaugeDefaultSettings();
    config3.circleThickness = 0.15;
    config2.circleFillGap = 0.05;
    config3.textVertPosition = 0.8;
    config3.waveAnimateTime = 5000;
    config3.waveHeight = 0.15;
    config3.waveAnimate = false;
    config3.waveOffset = 0.25;
    config3.valueCountUp = false;
    config3.displayPercent = false;
    gauge3 = loadLiquidFillGauge("fillgauge3", 60.1, config3);


    var config4 = liquidFillGaugeDefaultSettings();
    config4.circleThickness = 0.3;
    config4.circleColor = "#808015";
    config4.textColor = "#555500";
    config4.waveTextColor = "#FFFFAA";
    config4.waveColor = "#AAAA39";
    config4.textVertPosition = 0.8;
    config4.waveAnimateTime = 1000;
    config4.waveHeight = 0.05;
    config4.waveAnimate = true;
    config4.waveRise = false;
    config4.waveHeightScaling = false;
    config4.waveOffset = 0.25;
    config4.textSize = 0.75;
    config4.waveCount = 3;
    gauge4 = loadLiquidFillGauge("fillgauge4", 50, config4);


    var config5 = liquidFillGaugeDefaultSettings();
    config5.circleThickness = 0.3;
    config5.circleColor = "#6DA398";
    config5.textColor = "#0E5144";
    config5.waveTextColor = "#6DA398";
    config5.waveColor = "#246D5F";
    config5.textVertPosition = 0.52;
    config5.waveAnimateTime = 5000;
    config5.waveHeight = 0;
    config5.waveAnimate = false;
    config5.waveCount = 2;
    config5.waveOffset = 0.25;
    config5.textSize = 1.2;
    config5.minValue = 30;
    config5.maxValue = 150;
    config5.displayPercent = false;
    gauge5 = loadLiquidFillGauge("fillgauge5", 60.44);

    gauge6 = loadLiquidFillGauge("fillgauge6", 80);
}

function NewValue(){
    if(Math.random() > .5){
        return Math.round(Math.random()*100);
    } else {
        return (Math.random()*100).toFixed(1);
    }
}
