var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {
  constructor() {
    super();
    console.log('firing constructor');

    this.state= {
      currentClass:'start-state'
    };
  }

  toggle() {
    if(this.state.currentClass === 'on-state') {
      this.setState({
        currentClassc: 'start-state'
      });
    }
    else {
      this.setState({
        currentClass: 'on-state'
      });
    }
  }

  render() {
    return <div className={this.state.currentClass} onClick={() => {this.toggle(); }}>"Click this to toggle in React!"</div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
