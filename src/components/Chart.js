import React, { Component } from 'react';
import { Pie } from 'react-chartjs-2';
import './Chart.css';

class Chart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: this.props.chartData,
        }
    }

    render() {
        return (
            <div className="chart">
                <Pie
                    data={this.state.chartData}
                    width={100}
                    height={50}
                    options={{
                        maintainAspectRatio: false
                    }}
                />
            </div>
        )
    }



}

export default Chart;