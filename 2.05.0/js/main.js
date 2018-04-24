/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.5 - Activity: Adding SVGs to the screen
*/

var svg = d3.select("#root");

var rect = svg.append("rect");

rect
    .attr("x",25)
    .attr("y",0)
    .attr("width",150)
    .attr("height",60)
    .attr("fill","blue");