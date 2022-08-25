
var SearchBox = React.createClass({ render: function() {
  return <input type="search" name="p" onChange={this.handleOnChange} />;
  },
  handleOnChange: function(event) { // make ajax call
    event.persist()
    this.delayedCallback(event)
  },
  componentWillMount() {
    this.delayedCallback = _.debounce(function(event){
      ajax.api(event.target.value)
    }, 1000)
  },
});
