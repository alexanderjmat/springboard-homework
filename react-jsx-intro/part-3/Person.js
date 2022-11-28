class Person extends React.Component {
    render() {
        let votingMessage;
        let name;
        if (this.props.age > 18) {
            votingMessage = <h3>please go vote!</h3>
        } else {
            votingMessage = <h3>You must be 18</h3>
        }
        if (this.props.name.length > 8) {
            name = this.props.name.slice(0, 6)
        } else {
            name = this.props.name
        }
        console.log(name)

        return (
            <div>
                <p>Learn some information about this person</p>
                <ul>
                    <li>Age: {this.props.age}</li>
                    <li>Name: {name}</li>
                </ul>
                {votingMessage}
                <div>
                    hobbies:
                    <ul>
                        {this.props.hobbies.map(h => <li>{h}</li>)}
                    </ul>
                </div>
    
            </div>
        )
    }
}