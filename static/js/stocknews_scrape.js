// Roadmap
// FUnction to initialize page, create dropdown using sql list of stocks.
// Selects the drop down element./value
//init function calls the build table FUnction
// build table makes a call to  another flask endpoint(news data)
//flask endpoint will call the url and parse response,return response
// build table then takes the formatted response from the call and builds table.

////////////////////////////////////////////////////////
// Create Event listener for dropdown date input, table button selection,
// and functions to build the market table section.
//
/////////////////////////////////////////////////////////

// $(document).ready(function() {
//   $('input[name=marketwatch]').click(function() {
//     // if (this.name == 'marketwatch')
//     var tableselection = this.value;
//     console.log(tableselection);
//     buildMarketStats(tableselection);
//   });
// });

// $(document).ready(function(){
//   $('input[name=marketsymbol]').on('click', function(){
//     var symbolselection = this.value;
//     console.log(this.value);
//
//     optionChanged(symbolselection);
//   });
//
// });

//Spinner js
////////////////////////////////////////////////////////////////////////////
//fgnass.github.com/spin.js#v1.2.5
(function(a, b, c) {
    function g(a, c) {
        var d = b.createElement(a || "div"),
            e;
        for (e in c) d[e] = c[e];
        return d
    }
    function h(a) {
        for (var b = 1, c = arguments.length; b < c; b++) a.appendChild(arguments[b]);
        return a
    }
    function j(a, b, c, d) {
        var g = ["opacity", b, ~~ (a * 100), c, d].join("-"),
            h = .01 + c / d * 100,
            j = Math.max(1 - (1 - a) / b * (100 - h), a),
            k = f.substring(0, f.indexOf("Animation")).toLowerCase(),
            l = k && "-" + k + "-" || "";
        return e[g] || (i.insertRule("@" + l + "keyframes " + g + "{" + "0%{opacity:" + j + "}" + h + "%{opacity:" + a + "}" + (h + .01) + "%{opacity:1}" + (h + b) % 100 + "%{opacity:" + a + "}" + "100%{opacity:" + j + "}" + "}", 0), e[g] = 1), g
    }
    function k(a, b) {
        var e = a.style,
            f, g;
        if (e[b] !== c) return b;
        b = b.charAt(0).toUpperCase() + b.slice(1);
        for (g = 0; g < d.length; g++) {
            f = d[g] + b;
            if (e[f] !== c) return f
        }
    }
    function l(a, b) {
        for (var c in b) a.style[k(a, c) || c] = b[c];
        return a
    }
    function m(a) {
        for (var b = 1; b < arguments.length; b++) {
            var d = arguments[b];
            for (var e in d) a[e] === c && (a[e] = d[e])
        }
        return a
    }
    function n(a) {
        var b = {
            x: a.offsetLeft,
            y: a.offsetTop
        };
        while (a = a.offsetParent) b.x += a.offsetLeft, b.y += a.offsetTop;
        return b
    }
    var d = ["webkit", "Moz", "ms", "O"],
        e = {},
        f, i = function() {
            var a = g("style");
            return h(b.getElementsByTagName("head")[0], a), a.sheet || a.styleSheet
        }(),
        o = {
            lines: 12,
            length: 7,
            width: 5,
            radius: 10,
            rotate: 0,
            color: "#000",
            speed: 1,
            trail: 100,
            opacity: .25,
            fps: 20,
            zIndex: 2e9,
            className: "spinner",
            top: "auto",
            left: "auto"
        },
        p = function q(a) {
            if (!this.spin) return new q(a);
            this.opts = m(a || {}, q.defaults, o)
        };
    p.defaults = {}, m(p.prototype, {
        spin: function(a) {
            this.stop();
            var b = this,
                c = b.opts,
                d = b.el = l(g(0, {
                    className: c.className
                }), {
                    position: "relative",
                    zIndex: c.zIndex
                }),
                e = c.radius + c.length + c.width,
                h, i;
            a && (a.insertBefore(d, a.firstChild || null), i = n(a), h = n(d), l(d, {
                left: (c.left == "auto" ? i.x - h.x + (a.offsetWidth >> 1) : c.left + e) + "px",
                top: (c.top == "auto" ? i.y - h.y + (a.offsetHeight >> 1) : c.top + e) + "px"
            })), d.setAttribute("aria-role", "progressbar"), b.lines(d, b.opts);
            if (!f) {
                var j = 0,
                    k = c.fps,
                    m = k / c.speed,
                    o = (1 - c.opacity) / (m * c.trail / 100),
                    p = m / c.lines;
                !
                function q() {
                    j++;
                    for (var a = c.lines; a; a--) {
                        var e = Math.max(1 - (j + a * p) % m * o, c.opacity);
                        b.opacity(d, c.lines - a, e, c)
                    }
                    b.timeout = b.el && setTimeout(q, ~~ (1e3 / k))
                }()
            }
            return b
        },
        stop: function() {
            var a = this.el;
            return a && (clearTimeout(this.timeout), a.parentNode && a.parentNode.removeChild(a), this.el = c), this
        },
        lines: function(a, b) {
            function e(a, d) {
                return l(g(), {
                    position: "absolute",
                    width: b.length + b.width + "px",
                    height: b.width + "px",
                    background: a,
                    boxShadow: d,
                    transformOrigin: "left",
                    transform: "rotate(" + ~~ (360 / b.lines * c + b.rotate) + "deg) translate(" + b.radius + "px" + ",0)",
                    borderRadius: (b.width >> 1) + "px"
                })
            }
            var c = 0,
                d;
            for (; c < b.lines; c++) d = l(g(), {
                position: "absolute",
                top: 1 + ~ (b.width / 2) + "px",
                transform: b.hwaccel ? "translate3d(0,0,0)" : "",
                opacity: b.opacity,
                animation: f && j(b.opacity, b.trail, c, b.lines) + " " + 1 / b.speed + "s linear infinite"
            }), b.shadow && h(d, l(e("#000", "0 0 4px #000"), {
                top: "2px"
            })), h(a, h(d, e(b.color, "0 0 1px rgba(0,0,0,.1)")));
            return a
        },
        opacity: function(a, b, c) {
            b < a.childNodes.length && (a.childNodes[b].style.opacity = c)
        }
    }), !
    function() {
        function a(a, b) {
            return g("<" + a + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', b)
        }
        var b = l(g("group"), {
            behavior: "url(#default#VML)"
        });
        !k(b, "transform") && b.adj ? (i.addRule(".spin-vml", "behavior:url(#default#VML)"), p.prototype.lines = function(b, c) {
            function f() {
                return l(a("group", {
                    coordsize: e + " " + e,
                    coordorigin: -d + " " + -d
                }), {
                    width: e,
                    height: e
                })
            }
            function k(b, e, g) {
                h(i, h(l(f(), {
                    rotation: 360 / c.lines * b + "deg",
                    left: ~~e
                }), h(l(a("roundrect", {
                    arcsize: 1
                }), {
                    width: d,
                    height: c.width,
                    left: c.radius,
                    top: -c.width >> 1,
                    filter: g
                }), a("fill", {
                    color: c.color,
                    opacity: c.opacity
                }), a("stroke", {
                    opacity: 0
                }))))
            }
            var d = c.length + c.width,
                e = 2 * d,
                g = -(c.width + c.length) * 2 + "px",
                i = l(f(), {
                    position: "absolute",
                    top: g,
                    left: g
                }),
                j;
            if (c.shadow) for (j = 1; j <= c.lines; j++) k(j, -2, "progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)");
            for (j = 1; j <= c.lines; j++) k(j);
            return h(b, i)
        }, p.prototype.opacity = function(a, b, c, d) {
            var e = a.firstChild;
            d = d.shadow && d.lines || 0, e && b + d < e.childNodes.length && (e = e.childNodes[b + d], e = e && e.firstChild, e = e && e.firstChild, e && (e.opacity = c))
        }) : f = k(b, "animation")
    }(), a.Spinner = p
})(window, document);
var opts = {
  lines: 13, // The number of lines to draw
  length: 38, // The length of each line
  width: 17, // The line thickness
  radius: 45, // The radius of the inner circle
  scale: 1, // Scales overall size of the spinner
  corners: 1, // Corner roundness (0..1)
  color: '#000000', // CSS color or array of colors
  fadeColor: 'transparent', // CSS color or array of colors
  speed: 1, // Rounds per second
  rotate: 0, // The rotation offset
  animation: 'spinner-line-fade-quick', // The CSS animation name for the lines
  direction: 1, // 1: clockwise, -1: counterclockwise
  zIndex: 2e9, // The z-index (defaults to 2000000000)
  className: 'spinner', // The CSS class to assign to the spinner
  top: '50%', // Top position relative to parent
  left: '50%', // Left position relative to parent
  shadow: '0 0 1px transparent', // Box-shadow for the lines
  position: 'absolute' // Element positioning
};
//////////////////////////////////////////////////////////////////////////////////////////

var input = document.querySelector('#datepicker');

$(document).ready(function() {
    $('input[name=marketwatch]').click(function() {
    // if (this.name == 'marketwatch')
    let table = document.querySelector('#marketwatch')
    // table.innerHTML = ''
    var tableselection = this.value;
    console.log(tableselection);
    if (tableselection == 'econcal' ) {
      buildEconCal('today')
      input.addEventListener('change', element => {
        var searchInput = element.target.value
        console.log(searchInput);
        if (searchInput) {
          buildEconCal(searchInput);
        } else {
          searchInput = 'today'
          buildEconCal(searchInput)
        }; //End if searchInput
      });// End event listener
    } else {
        buildMarketStats(tableselection);
    };// End if
  }); //End .click(function())
}); // End .ready(function())


function buildEconCal(dateinput) {
  let url =  `/econcal/${dateinput}`
  d3.json(url).then((response) => {
    console.log(response);
    if (response != 'No records for this date'){
      let table = document.getElementById('market-tables');
      table.innerHTML = ''; // clear previos table
      /////////////////////////////////////////////////// Build table header
      let header = table.createTHead();
      let columns = Object.keys(response[0]);
      let header_row = header.insertRow(0);
      for (let i=0;i< columns.length;i++) {
        let cell = header_row.insertCell(i);
        cell.innerHTML = `<b>${columns[i]}</b>`;
      }; // End for(i < columns.length)
      /////////////////////////////////////////////////////// Build Table body
      let tablebody = table.createTBody();
      // tablebody.innerHTML = ''
      for (let i=0; i < response.length; i++) { // Iterate through article
        let datarow = response[i];
        // console.log(datarow);
        // let keys = Object.keys(datarow)
        // console.log(keys);
        let row = tablebody.insertRow(i);
        for (let j = 0; j < columns.length;j++) { // Iterate through article keys
          let key = columns[j];
          let cell = row.insertCell(j);
          cell.innerText = datarow[key];
        }; // End for j
      };// End for i
    } else if (response == 'No records for this date') {
      let table = document.getElementById('market-tables');
      table.innerHTML = `<p>${response[0]}</p>`;
    }; // End if no records
  });// End D3.json
};// End buildEconCal

function buildMarketStats(input) {
  let url = `/marketstats/${input}`
  d3.json(url).then((response)=> {
    // console.log(response);
    let table = document.getElementById('market-tables');
    table.innerHTML = ''; // clear previos table
    /////////////////////////////////////////////////// Build table header
    let header = table.createTHead();
    let columns = Object.keys(response[0]);
    let header_row = header.insertRow(0);
    for (let i=0;i< columns.length;i++) {
      let cell = header_row.insertCell(i);
      cell.innerHTML = `<b>${columns[i]}</b>`;
    }; // End for(i < columns.length)
    /////////////////////////////////////////////////////// Build Table body
    let tablebody = table.createTBody();
    for (let i=0; i < response.length; i++) { // Iterate through article
      let datarow = response[i];
      // console.log(datarow);
      // let keys = Object.keys(datarow)
      // console.log(keys);
      let row = tablebody.insertRow(i);
      for (let j = 0; j < columns.length;j++) { // Iterate through article keys
        let key = columns[j];
        let cell = row.insertCell(j);
        if ( key == 'Symbol') {
          cell.innerText = datarow[key];
          // cell.innerHTML =  `<a rel="noopener noreferrer" href=${article[key]} target="_blank">Read Article</a>`;
          // cell.innerHTML = `<input type="radio" id="markettick" name="marketsymbol" value=${datarow[key]}><label for=${datarow[key]}>${datarow[key]}</label>`;
        } else if (true){
              cell.innerText = datarow[key];
        };//end if
      }; // End for j
    };// End for i
  });// End D3.json
}; // End function buildEcon


///////////////////////////////////////////////////////
// Function to build news table and plot news points
///////////////////////////////////////////////////////
var plotData = [];

function buildTable(symbol) {
  var target = document.getElementById('news-table');
  var spinner = new Spinner({color:'#000', lines: 12}).spin(target);
  let url = `/newstable/${symbol}`;
  d3.json(url).then((response) => {
    let tablebody = document.querySelector('tbody');
    tablebody.innerHTML = ''
    for (let i=0; i < response.length; i++) { // Iterate through article
      let article= response[i];
      let spec_keys = ['publishDate','title','url']
      let row = tablebody.insertRow(i)
      for (let j = 0; j < spec_keys.length;j++) { // Iterate through article keys
        let key = spec_keys[j];
        let cell = row.insertCell(j);
        if ( key == 'url') {
          cell.innerHTML =  `<a rel="noopener noreferrer" href=${article[key]} target="_blank">Read Article</a>`;
        } else if (true){
              cell.innerText = article[key];
        };//end if
      }; // End for j
    };// End for i
    spinner.stop();
    plotAll(plotData, response, symbol)
  }); //End d3.json reuest handling
}// End function


///////////////////////////////////////////////////////////////
// Alpha Vantage API Call and Plot functions
//////////////////////////////////////////////////////////////



// for 5 min intervals, 12 window period is an hour
function rollingAverage(arr, windowPeriod = 12) {
  rollingAverageValues = [];
  for (var i = windowPeriod - 1; i < arr.length; i++) {
    let ctr = 0;
    let newVal = arr[i];
    if (arr[i] == null) {
      ctr += 1;
    };
    for (var j = 1; j < windowPeriod; j++) {
      newVal += arr[i-j];
      if (arr[i-j] == null) {
        ctr += 1;
      };
    };
    rollingAverageValues.push(newVal / (windowPeriod - ctr));
  }
  return rollingAverageValues;
};


function plotAll(priorData, response, symbol) {

  var allData = [];
  priorData.forEach(function(x) {
      allData.push(x);
  });
  response.forEach(function(x) {
    let y = new Date(x.discoverDate);
    if (y > priorData[0].date && y < priorData[priorData.length - 1].date) {
      allData.push(
        {
          date: new Date(x.discoverDate),
          close: null,
          volume: null,
          newsVal: "insert",
          newsTitle: x.title
        }
      );
    }
  });



  allData.sort(function(first, second) {
    return first.date - second.date;
  });


  var values = [];
  for (var i=0; i<allData.length; i ++) {
    if (allData[i].newsVal == "insert") {
      var nextY
      var nextTime
      for (var k=1; k<allData.length - i; k++) {
        if (allData[i+k].close !== null) {
          nextY = allData[i+k].close;
          nextTime = allData[i+k].date;
          break
        }
      }
      var previousY
      var previousTime

      for (var k=1; k<=i; k++) {
        if (allData[i-k].close !== null) {
          previousY = allData[i-k].close;
          previousTime = allData[i-k].date;
          break
        }
      }

      let m = (nextY - previousY)/(nextTime - previousTime);
      let newY = (allData[i].date - previousTime)*m + previousY;
      allData[i].newsVal = newY;
      values.push(newY);
    }
  };

  let dates = [];
  let closeValues = [];
  let volumeValues = [];
  let newsValues = [];
  let newsTitles = [];


  allData.forEach(function(x) {
    dates.push(`${x.date.getMonth()+1}/${x.date.getDate()} ${x.date.getHours()}:${x.date.getMinutes()}`);
    closeValues.push(x.close);
    volumeValues.push(x.volume);
    newsValues.push(x.newsVal);
    newsTitles.push(x.newsTitle);
  });


  var trace2 = {
    x: dates,
    y: closeValues,
    type: "scatter",
    name: "Closing Price"
  };

    // rolling average plot with period pre-defined so that the x values stay correct with any period
  var rollingAveragePeriod = 12;
  var trace3 = {
    x: dates.slice(rollingAveragePeriod - 1, dates.length),
    y: rollingAverage(closeValues, rollingAveragePeriod),
    type: "scatter",
    name: "One Hour MA"
  };

    // trace for Volume
  var trace1 = {
    x: dates,
    y: volumeValues,
    yaxis: "y2",
    type: "bar",
    name: "Volume",
    opacity: 0.5
  };

  var trace4 = {
    x: dates,
    y: newsValues,
    mode: "markers",
    text: newsTitles,
    type: "scatter",
    name: "News"
  };



  var data = [trace1, trace2, trace3, trace4];

  var layout = {
    title: {
      text: `<b>${symbol}</b> Closing Prices`,
      font: {
        family: 'Arial, sans-serif',
        size: 20
      }
    },
    xaxis: {
      textfont: {
        family: 'Arial, sans-serif',
        size: 18,
      }
    },
    yaxis: {
      autorange: true,
      type: "linear",
      textfont: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'blue'
      }
    },
    yaxis2: {
      title: "Volume",
      overlaying: 'y',
      side: "right",
      anchor: "x",
      font: {
        family: 'Arial, sans-serif',
        size: 18,
        color: 'green'
      }
    },
    showlegend: true,
    legend: {
      x: 0,
      y: 5
    },
    margin: {
      b: 100
    },
    plot_bgcolor: "rgba(0,0,0,0)",
    paper_bgcolor: "rgba(0,0,0,0)"
  };

  return Plotly.newPlot("plot",data,layout);
}


function alphaVantagePullnPlot(stockTicker) {
  d3.json(`/stockpull/${stockTicker}`).then(function(dataResponse) {
    var metaData = dataResponse["Meta Data"];
    var timeDelta = metaData["4. Interval"];
    var stockData =  dataResponse[`Time Series (${timeDelta})`];

    var dates = [];
    var closeValues = [];
    var volumeValues = [];

    Object.entries(stockData).forEach(function(d) {
      plotData.push(
        {
          date: new Date(d[0]),
          close: +d[1]["4. close"],
          volume: +d[1]["5. volume"],
          newsVal: null,
          newsTitle: null
        }
      )
    });




    plotData.sort(function(first, second) {
      return first.date - second.date;
    });

    plotData.forEach(function(x) {
      dates.push(`${x.date.getMonth()+1}/${x.date.getDate()} ${x.date.getHours()}:${x.date.getMinutes()}`);
      closeValues.push(x.close);
      volumeValues.push(x.volume);
    });


    var trace2 = {
      x: dates,
      y: closeValues,
      type: "scatter",
      name: "Closing Price"
    };

    var rollingAveragePeriod = 12;
    var trace3 = {
      x: dates.slice(rollingAveragePeriod - 1, dates.length),
      y: rollingAverage(closeValues, rollingAveragePeriod),
      type: "scatter",
      name: "One Hour MA"
    };

    var trace1 = {
      x: dates,
      y: volumeValues,
      yaxis: "y2",
      type: "bar",
      name: "Volume",
      opacity: 0.5
    };

    var data = [trace1, trace2, trace3]


    var layout = {
      title: {
        text: `<b>${stockTicker}</b> Closing Prices`,
        font: {
          family: 'Arial, sans-serif',
          size: 20
        }
      },
      xaxis: {
        textfont: {
          family: 'Arial, sans-serif',
          size: 18,
        }
      },
      yaxis: {
        autorange: true,
        type: "linear",
        textfont: {
          family: 'Arial, sans-serif',
          size: 18,
          color: 'blue'
        }
      },
      yaxis2: {
        title: "Volume",
        overlaying: 'y',
        side: "right",
        anchor: "x",
        font: {
          family: 'Arial, sans-serif',
          size: 18,
          color: 'green'
        }
      },
      showlegend: true,
      legend: {
        x: 0,
        y: 5
      },
      margin: {
        b: 100
      },
      plot_bgcolor: "lavender",
      paper_bgcolor: "lavender"
    };

    Plotly.newPlot("plot",data,layout);

  });
};



/////////////////////////////////////////////////////////////
// Plot the history data
/////////////////////////////////////////////////////////////
var historyData;
var stockSymbol;

function getHistoryData(stock, typePull = "full") {

  historyData = d3.json(`/stockhistory/${stock}`);
  stockSymbol = `${stock}`

};

function historyPlot(stockSymbol,years) {

  var nowDate = new Date();
  var fromDate = nowDate.getFullYear() - years + '-01-01';
  var currentMonth = nowDate.getMonth() + 1;
  var currentDate = nowDate.getDate();

  if (currentMonth < 10) {
    currentMonth = '0' + currentMonth;
  }
  //
  // if (currentDate < 10) {
  //   currentDate = '0' + currentDate;
  // }

  var toDate = nowDate.getFullYear() + '-' + currentMonth + '-' + currentDate;

  console.log(nowDate);
  console.log("from " + fromDate + " to " + toDate);

  // Getting the stock data to plot into a list format
  var historyDates = [];
  var historyOpen = [];
  var historyHigh = [];
  var historyLow = [];
  var historyClose = [];

  historyData.then(function(data) {

    var stockData =  data[`Monthly Time Series`];
    // console.log(data);

    Object.entries(stockData).forEach(function(d) {

      if (d[0] >= fromDate && d[0] <= toDate) {

        historyDates.push(d[0]);
        historyOpen.push(+d[1]["1. open"]);
        historyHigh.push(+d[1]["2. high"]);
        historyLow.push(+d[1]["3. low"]);
        historyClose.push(+d[1]["4. close"]);
      }

    });

    // console.log("dates: " + historyDates);
    // console.log("openingPrices: " + historyOpen);
    // console.log("closingPrices: " + historyClose);

    // Plot the graph
    var trace1 = {
      x: historyDates,
      close: historyClose,
      high: historyHigh,
      low: historyLow,
      open: historyOpen,
      type: "candlestick",
      increasing: {line: {color: '#17BECF'}},
      decreasing: {line: {color: 'black'}},
      xaxis: "x",
      yaxis: "y"
    };

    var data = [trace1];

    var layout = {
      title: `${stockSymbol} ${years} years historical data`,
      dragmode: 'zoom',
      margin: {
        r: 10,
        t: 25,
        b: 40,
        l: 60
      },
      xaxis: {
        autorange: false,
        range: [fromDate, toDate],
        // rangeslider: {range: [fromDate, toDate]},
        rangeslider: {visible: false},
        title: "Date",
        type: "date"
      },
      yaxis: {
        autorange: true,
        type: "candlestick"
      },
      plot_bgcolor: "lavender",
      paper_bgcolor: "lavender"
    };

    Plotly.newPlot("historyPlot", data, layout);
  });
};

function changedYears(selYears) {

  console.log("selYears: " + selYears)
  // historyYears = selYears;
  historyPlot(stockSymbol,selYears);

};


///////////////////////////////////////////////////////////////
//Initialize/Render page elements based on menu selection
//////////////////////////////////////////////////////////////

function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  // Route /tipicks returns a list of strings
  d3.json("/tickpicks").then((tickers) => {
    console.log(tickers);
    tickers.forEach((symbol) => {
      selector
        .append("option")
        .text(symbol)
        .property("value", symbol);
    });

    //Use the first sample from the list to build the initial plots
    const firstSymbol = tickers[0];
    buildTable(firstSymbol);
    alphaVantagePullnPlot(firstSymbol);
    let stockSymbol = tickers[0];
    const historyYears = 3;
    getHistoryData(stockSymbol);
    historyPlot(stockSymbol,historyYears);
  });
  buildMarketStats('mostactivebysharevol')
};

function optionChanged(newSymbol) {
  // Fetch new data each time a new sample is selected
  plotData = [];
  alphaVantagePullnPlot(newSymbol);
  buildTable(newSymbol);
  let stockSymbol = newSymbol;
  getHistoryData(stockSymbol);
  let historyYears = 3;
  historyPlot(stockSymbol,historyYears);
};

// Initialize the dashboard
init();
