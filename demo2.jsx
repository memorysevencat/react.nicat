    var names=['a','b','c'];
    var Hw=React.createClass({
        render:function(){
            return React.DOM.div(null,this.props.names);
        }
    });
    ReactDOM.render(
        <div>
        {
            names.map(function(name){
                return  <Hw names={name}/>
            })
        }
        </div>,
        document.getElementById("container")
    );
