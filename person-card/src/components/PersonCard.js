import React, { Component} from 'react';

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            age: this.props.age,
            hairColor: this.props.hairColor


        };
    }
    render() {
        return ( <div>

<h1>{ this.props.lastName }, { this.props.firstName }</h1>

<p>Age: {this.state.age}</p>
<p>Hair Color: {this.state.hairColor}</p>


<button onClick={ ()=> { this.setState({ age: this.state.age +1})}  }>Birthday Button for {this.props.firstName} {this.props.lastName}</button>


{/* <button onClick={ ()=> { this.setState({ hairColor:this.state.hairColor == "Red" ? "Black" :"Red"
})}  }>Change color</button> */}

        </div>);
    }
}
export default PersonCard;