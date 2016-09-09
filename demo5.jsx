    var Hv=React.createClass({
        render:function(){
            return <div><h1>{this.props.name}</h1><h1>{this.props.name}</h1></div>
        }
    });
    ReactDOM.render(
            <Hv name='1'/>,
            document.getElementById("container")
    )
