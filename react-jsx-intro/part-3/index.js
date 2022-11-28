class App extends React.Component {
    render() {
        return (
            <div>
                <Person name="AJ" age={23} hobbies={["skateboarding", "piano", "philsophy"]}/>
                <Person name="John" age={16} hobbies={["cooking", "watching football"]}/>
                <Person name="Alexander" age={17} hobbies={["coding"]}/>
                <Person name="Josephine" age={29} hobbies={["reading", "writing", "boxing", "bullfighting"]}/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))