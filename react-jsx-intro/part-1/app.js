class App extends React.Component {
    render() {
        return (
            <div>
                <FirstComponent/>
                <NamedComponent name="AJ"/>
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById("root"))