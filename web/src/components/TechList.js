import React,{ Component } from 'react'

class TecList extends Component {
    state={
        techs:[
            'Node.js',
            'Reactjs',
            'React Native'
        ]
    };

    render() {
        return (
            <ul>
                <li>Node.js</li>
                <li>React</li>
                <li>React Native</li>
            </ul>
        );
    }

}

export default TecList;