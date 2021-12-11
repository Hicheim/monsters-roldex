import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
    constructor() {
        super();
        this.state = {
            monsters: [
                {
                    name: 'Hamdani',
                    id: '1'
                },
                {
                    name: 'Khatemi',
                    id: '2'
                },
                {
                    name: 'Chaalal',
                    id: '3'
                },
                {
                    name: 'Kasri',
                    id: '4'
                }

            ]
        };
    }

    render() {
        return (
            <div className="App">
                {
                    this.state.monsters.map(monster => <h1 key={monster.id}>{monster.name}</h1>)
                }
 </div>
        );
    }
}
export default App;
