var React = require('react');


var DisplayList = React.createClass({

  displayItem: function(item) {
      return <li>{item}  <a href='#' onClick={this.props.handleDelete.bind(item)}>Delete</a></li>
  },

  render: function() {
    return <ul>
              {this.props.items.map(this.displayItem)}
           </ul>
  }

});



var App = React.createClass({

  getInitialState: () => {
    return { items: [], text: '' }
  },

  handleSubmit: function(e) {
    e.preventDefault();

    var text = this.state.text;
    var items = this.state.items.concat([text]);
    this.setState({ items: items, text: '' });
  },

  handleChange: function(e) {
    var text = e.target.value;
    this.setState({ text: text });
  },

  handleDelete: function(itemToDelete) {
    var newItems = this.state.items.filter(function(item) {
      return item != itemToDelete
    });

    this.setState({items: newItems});
  },

  render: function () {
    return (

      <div>
        <h3>TODO</h3>

        <DisplayList items={this.state.items} handleDelete={this.handleDelete} />

        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.text}></input>
          <button>Submit</button>
        </form>
      </div>

    )
  }
});

module.exports = App;
