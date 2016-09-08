    var HW = React.createClass({
        render: function() {
            return React.DOM.h1(null, this.props.name);
        }
    });
    ReactDOM.render(
           <HW name='helloworld'/>,
            document.getElementById('container')
    );
