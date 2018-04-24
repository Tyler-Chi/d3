/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/

d3.json('data/buildings.json').then(function(data){
    console.log(data);
    for (var el of data){
        el.height = parseInt(el.height);
    }

    console.log('hello world',data);
    
    var svg = d3.select("#chart-area").append("svg")
        .attr("width", 500)
        .attr("height", 500)  

    var rects = svg.selectAll("rect").data(data);

    rects.enter()
        .append("rect")
            .attr("x",function(d,i){
                return i * 100;
            })
            .attr("width",50)
            .attr("height",function(d,i){
                return d.height;
            })
            .attr("fill","blue");
      
})