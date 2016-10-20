/**
 * Created by nghiepnds on 10/18/2016.
 */

(function(){

    //drawDiv();
    //drawSVG();
    //drawBarChart();
    //drawBarChartWithScale();
    drawStandBar();

    //Bar chart with label, color range, scaling, axis
    function drawStandBar(){
        //var ydata = [23, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
        //var xdata =     ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"];

        var ydata = [23, 10, 13, 19, 21];
        var xdata = ["A", "B", "C", "D", "E"];

        var margin = {top: 40, right: 20, bottom: 30, left: 40},
            width = 600 - margin.left - margin.right,    //900
            height = 270 - margin.top - margin.bottom;   //430

        var barLeftPadding = 15;                //distance from y-axis to the first bar
        var bWidth = width /xdata.length;       //bar width
        var bGap = 2;                           //distance among bars
        var bar2AxisGap = -2;                   //distance from x-axis to the bottom of bar
        var xAxisX = 0;                         //x-position of xAxis

        //Scaling
        //Because each bar get one extra pixel to make it seperate, we must scale
        //xvalues over a bigger range n(bar) * 1 = xdata.length
        var xScale = d3.scale.ordinal()
            .rangeRoundBands([xAxisX, width + xdata.length + bGap], 0.1);

        var yScale = d3.scale.linear()
            .range([height, 0]);

        var xAxis = d3.svg.axis()
            .scale(xScale)
            .orient("bottom");

        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

        xScale.domain(xdata.map(function(d) { return d;}));
        yScale.domain([0, d3.max(ydata, function(d) { return d; })]);

        //Add SVG object
        var svg = d3.select("body").append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //Add bar
        svg.selectAll("rect")
            .data(ydata)
            .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d, i) { return i*bWidth + barLeftPadding})
            .attr("width", xScale.rangeBand() + bGap)
            .attr("y", function(d) { return yScale(d) + bar2AxisGap; })
            .attr("height", function(d) { return height - yScale(d); })
            .attr("fill", function (d) {
                return "rgb(5, 134, " + (d * 10) + ")";
            });

        //Add text for bar, must after bar so that it can be on top
        svg.selectAll("text")
            .data(ydata)
            .enter()
            .append("text")
            .text(function(d) {return d;})
            .attr("x", function (d, i) {
                var textWidth = this.getComputedTextLength();       //get text box length
                var textLeftPad =  (bWidth - textWidth)/2;          //text padding
                return i * (bWidth) + textLeftPad + barLeftPadding; //x-position of text
            })
            .attr("y", function (d) {return (yScale(d) + 15);})
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white");

        //Add x-axis
        svg.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height  + ")")
            .call(xAxis).append("text")
            .attr("transform", "rotate(0)")
            .attr("y", 25)
            .attr("x", width + 15)
            .attr("dy", dy)
            .style("text-anchor", "end")
            .text("Option");


        //Add y-axis
        var dy = "-3me";                //position of "Frequency" from the y-axis, small-left : big-right
        svg.append("g")
            .attr("class", "y axis")
            .call(yAxis)
            .append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 10)
            .attr("dy", dy)
            .style("text-anchor", "end")
            .text("Frequency");
    }

    function drawBarChartWithScale() {
        //var dataset = [ 5, 10, 15, 20, 25 ];
        var dataset = [23, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
        var data =     ["A", "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U"];
        var outerW = 600;
        var outerH = 250;
        var barPadding = 1;

        var formatPercent = d3.format(".0%");

        //Margin definition
        var margin = {top: 20, right: 10, bottom: 20, left: 30};
        var width  = outerW   - margin.left - margin.right,    //600-10-30
            height = outerH - margin.top  - margin.bottom;   //250-20-20

        var barWidth = width / dataset.length - barPadding;
        var maxVal = d3.max(dataset, function(d) { return d; });
        var axisHeight = 17;

        //Scales
        var xScale = d3.scale.ordinal()
            .rangeRoundBands([0, width], .1)
            .domain(data.map(function(d) {
                return d;
            }));

        var yScale = d3.scale.linear()
            .domain([0, maxVal])
            .range([height,0]);

        //The axis is created using the d3.svg.axis() function,
        var xAxis = d3.svg.axis()
            .scale(xScale)
            //tick text is below the line
            .orient("bottom");

        //Define Y axis
        var yAxis = d3.svg.axis()
            .scale(yScale)
            .orient("left");

        //Create SVG area
        var svg = d3.select("body")
            .append("svg")
            .attr("width", outerW)
            .attr("height",outerH)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        var scaleCons = 4;
        //Add bars
        var rects = svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function (d, i) {
                //return xScale(d);
                return i * (width / dataset.length);
            })
            .attr("width", (barWidth))
            .attr("y", function (d) {
                return (height - (4*d));
            })
            .attr("height", function (d) {
                //bar length d, equally extend it 3d: -->4d
                //axis is at the bottom so must reduce the bar length
                //reduce more 3 so that the axis is separated from the bar
                return ((4*d) -  3);
            })
            .attr("fill", function (d) {
                return "rgb(5, 134, " + (d * 10) + ")";
            });

        //Add text value to chart
        var textTopPad = 1;
        var texts = svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(function (d) {
                return d;
            })
            .attr("x", function (d, i) {
                var textWidth = this.getComputedTextLength();       //get text box length
                var textLeftPad =  (barWidth - textWidth)/2;        //text padding
                return i * (width/dataset.length) + textLeftPad;      //x-position of text
            })
            .attr("y", function (d) {
                //h-d is the actual length of the bar, extend it 3d,  --> h-4d
                //increase y (15 pixels)so the text is inside the bar
                return (height - (4*d) + 15);
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white");

        //Add x-axis to the chart
        svg.append("g")
            .attr("class", "x axis")
            //push axis from 0 to the bottom by increasing y: new position y = h- textTopPad - axisHeight
            .attr("transform", "translate(0," + height + ")")
            .call(xAxis);

        //Create Y axis
        svg.append("g")
            .attr("class", "y axis")
            //push y-axis to left
            .attr("transform", "translate(0, 0)")
            .call(yAxis);


        /*
         SVG transforms are quite powerful, and can accept several different kinds of
         transform definitions, including scales and rotations. But we are keeping it
         simple here with only a translation transform,
         which simply pushes the whole g group over and down by some amount.
        * */
    }

    function drawBarChart() {
        //var dataset = [ 5, 10, 15, 20, 25 ];
        var dataset = [23, 10, 13, 19, 21, 25, 22, 18, 15, 13, 11, 12, 15, 20, 18, 17, 16, 18, 23, 25];
        var w = 500;
        var h = 150;
        var barPadding = 1;
        var barWidth = w / dataset.length - barPadding;
        //Create SVG area
        var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);

        //Add bars
        var rects = svg.selectAll("rect")
            .data(dataset)
            .enter()
            .append("rect")
            .attr("x", function (d, i) {
                return i * (w / dataset.length);
            })
            .attr("y", function (d) {
                return (h - 4 * d);
            })
            .attr("width", barWidth)
            .attr("height", function (d) {
                return (4 * d);
            })
            .attr("fill", function (d) {
                return "rgb(5, 134, " + (d * 10) + ")";
            });

        //Add text to chart
        var textTopPad = 1;
        var texts = svg.selectAll("text")
            .data(dataset)
            .enter()
            .append("text")
            .text(function (d) {
                return d;
            })
            .attr("x", function (d, i) {
                var textWidth = this.getComputedTextLength();       //get text box length
                var textLeftPad =  (barWidth - textWidth)/2;        //text padding
                return i * (w / dataset.length) + textLeftPad;      //x-position of text
            })
            .attr("y", function (d) {
                return h - (d * 4) + 15;
            })
            .attr("font-family", "sans-serif")
            .attr("font-size", "11px")
            .attr("fill", "white")
    }

    function drawDiv(){
        var dataset = []; //Initialize empty array
        for (var i = 0; i < 25; i++) { //Loop 25 times
            var newNumber = Math.random() * 30; //New random number (0-30)
            dataset.push(newNumber); //Add new number to array
        }

        //Draw DIV
        d3.select("body").selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "bar")
            .style("height", function(d) {
                var barHeight = d * 5; //Scale up by factor of 5
                return barHeight + "px";
            });

    }

    function drawSVG(){
        //Draw SVG
        var w = 500;
        var h = 100;
        var data = [ 5, 10, 15, 20, 25 ];
        var svg = d3.select("body")
            .append("svg")
            .attr("width", w)
            .attr("height", h);
        //add circles to SVG
        var circles = svg.selectAll("circle")
            .data(data)
            .enter()
            .append("circle");
        //set attr for circles
        circles.attr("cx", function(d, i) {
            return (i * 50) + 25;           //x-position of the center
        })
            .attr("cy", h/2)                //y-position of the center
            .attr("r", function(d) {
                return d;                   //radius of the circle
            })
            .attr("fill", "yellow")         //fill color
            .attr("stroke", "orange")       //color of boundary
            .attr("stroke-width", function(d) {
                return d/2;                 //width of the boundary
            });
    }



}());
