// See reportMain component for base component

import React, { Component } from 'react';

import { Doughnut } from 'react-chartjs-2';

class GenderChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: [
          'Women',
          'Man',
          'Non-Binary',
          'Gender variant / nonconforming',
          'Transgender Man',
          'Gender Queer',
          '2 Spirited',
        ],
        datasets: [
          {
            label: 'Population',
            data: [66.7, 25.7, 6.7, 3.8, 1, 1, 1],
            backgroundColor: [
              'rgba(255, 99, 132, 0.6)',
              'rgba(54, 162, 235, 0.6)',
              'rgba(255, 206, 86, 0.6)',
              'rgba(75, 192, 192, 0.6)',
              'rgba(153, 102, 255, 0.6)',
              'rgba(255, 159, 64, 0.6)',
              'rgba(252, 2, 40, 0.8)',
            ],
          },
        ],
      },
    };
  }

  static defaultProps = {
    displayTitle: false,
    displayLegend: true,
    legendPosition: 'top',
  };

  render() {
    return (
      <div className='chart-styling-outer-div'>
        <div className='chart-styling'>
          <article className=''>
            <Doughnut
              className='canvas-container'
              data={this.state.chartData}
              options={{
                plugins: {
                  align: 'center',

                  legend: {
                    position: 'right',
                    display: this.props.displayLegend,
                    position: 'bottom',
                  },
                },
              }}
            />
          </article>
        </div>
      </div>
    );
  }
}

export default GenderChart;
