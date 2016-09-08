    var Hw1=React.createClass({
        render:function(){
            return React.DOM.div(null,this.props.name);
        }
    });
    var Hw2=React.createClass({
        render:function(){
            return React.DOM.div(null,this.props.name);
        }
    });
    var Hw=React.createClass({
        render:function(){
            return React.DOM.div(null,this.props.name);
        }
    });
    var names=[<Hw1 name='1'/>,<Hw2 name='2'/>];
    ReactDOM.render(
        <div>
        {
            names.map(function(name){
                return <Hw name={name}/>
            })
        }
        </div>,
        document.getElementById("container")
    );
