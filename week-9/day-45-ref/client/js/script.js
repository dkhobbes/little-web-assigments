var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {

  getData(query) {
    $.ajax({
      url: 'https://api.github.com/search/users?q=' + query
    })
    .done((data) => {
      console.log('got the data', data);
    });
  }

  componentDidMount() {
    this.theInput.focus();
  }

  click() {
    console.log('the input', this.theInput, this.theInput.value);
    // this.theInput.focus();
    this.getData(this.theInput.value)
  }

  keyUPHappened(evt) {
    console.log(evt.keyCode);
    if (evt.keyCode === 13) {
      this.getData(evt.target.value);
    }
  }

  render() {
    return <div>
      <input placeholder='input goes here' ref={(theDomElement) => { this.theInput = theDomElement; }} />
      <button onClick={() => {this.click(); }}>focus</button>
      <input placeholder='put something  in and hit enter'
      onKeyUp={(evt) => {this.keyUPHappened(evt); }} />

    </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
