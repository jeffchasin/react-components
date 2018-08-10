// TODO
class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = { bold: false };
    this.handleHover = this.handleHover.bind(this);
  }

  handleHover() {
    this.setState({
      bold: !this.state.bold
    });
  }

  // Because we used curly braces with this arrow function
  // we have to write an explicit `return` statement
  render() {

    var style = {
     fontWeight: this.state.bold ? 'bold' : 'normal'
    };

    return (
      <li style={style} onMouseOver={this.handleHover} onMouseOut={this.handleHover}>{this.props.grocery}</li>
    )
  }
}

var GroceryList = (props) => (
  <div>
    <h2>My Grocery List</h2>
    <ul>
      {props.groceries.map(grocery =>
        <GroceryListItem grocery={grocery} />
      )}
    </ul>
  </div>
);

ReactDOM.render(
<GroceryList
  groceries={['Coffee', 'More Coffee', 'Espresso', 'Flat White', 'Doppio']} />,
  document.getElementById('app')
);
