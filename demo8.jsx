  var Lb=React.createClass({
        getInitialState:function(){
            return {liked:false};
        },
        handleClick:function(event)
        {
            this.setState({liked:!this.state.liked});
        },
        render:function(){
            var text=this.state.liked?'like':'haven\'t liked';
            return(
                    <p onClick={this.handleClick}>
                    u {text} this.click to toggle
                    </p>
            );
        }
    });
    ReactDOM.render(
           <Lb />,
            document.getElementById("container")
    );
