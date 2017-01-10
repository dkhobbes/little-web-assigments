window.SW = window.SW || {};
(function() {

class InputComponent extends React.Component {

  constructor(){
    super();
    this.state= {
      apiResult:{
        items:[]
      }
    }
  }



  keyUpHappening(evt) {
      console.log('key up happening', evt.keyCode);

      if (evt.keyCode === 13) {
        $.ajax({
          url: 'https://api.github.com/search/users?q=' + this.myInput.value
        })
        .done((data) => {
          console.log('github data?', data);
          this.setState({
            apiResult:data
          });
        });
      }
    }

  render() {
    console.log('render', this.state);

    return <div className="search-bar">
    <input onKeyUp={(evt) => { this.keyUpHappening(evt); }} ref={(input) => { this.myInput = input; }} />

    <ul className="results">
      {this.state.apiResult.items.map((info) => {return <li className="box" key={info.id}>
        <div className="name-api">{info.login}</div>
        <div className="login-api"><a target="_blank" href={info.html_url}>{info.html_url}</a></div>
      </li>; })}
    </ul>

    </div>
  }
}
  SW.InputComponent = InputComponent;

})();
