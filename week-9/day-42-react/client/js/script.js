var mountNode = document.querySelector('#react-root');

class LunchPlace extends React.Component{
  render() {
    return <li className="lunch-component">
    {this.props.place.name}: {this.props.place.location}
      <ol>
        {/*Now I have comments*/}
        {this.props.place.favoriteFoods.map((food, index) => {return <li key={index}>{food}</li>; })}
      </ol>
    </li>
  }
}

class GithubApiSample extends React.Component {

  constructor() {
    super();

    this.state= {
      apiResult: {
        results: []
      }
    };
  }

  clicky() {
    $.ajax({
      url: 'http://swapi.co/api/people'
    })
    .done((data) => {
      console.log('got data', data);

      this.setState({
        apiResult: data
      });

    });
  }

  render() {
    console.log('rendering star wars');
    return <div className="github-api-class">
      <h1>Github!</h1>
      <button onClick={() => this.clicky()}>load data</button>

      <ul>{this.state.apiResult.results.map((char, index) => { return <li key={char.url}>{char.name}</li>; })}</ul>

    </div>
  }
}


class AppComponent extends React.Component {
  render() {
    var data = [
      {
        id: 1,
        name: 'Metropolitan Cafe',
        location: 'In this building',
        favoriteFoods: ['turkey sandwich', 'reuben']
      },
      {
        id: 2,
        name: "Mudhen",
        location: "Farmers Market",
        favoriteFoods: ['steak rice bowl']

      },
      {
        id: 3,
        name: "Chophouse Burger",
        location: "Main Street",
        favoriteFoods: ['buffalo burger', 'truffle fries']
      }
    ]

    return <div>
        <ul className="lunch-component">
          {data.map((place) => { return <LunchPlace key={place.id} place={place} />; })}
        </ul>

        <GithubApiSample />
        </div>;
  }
}

ReactDOM.render(<AppComponent />, mountNode);
