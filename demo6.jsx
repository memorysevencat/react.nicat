 var data='abcdefg'
 var MyTitle=React.createClass({
     propTypes:{
         title:React.PropTypes.string.isRequired
     },
     render:function(){
         return <h1>{this.props.title}</h1>
     }
 })
 ReactDOM.render(
    <MyTitle title={data}/>,
         document.getElementById("container")
 )
