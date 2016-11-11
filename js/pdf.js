//Create SVG/Image for chart
function createSVG(){
    //Export the SVG into svgData
    var svg = document.querySelector( "svg" );
    var svgData = new XMLSerializer().serializeToString(svg);

    //Canvas to display the SGV
    var canvas = document.createElement( "canvas" );
    var ctx = canvas.getContext( "2d" );

    var img = document.createElement( "img" );
    console.log("SVG data:");
    console.log(svgData);


    //btoa = Encode a string in base-64
    img.setAttribute( "src", "data:image/svg+xml;base64," + btoa( svgData ) );
    img.onload = function() {
        ctx.drawImage( img, 0, 0 );
        // Now is done, can I upload this image to server?
        var canvasURL = canvas.toDataURL("image/png");
        console.log(canvasURL);

        //Save image
        canvas.toBlob(function(blob) {
            saveAs(blob, "pretty.png", true);
        });


    };

}

function saveSVG(){
    bb = new window.WebKitBlobBuilder || window.MozBlobBuilder;
    var svg = document.querySelector( "svg" );
    bb.append(svg.toSVG());
    var blob = bb.getBlob("application/svg+xml;charset=" + svg.characterSet);
    saveAs(blob,"name.svg");
}