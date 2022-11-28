class Tweet extends React.Component {
    render() {
        return (
            <div>
                <h2>{this.props.message}</h2>
                <p>Posted by {this.props.name} @{this.props.username} on {this.props.date}</p>
            </div>
        )
    }
}