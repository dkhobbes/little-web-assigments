var mountNode = document.querySelector('#some-selector');

class AnotherComponent extends React.Component {
  render() {
    return <div className="this-class">You greated a fellow named {this.props.name}</div>;
  }
}

class ThirdComponent extends React.Component {
  render() {
    return <div>a third thing</div>;
  }
}



class HelloMessage extends React.Component {
  render() {
    var name = 'Johnny';
    return <div>Hello {name} Kurth!
      <AnotherComponent name = {name} />
      <ThirdComponent />

    </div>;
  }
}

ReactDOM.render(<HelloMessage />, mountNode);
