import Highcharts from 'highcharts';
import config from './config';
const colors = config.chartColors;

let columnColors = [colors.blue, colors.green, colors.orange, colors.red, colors.default, colors.gray, colors.teal, colors.pink];
let lineColors = [colors.blue, colors.green, colors.orange];

export const chartData = {

    pie: {apex: {
    column: {
      series: [{
        data: [21, 22, 10, 28, 16, 21, 13, 30]
      }],
      options: {
        chart: {
          height: 350,
          type: 'bar'
        },
        colors: columnColors,
        plotOptions: {
          bar: {
            columnWidth: '45%',
            distributed: true
          }
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: ['John', 'Joe', 'Jake', 'Amber', 'Peter', 'Mary', 'David', 'Lily'],
          labels: {
            style: {
              colors: columnColors,
              fontSize: '14px'
            }
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          }
        },
        yaxis: {
          labels: {
            style: {
              color: colors.textColor,
            }
          }
        },
        tooltip: {
          theme: 'dark'
        },
        grid: {
          borderColor: colors.gridLineColor
        }
      }
    },
      series: [25, 15, 44, 55, 41, 17],
      options: {
        labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        theme: {
          monochrome: {
            enabled: true,
            color: colors.blue,
          }
        },
        stroke: {
          show: false,
          width: 0
        },
        legend: false,
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 200
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
      }
    }
  },
  echarts: {
    line: {
      color: lineColors,
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        data: ['2015 Precipitation', '2016 Precipitation'],
        textStyle: {
          color: colors.textColor
        }
      },
      grid: {
        top: 70,
        bottom: 50,
      },
      xAxis: [
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: lineColors[1]
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return 'Precipitation  ' + params.value
                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
              }
            }
          },
          data: ["2020-1", "2020-2", "2020-3", "2020-4", "2020-5", "2020-6", "2020-7", "2020-8", "2020-9", "2020-10", "2020-11", "2020-12"]
        },
        {
          type: 'category',
          axisTick: {
            alignWithLabel: true
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: lineColors[0]
            }
          },
          axisPointer: {
            label: {
              formatter: function (params) {
                return 'Precipitation  ' + params.value
                  + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
              }
            }
          },
          data: ["2019-1", "2019-2", "2019-3", "2019-4", "2019-5", "2019-6", "2019-7", "2019-8", "2019-9", "2019-10", "2019-11", "2019-12"]
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLabel: {
            color: colors.textColor
          },
          axisLine: {
            lineStyle: {
              color: colors.textColor
            }
          },
          splitLine: {
            lineStyle: {
              color: colors.gridLineColor
            }
          },
          axisPointer: {
            label: {
              color: colors.dark
            }
          }
        }
      ],
      series: [
        {
          name: '2015 Precipitation',
          type: 'line',
          xAxisIndex: 1,
          smooth: true,
          data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        },
        {
          name: '2016 Precipitation',
          type: 'line',
          smooth: true,
          data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7]
        }
      ]
    },
    donut: {
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
      },
      legend: {
        show: false
      },
      color: [colors.blue, colors.green, colors.orange, colors.red, colors.purple],
      series: [
        {
          name: 'Access source',
          type: 'pie',
          radius: ['50%', '70%'],
          avoidLabelOverlap: false,
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [
            {value: 335, name: 'Direct interview'},
            {value: 310, name: 'Email marketing'},
            {value: 234, name: 'Alliance advertising'},
            {value: 135, name: 'Video ad'},
            {value: 1548, name: 'Search engine'}
          ]
        }
      ]
    },
    river: {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'line',
          lineStyle: {
            color: 'rgba(0,0,0,0.2)',
            width: 1,
            type: 'solid'
          }
        }
      },

      legend: {
        data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD'],
        textStyle: {
          color: colors.textColor
        }
      },
      color: [colors.blue, colors.green, colors.orange, colors.red, colors.purple, colors.gray],
      singleAxis: {
        top: 50,
        bottom: 50,
        axisTick: {},
        axisLabel: {
          color: colors.textColor
        },
        type: 'time',
        axisPointer: {
          animation: true,
          label: {
            show: true,
            color: colors.dark
          }
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: [colors.gridLineColor],
            type: 'dashed',
            opacity: 0.2
          }
        },
        axisLine: {
          lineStyle: {
            color: colors.textColor
          }
        },
      },

      series: [
        {
          type: 'themeRiver',
          itemStyle: {
            emphasis: {
              shadowBlur: 20,
              shadowColor: 'rgba(0, 0, 0, 0.8)'
            }
          },
          data: [['2015/11/08', 10, 'DQ'], ['2015/11/09', 15, 'DQ'], ['2015/11/10', 35, 'DQ'],
            ['2015/11/11', 38, 'DQ'], ['2015/11/12', 22, 'DQ'], ['2015/11/13', 16, 'DQ'],
            ['2015/11/14', 7, 'DQ'], ['2015/11/15', 2, 'DQ'], ['2015/11/16', 17, 'DQ'],
            ['2015/11/17', 33, 'DQ'], ['2015/11/18', 40, 'DQ'], ['2015/11/19', 32, 'DQ'],
            ['2015/11/20', 26, 'DQ'], ['2015/11/21', 35, 'DQ'], ['2015/11/22', 40, 'DQ'],
            ['2015/11/23', 32, 'DQ'], ['2015/11/24', 26, 'DQ'], ['2015/11/25', 22, 'DQ'],
            ['2015/11/26', 16, 'DQ'], ['2015/11/27', 22, 'DQ'], ['2015/11/28', 10, 'DQ'],
            ['2015/11/08', 35, 'TY'], ['2015/11/09', 36, 'TY'], ['2015/11/10', 37, 'TY'],
            ['2015/11/11', 22, 'TY'], ['2015/11/12', 24, 'TY'], ['2015/11/13', 26, 'TY'],
            ['2015/11/14', 34, 'TY'], ['2015/11/15', 21, 'TY'], ['2015/11/16', 18, 'TY'],
            ['2015/11/17', 45, 'TY'], ['2015/11/18', 32, 'TY'], ['2015/11/19', 35, 'TY'],
            ['2015/11/20', 30, 'TY'], ['2015/11/21', 28, 'TY'], ['2015/11/22', 27, 'TY'],
            ['2015/11/23', 26, 'TY'], ['2015/11/24', 15, 'TY'], ['2015/11/25', 30, 'TY'],
            ['2015/11/26', 35, 'TY'], ['2015/11/27', 42, 'TY'], ['2015/11/28', 42, 'TY'],
            ['2015/11/08', 21, 'SS'], ['2015/11/09', 25, 'SS'], ['2015/11/10', 27, 'SS'],
            ['2015/11/11', 23, 'SS'], ['2015/11/12', 24, 'SS'], ['2015/11/13', 21, 'SS'],
            ['2015/11/14', 35, 'SS'], ['2015/11/15', 39, 'SS'], ['2015/11/16', 40, 'SS'],
            ['2015/11/17', 36, 'SS'], ['2015/11/18', 33, 'SS'], ['2015/11/19', 43, 'SS'],
            ['2015/11/20', 40, 'SS'], ['2015/11/21', 34, 'SS'], ['2015/11/22', 28, 'SS'],
            ['2015/11/23', 26, 'SS'], ['2015/11/24', 37, 'SS'], ['2015/11/25', 41, 'SS'],
            ['2015/11/26', 46, 'SS'], ['2015/11/27', 47, 'SS'], ['2015/11/28', 41, 'SS'],
            ['2015/11/08', 10, 'QG'], ['2015/11/09', 15, 'QG'], ['2015/11/10', 35, 'QG'],
            ['2015/11/11', 38, 'QG'], ['2015/11/12', 22, 'QG'], ['2015/11/13', 16, 'QG'],
            ['2015/11/14', 7, 'QG'], ['2015/11/15', 2, 'QG'], ['2015/11/16', 17, 'QG'],
            ['2015/11/17', 33, 'QG'], ['2015/11/18', 40, 'QG'], ['2015/11/19', 32, 'QG'],
            ['2015/11/20', 26, 'QG'], ['2015/11/21', 35, 'QG'], ['2015/11/22', 40, 'QG'],
            ['2015/11/23', 32, 'QG'], ['2015/11/24', 26, 'QG'], ['2015/11/25', 22, 'QG'],
            ['2015/11/26', 16, 'QG'], ['2015/11/27', 22, 'QG'], ['2015/11/28', 10, 'QG'],
            ['2015/11/08', 10, 'SY'], ['2015/11/09', 15, 'SY'], ['2015/11/10', 35, 'SY'],
            ['2015/11/11', 38, 'SY'], ['2015/11/12', 22, 'SY'], ['2015/11/13', 16, 'SY'],
            ['2015/11/14', 7, 'SY'], ['2015/11/15', 2, 'SY'], ['2015/11/16', 17, 'SY'],
            ['2015/11/17', 33, 'SY'], ['2015/11/18', 40, 'SY'], ['2015/11/19', 32, 'SY'],
            ['2015/11/20', 26, 'SY'], ['2015/11/21', 35, 'SY'], ['2015/11/22', 4, 'SY'],
            ['2015/11/23', 32, 'SY'], ['2015/11/24', 26, 'SY'], ['2015/11/25', 22, 'SY'],
            ['2015/11/26', 16, 'SY'], ['2015/11/27', 22, 'SY'], ['2015/11/28', 10, 'SY'],
            ['2015/11/08', 10, 'DD'], ['2015/11/09', 15, 'DD'], ['2015/11/10', 35, 'DD'],
            ['2015/11/11', 38, 'DD'], ['2015/11/12', 22, 'DD'], ['2015/11/13', 16, 'DD'],
            ['2015/11/14', 7, 'DD'], ['2015/11/15', 2, 'DD'], ['2015/11/16', 17, 'DD'],
            ['2015/11/17', 33, 'DD'], ['2015/11/18', 4, 'DD'], ['2015/11/19', 32, 'DD'],
            ['2015/11/20', 26, 'DD'], ['2015/11/21', 35, 'DD'], ['2015/11/22', 40, 'DD'],
            ['2015/11/23', 32, 'DD'], ['2015/11/24', 26, 'DD'], ['2015/11/25', 22, 'DD'],
            ['2015/11/26', 16, 'DD'], ['2015/11/27', 22, 'DD'], ['2015/11/28', 10, 'DD']]
        }
      ]
    }
  },
  highcharts: {
    mixed: {
      chart: {
        type: 'spline',
        height: 350,
        backgroundColor: 'transparent'
      },
      exporting: {
        enabled: false
      },
      title: {
        text: 'Duration of connections',
        style: {
          color: colors.textColor
        }
      },
      credits: {
        enabled: false
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: { // don't display the dummy year
          month: '%e. %b',
          year: '%b'
        },
        labels: {
          style: {
            color: colors.textColor
          }
        }
      },
      yAxis: {
        min: 0,
        title: {
          enabled: false
        },
        labels: {
          style: {
            color: colors.textColor
          }
        },
        gridLineColor: colors.gridLineColor
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f} m'
      },
      legend: {
        enabled: false
      },
      plotOptions: {
        series: {
          marker: {
            enabled: false,
            symbol: 'circle'
          }
        }
      },
      colors: [colors.green, colors.blue, colors.red],

      series: [{
        name: "Winter 2014-2015",
        data: [
          [Date.UTC(1970, 10, 25), 0],
          [Date.UTC(1970, 11, 6), 0.25],
          [Date.UTC(1970, 11, 20), 1.41],
          [Date.UTC(1970, 11, 25), 1.64],
          [Date.UTC(1971, 0, 4), 1.6],
          [Date.UTC(1971, 0, 17), 2.55],
          [Date.UTC(1971, 0, 24), 2.62],
          [Date.UTC(1971, 1, 4), 2.5],
          [Date.UTC(1971, 1, 14), 2.42],
          [Date.UTC(1971, 2, 6), 2.74],
          [Date.UTC(1971, 2, 14), 2.62],
          [Date.UTC(1971, 2, 24), 2.6],
          [Date.UTC(1971, 3, 1), 2.81],
          [Date.UTC(1971, 3, 11), 2.63],
          [Date.UTC(1971, 3, 27), 2.77],
          [Date.UTC(1971, 4, 4), 2.68],
          [Date.UTC(1971, 4, 9), 2.56],
          [Date.UTC(1971, 4, 14), 2.39],
          [Date.UTC(1971, 4, 19), 2.3],
          [Date.UTC(1971, 5, 4), 2],
          [Date.UTC(1971, 5, 9), 1.85],
          [Date.UTC(1971, 5, 14), 1.49],
          [Date.UTC(1971, 5, 19), 1.27],
          [Date.UTC(1971, 5, 24), 0.99],
          [Date.UTC(1971, 5, 29), 0.67],
          [Date.UTC(1971, 6, 3), 0.18],
          [Date.UTC(1971, 6, 4), 0]
        ]
      }, {
        name: "Winter 2015-2016",
        type: 'areaspline',
        data: [
          [Date.UTC(1970, 10, 9), 0],
          [Date.UTC(1970, 10, 15), 0.23],
          [Date.UTC(1970, 10, 20), 0.25],
          [Date.UTC(1970, 10, 25), 0.23],
          [Date.UTC(1970, 10, 30), 0.39],
          [Date.UTC(1970, 11, 5), 0.41],
          [Date.UTC(1970, 11, 10), 0.59],
          [Date.UTC(1970, 11, 15), 0.73],
          [Date.UTC(1970, 11, 20), 0.41],
          [Date.UTC(1970, 11, 25), 1.07],
          [Date.UTC(1970, 11, 30), 0.88],
          [Date.UTC(1971, 0, 5), 0.85],
          [Date.UTC(1971, 0, 11), 0.89],
          [Date.UTC(1971, 0, 17), 1.04],
          [Date.UTC(1971, 0, 20), 1.02],
          [Date.UTC(1971, 0, 25), 1.03],
          [Date.UTC(1971, 0, 30), 1.39],
          [Date.UTC(1971, 1, 5), 1.77],
          [Date.UTC(1971, 1, 26), 2.12],
          [Date.UTC(1971, 3, 19), 2.1],
          [Date.UTC(1971, 4, 9), 1.7],
          [Date.UTC(1971, 4, 29), 0.85],
          [Date.UTC(1971, 5, 7), 0]
        ]
      }, {
        name: "Winter 2016-2017",
        type: 'areaspline',
        data: [
          [Date.UTC(1970, 9, 15), 0],
          [Date.UTC(1970, 9, 31), 0.09],
          [Date.UTC(1970, 10, 7), 0.17],
          [Date.UTC(1970, 10, 10), 0.1],
          [Date.UTC(1970, 11, 10), 0.1],
          [Date.UTC(1970, 11, 13), 0.1],
          [Date.UTC(1970, 11, 16), 0.11],
          [Date.UTC(1970, 11, 19), 0.11],
          [Date.UTC(1970, 11, 22), 0.08],
          [Date.UTC(1970, 11, 25), 0.23],
          [Date.UTC(1970, 11, 28), 0.37],
          [Date.UTC(1971, 0, 16), 0.68],
          [Date.UTC(1971, 0, 19), 0.55],
          [Date.UTC(1971, 0, 22), 0.4],
          [Date.UTC(1971, 0, 25), 0.4],
          [Date.UTC(1971, 0, 28), 0.37],
          [Date.UTC(1971, 0, 31), 0.43],
          [Date.UTC(1971, 1, 4), 0.42],
          [Date.UTC(1971, 1, 7), 0.39],
          [Date.UTC(1971, 1, 10), 0.39],
          [Date.UTC(1971, 1, 13), 0.39],
          [Date.UTC(1971, 1, 16), 0.39],
          [Date.UTC(1971, 1, 19), 0.35],
          [Date.UTC(1971, 1, 22), 0.45],
          [Date.UTC(1971, 1, 25), 0.62],
          [Date.UTC(1971, 1, 28), 0.68],
          [Date.UTC(1971, 2, 4), 0.68],
          [Date.UTC(1971, 2, 7), 0.65],
          [Date.UTC(1971, 2, 10), 0.65],
          [Date.UTC(1971, 2, 13), 0.75],
          [Date.UTC(1971, 2, 16), 0.86],
          [Date.UTC(1971, 2, 19), 1.14],
          [Date.UTC(1971, 2, 22), 1.2],
          [Date.UTC(1971, 2, 25), 1.27],
          [Date.UTC(1971, 2, 27), 1.12],
          [Date.UTC(1971, 2, 30), 0.98],
          [Date.UTC(1971, 3, 3), 0.85],
          [Date.UTC(1971, 3, 6), 1.04],
          [Date.UTC(1971, 3, 9), 0.92],
          [Date.UTC(1971, 3, 12), 0.96],
          [Date.UTC(1971, 3, 15), 0.94],
          [Date.UTC(1971, 3, 18), 0.99],
          [Date.UTC(1971, 3, 21), 0.96],
          [Date.UTC(1971, 3, 24), 1.15],
          [Date.UTC(1971, 3, 27), 1.18],
          [Date.UTC(1971, 3, 30), 1.12],
          [Date.UTC(1971, 4, 3), 1.06],
          [Date.UTC(1971, 4, 6), 0.96],
          [Date.UTC(1971, 4, 9), 0.87],
          [Date.UTC(1971, 4, 12), 0.88],
          [Date.UTC(1971, 4, 15), 0.79],
          [Date.UTC(1971, 4, 18), 0.54],
          [Date.UTC(1971, 4, 21), 0.34],
          [Date.UTC(1971, 4, 25), 0]
        ]
      }]
    },
  }
};

export let liveChartInterval = null;

export const liveChart = {
  liveChartInterval: null,
  colors: [colors.blue],
  chart: {
    backgroundColor: 'transparent',
    height: 170,
    type: 'spline',
    animation: Highcharts.svg, // don't animate in old IE
    marginRight: 10,
    events: {
      load: function () {

        // set up the updating of the chart each second
        var series = this.series[0];
        liveChartInterval = setInterval(function () {
          var x = (new Date()).getTime(), // current time
            y = Math.random();
          series.addPoint([x, y], true, true);
        }, 1000);
      }
    }
  },

  time: {
    useUTC: false
  },
  credits: {
    enabled: false
  },
  title: false,
  xAxis: {
    type: 'datetime',
    tickPixelInterval: 150,
    labels: {
      style: {
        color: colors.textColor
      }
    },
    lineWidth: 0,
    tickWidth: 0
  },
  yAxis: {
    title: {
      enabled: false
    },
    plotLines: [{
      value: 0,
      width: 1,
      color: colors.textColor
    }],
    labels: {
      style: {
        color: colors.textColor
      }
    },
    gridLineColor: colors.gridLineColor
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br/>',
    pointFormat: '{point.x:%Y-%m-%d %H:%M:%S}<br/>{point.y:.2f}'
  },
  legend: {
    enabled: false
  },
  exporting: {
    enabled: false
  },
  series: [{
    name: 'Random data',
    data: (function () {
      // generate an array of random data
      var data = [],
        time = (new Date()).getTime(),
        i;

      for (i = -19; i <= 0; i += 1) {
        data.push({
          x: time + i * 1000,
          y: Math.random()
        });
      }
      return data;
    }())
  }]
};

export default {
    serverOverview: [
        {
            data: [{
                data: [4, 6, 5, 7, 5],
            }],
            width: '100%',
            height: 30,
            options: {
                stroke: {
                    width: 1
                },
                markers: {
                    size: 4,
                    colors: '#57B955',
                    shape: "circle",
                    strokeWidth: 0,
                    hover: {
                        size: 5,
                        colors: '#fff',
                    }
                },
                colors: [
                    '#4E85BD'
                ],
                grid: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
            }
        },
        {
            data: [{
                data: [2, 3, 1, 4, 4],
            }],
            width: '100%',
            height: 30,
            options: {
                stroke: {
                    width: 1
                },
                markers: {
                    size: 4,
                    colors: '#57B955',
                    shape: "circle",
                    strokeWidth: 0,
                    hover: {
                        size: 5,
                        colors: '#fff',
                    }
                },
                colors: [
                    '#4E85BD'
                ],
                grid: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
            }
        }
    ],
    tasks: [
        {
            id: 0,
            type: 'Meeting',
            title: 'Meeting with Andrew Piker',
            time: '9:00',
        },
        {
            id: 1,
            type: 'Call',
            title: 'Call with HT Company',
            time: '12:00',
        },
        {
            id: 2,
            type: 'Meeting',
            title: 'Meeting with Zoe Alison',
            time: '14:00',
        },
        {
            id: 3,
            type: 'Interview',
            title: 'Interview with HR',
            time: '15:00',
        },
    ],
    bigStat: [
        {
            product: 'Light Blue',
            total: '4,232',
            color: 'primary',
            registrations: {
                value: 830,
                profit: true,
            },
            bounce: {
                value: 4.5,
                profit: false,
            },
        },
        {
            product: 'Sing App',
            total: '754',
            color: 'success',
            registrations: {
                value: 30,
                profit: true,
            },
            bounce: {
                value: 2.5,
                profit: true,
            },
        },
        {
            product: 'RNS',
            total: '1,025',
            color: 'danger',
            registrations: {
                value: 230,
                profit: true,
            },
            bounce: {
                value: 21.5,
                profit: false,
            },
        },
    ],
    notifications: [
        {
            id: 0,
            icon: 'thumbs-up',
            color: 'primary',
            content: 'Ken <span className="fw-semi-bold">accepts</span> your invitation',
        },
        {
            id: 1,
            icon: 'file',
            color: 'success',
            content: 'Report from LT Company',
        },
        {
            id: 2,
            icon: 'envelope',
            color: 'danger',
            content: '4 <span className="fw-semi-bold">Private</span> Mails',
        },
        {
            id: 3,
            icon: 'comment',
            color: 'success',
            content: '3 <span className="fw-semi-bold">Comments</span> to your Post',
        },
        {
            id: 4,
            icon: 'cog',
            color: 'light',
            content: 'New <span className="fw-semi-bold">Version</span> of RNS app',
        },
        {
            id: 5,
            icon: 'bell',
            color: 'info',
            content: '15 <span className="fw-semi-bold">Notifications</span> from Social Apps',
        },
    ],
    table: [
        {
            id: 0,
            name: 'Mark Otto',
            email: 'ottoto@wxample.com',
            product: 'ON the Road',
            price: '$25 224.2',
            date: '11 May 2017',
            city: 'Otsego',
            status: 'Sent',
        },
        {
            id: 1,
            name: 'Jacob Thornton',
            email: 'thornton@wxample.com',
            product: 'HP Core i7',
            price: '$1 254.2',
            date: '4 Jun 2017',
            city: 'Fivepointville',
            status: 'Sent',
        },
        {
            id: 2,
            name: 'Larry the Bird',
            email: 'bird@wxample.com',
            product: 'Air Pro',
            price: '$1 570.0',
            date: '27 Aug 2017',
            city: 'Leadville North',
            status: 'Pending',
        },
        {
            id: 3,
            name: 'Joseph May',
            email: 'josephmay@wxample.com',
            product: 'Version Control',
            price: '$5 224.5',
            date: '19 Feb 2018',
            city: 'Seaforth',
            status: 'Declined',
        },
        {
            id: 4,
            name: 'Peter Horadnia',
            email: 'horadnia@wxample.com',
            product: 'Let\'s Dance',
            price: '$43 594.7',
            date: '1 Mar 2018',
            city: 'Hanoverton',
            status: 'Sent',
        },
    ],
    backendData: {
        visits: {
            count: 4.332,
            logins: 830,
            sign_out_pct: 0.5,
            rate_pct: 4.5
        },
        performance: {
            sdk: {
                this_period_pct: 60,
                last_period_pct: 30,
            },
            integration: {
                this_period_pct: 40,
                last_period_pct: 55,
            }
        },
        server: {
            1: {
                pct: 60,
                temp: 37,
                frequency: 3.3
            },
            2: {
                pct: 54,
                temp: 31,
                frequency: 3.3
            }
        },
        revenue: getRevenueData(),
        mainChart: getMainChartData()
    }
};

function getRevenueData() {
    const data = [];
    const seriesCount = 3;
    const accessories = ['SMX', 'Direct', 'Networks'];

    for (let i = 0; i < seriesCount; i += 1) {
        data.push({
            label: accessories[i],
            data: Math.floor(Math.random() * 100) + 1,
        });
    }

    return data;
}

function getMainChartData() {
    function generateRandomPicks(minPoint, maxPoint, picksAmount, xMax) {
        let x = 0;
        let y = 0;
        const result = [];
        const xStep = 1;
        const smoothness = 0.3;
        const pointsPerPick = Math.ceil(xMax / ((picksAmount * 2) + 1) / 2);

        const maxValues = [];
        const minValues = [];

        for (let i = 0; i < picksAmount; i += 1) {
            const minResult = minPoint + Math.random();
            const maxResult = maxPoint - Math.random();

            minValues.push(minResult);
            maxValues.push(maxResult);
        }

        let localMax = maxValues.shift(0);
        let localMin = 0;
        let yStep = parseFloat(((localMax - localMin) / pointsPerPick).toFixed(2));

        for (let j = 0; j < Math.ceil(xMax); j += 1) {
            result.push([x, y]);

            if ((y + yStep >= localMax) || (y + yStep <= localMin)) {
                y += yStep * smoothness;
            } else if ((result[result.length - 1][1] === localMax) || (result[result.length - 1][1] === localMin)) {
                y += yStep * smoothness;
            } else {
                y += yStep;
            }

            if (y > localMax) {
                y = localMax;
            } else if (y < localMin) {
                y = localMin;
            }

            if (y === localMin) {
                localMax = maxValues.shift(0) || localMax;

                const share = (localMax - localMin) / localMax;
                const p = share > 0.5 ? Math.round(pointsPerPick * 1.2) : Math.round(pointsPerPick * share);

                yStep = parseFloat(((localMax - localMin) / p).toFixed(2));
                yStep *= Math.abs(yStep);
            }

            if (y === localMax) {
                localMin = minValues.shift(0) || localMin;

                const share = (localMax - localMin) / localMax;
                const p = share > 0.5 ? Math.round(pointsPerPick * 1.5) : Math.round(pointsPerPick * 0.5);

                yStep = parseFloat(((localMax - localMin) / p).toFixed(2));
                yStep *= -1;
            }

            x += xStep;
        }

        return result;
    }

    const d1 = generateRandomPicks(0.2, 3, 4, 90);
    const d2 = generateRandomPicks(0.4, 3.8, 4, 90);
    const d3 = generateRandomPicks(0.2, 4.2, 3, 90);

    return [d1, d2, d3];
}
