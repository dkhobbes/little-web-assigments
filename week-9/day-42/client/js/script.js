(function() {
  var mountNode = document.querySelector('#react-root');

  class PersonComponent extends React.Component {
    constructor() {
        super();
        console.log('firing PersonComponent constructor');

        this.state = {
          currentClass:''
        };
    }

    toggle() {

      if (this.state.currentClass === 'on') {
        this.setState({
          currentClass: ''
        });
      }
      else{
        this.setState({
          currentClass:'on'
        });
      }
    }

    render() {
      console.log('this is the props for the Component: ', this.props);
      return <li className={this.state.currentClass} onClick={() => { this.toggle(); }}>
        <div>First Name: {this.props.firstName}</div>
        <div>Last Name: {this.props.lastName}</div>
        <div>Age: {this.props.age}</div>
      </li>
    }
  }

  class AppComponent extends React.Component {
    divClick() {
      console.log('you clicked on that div');
    }

    render() {

      var data = [{
        firstName: 'jane',
        lastName: 'doe',
        age: 35,
        id: 1
      },
      {
        firstName: 'jimmy',
        lastName: 'neutron',
        age: 10,
        id: 2
      },
      {
        firstName: 'Chad',
        lastName: 'OchoCinco',
        age: 45,
        id: 3

      }
    ];

      var theListItemComponenets = data.map((person) => {
        console.log('what is this?', this.state);
        return <PersonComponent key={person.id} firstName={person.firstName} lastName={person.lastName} age={person.age} />;
      });

      var myGreeting = "React works after break!";

      return <div >
        <p onClick={() => {console.log('hello');}}>{myGreeting}</p>
        <div onClick={() => { this.divClick(); }}>click me as well</div>
        <ul className="bolded">
          {theListItemComponenets}
        </ul>
      </div>;
    }
  }

  var MyCoolObject = {};

  ReactDOM.render(<AppComponent />, mountNode);

})();

var MyCoolObject2 = {};
