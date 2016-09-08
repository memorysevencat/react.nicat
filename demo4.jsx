   var NodeList=React.createClass({
       render:function(){
           return (
                   <ol>
                   {
                       React.Children.map(this.props.children,function(child){
                            return <li>{child}</li>;
                       })
                   }
                   </ol>
           );
       }
   });
    ReactDOM.render(
            <NodeList>
                <span>1111</span>
                <span>2222</span>
            </NodeList>,
            document.getElementById('container')
    )
