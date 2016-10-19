/**
 * Created by nghiepnds on 10/18/2016.
 */

(function(){

    drawDiv();
    drawSVG();
    drawBarChart();

    function drawScatter(){

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
                return h - (d * 4)-textTopPad;
            });

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
