/*
*    main.js
*    Mastering Data Visualization with D3.js
*    2.8 - Activity: Your first visualization!
*/
var margin = {left: 100, right: 10, top: 10, bottom: 100};

var width = 600 - margin.left - margin.right;
var height = 400 - margin.top - margin.bottom;


var svg = d3.select("#chart-area").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom); 

d3.json('data/buildings.json').then(function(data){
    console.log(data);
    for (var el of data){
        el.height = parseInt(el.height);
    }

    console.log('hello world',data);

    //attach a grouping to the svg

    var g = svg.append("g")
        .attr("transform","translate(" + margin.left + ", " + margin.top + ")");



    var y = d3.scaleLinear()
        .domain([0,1500])
        .range([height,0]);

 


    let domain = [];
    for (var obj of data){
        domain.push(obj.name);
    }

    console.log(domain)

    var x = d3.scaleBand()
        .domain(domain)
        .range([0,width])
        .paddingInner(0.3)
        .paddingOuter(0.2);
    
    //using x, make the bottom axis
    var xAxisCall = d3.axisBottom(x);

    //attach the axis to the g using call
    g.append("g")
        .attr("class","x axis")
        .attr("transform", "translate(0, " + height + ")")
        .call(xAxisCall)
        

    var yAxisCall = d3.axisLeft(y);
    g.append("g")
        .attr("class","y-axis")
        .call(yAxisCall);

    //nest all of the rectangles under g

    var rects = g.selectAll("rect").data(data);

    console.log(x.bandwidth())



    rects.enter()
        .append("rect")
            .attr("x",function(d,i){
                return x(d.name);
            })
            .attr("width", x.bandwidth())
            .attr("height",function(d,i){
                return y(d.height);
            })
            .attr("fill","blue");
      
});