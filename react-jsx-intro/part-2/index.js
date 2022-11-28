class App extends React.Component {
    render() {
        return (
            <div>
                <Tweet username="test123" name="John" date="11/28/2022" message="Hello, world!"/>
                <Tweet username="nerdyguy3point14" name="Alex" date="11/28/2022" message="Math is awesome"/>
                <Tweet username="cinematicattic" name="Theresa" date="11/28/2022" message="Come to our movie shop for a great sale this weekend!"/>
            </div>

        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))