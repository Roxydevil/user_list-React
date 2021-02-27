import React from 'react';
import axios from "axios";
import './ItemBlock.css';
import Item from './Item/Item';
import Chart from './Chart.js';

export default class PersonList extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            numberOfPersons: 30,
            persons: [],
            search: '',
            visibleChart: false,
            femalePersons: 0,
            openItemId: null,
        };
        this.showChart = this.showChart.bind(this);
    }

    showChart() {
        this.setState(state => ({
            visibleChart: !state.visibleChart
        }));
    }

    componentDidMount() {
        axios
            .get(
                'https://randomuser.me/api/?results=' + this.state.numberOfPersons,
            )
            .then((response) => {
                
                console.log(response.data.results);
                const persons = [];
                for (let key in response.data.results) {
                    persons.push({ ...response.data.results[key], id: key });
                }
                let femalePersons = response.data.results.filter(
                    (person) => {
                        return person.gender === 'female';
                    }
                );
                femalePersons = parseInt(femalePersons.length);
                console.log(femalePersons);
                this.setState({
                    persons: persons,
                    femalePersons: femalePersons,
                })
            });
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }

    handleClick = openItemId => this.setState({
        openItemId: this.state.openItemId === openItemId ? null : openItemId
    })

    render() {
        let filteredPersons = this.state.persons.filter(
            (person) => {
                return person.name.first.toLowerCase().indexOf(
                    this.state.search.toLowerCase()) !== -1;
            }
        );
        const persons = filteredPersons.map((person) => {
            return <Item
                key={person.id}
                person={person}
                isOpen={this.state.openItemId === person.id}
                onButtonClick={this.handleClick.bind(this, person.id)}
            />;
        });
        console.log(this.state.openItemId);
        console.log('femalePersons= ' + this.state.femalePersons); // Здесь значение 0
        return (
            <div className="itemBlock">
                <input type="text" placeholder="Search first name..."
                    value={this.state.search}
                    onChange={this.updateSearch.bind(this)}
                />
                <div>{persons}</div>
                <button onClick={this.showChart} >
                    Chart
                </button>
                {this.state.visibleChart ?
                    <Chart chartData={{
                        labels: ['Male', 'Female'],
                        datasets: [
                            {
                                label: 'Gender users',
                                data: [
                                    this.state.numberOfPersons - this.state.femalePersons,
                                    this.state.femalePersons // Здесь значение 0
                                ],
                                backgroundColor: [
                                    'rgba(54, 162, 235, 0.6)',
                                    'rgba(25, 25, 25, 0.6)'
                                ]
                            }
                        ]
                    }} />
                : ''}
                {/*<div>{this.state.femalePersons}</div> Здесь правильное значение*/}
            </div>
        )
    }
}
