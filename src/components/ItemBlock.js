import React from 'react';
import axios from "axios";
import './ItemBlock.css';
import Item from './Item/Item';


export default class PersonList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [],
        };
    }

    componentDidMount() {
        axios
            .get(
                'https://randomuser.me/api/?results=10',
            )
            .then((response) => {
                console.log(response.data.results);
                const persons = [];
                for (let key in response.data.results) {
                    persons.push({ ...response.data.results[key], id: key });
                }

                this.setState({
                    persons: persons,
                })
            });
    }



    render() {
        const persons = this.state.persons.map((person) => {
            return <Item key={person.id} person={person} />;
        })
        return (
            <div className="itemBlock">
                
                <div>{persons}</div>
                
                
            </div>
        )
    }
}












//function ItemBlock() {
 
//    return (
//        <div className="itemBlock">
//            <Item item_1={data[0].results} />
//            <div>
//                hello
//            </div>
//        </div>
//    );
//}

//export default ItemBlock;