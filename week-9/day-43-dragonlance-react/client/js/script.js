var mountNode = document.querySelector('#react-root');

class AppComponent extends React.Component {

  constructor() {
    super();

    this.state= {
      apiResult: {
        characters: []
      },
        characterClass: ''
    };
  }

  clicky() {
      $.ajax({
        url: 'http://localhost:5000/api/dragonlance'
      })
      .done((data) => {
        console.log('got data', data);

        this.setState({
          apiResult:data,
          characterClass: "characters-api"
        });
      });
    }

  render() {
    return <div className="dragonlance-api">
      <button onClick={() => this.clicky()}>load data</button>
      <ul className={this.state.characterClass}>{this.state.apiResult.characters.map((char, index) => { return <li key={index}><div className="name-api">{char.name}</div><div className="race-api">{char.race}</div><div className="description-api">{char.description}</div></li>; })}</ul>
    </div>
  }
}

ReactDOM.render(<AppComponent />, mountNode);
