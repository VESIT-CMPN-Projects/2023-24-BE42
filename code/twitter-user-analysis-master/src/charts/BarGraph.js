import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';


const BarGraph = ({data,categories}) => {
  const [chartData] = useState({
    series: [{
      name : "Active Time",
      data: data
    }],
    options: {
      chart: {
        height: 350,
        type: 'bar'
        
      },
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      xaxis: {
        categories: categories,
        labels: {
          style: {
            fontSize: '12px'
          }
        }
      }
    }
  });

  return (
    <div>
      <div id="chart" >
        <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default BarGraph;
