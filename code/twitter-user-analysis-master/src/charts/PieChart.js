import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

const ApexChart = ({data}) => {
  const series = [];
  const labels = [];
  for(let i=0; i<data.length; i++) {
    series.push(Number(data[i]['number_of_mentions']));
    labels.push(data[i]['username']);
  }
  const [chartData] = useState({
    series: series,
    options: {
      chart: {
        width: 380,
        type: 'pie',
      },
      labels: labels,
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            label: {
              fontSize: '40px',
              color: undefined
            },
            legend: {
              position: 'top',
            },
          },
        },
      ],
    },
  });

  return (
    <div>
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="pie" width={500} />
      </div>
      <div id="html-dist"></div>
    </div>
  );
};

export default ApexChart;
