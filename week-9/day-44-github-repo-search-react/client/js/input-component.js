window.SW = window.SW || {};
(function() {

class InputComponent extends React.Component {

  keyUpHappening(evt) {
      console.log('key up happening', evt.keyCode);

      if (evt.keyCode === 13) {
        $.ajax({
          url: 'https://api.github.com/search/users?q=' + this.myInput.value
        })
        .done((data) => {
          console.log('github data?', data);
        });
      }
    }

  render() {
    return <div>
      Input goes here
    <input onKeyUp={(evt) => { this.keyUpHappening(evt); }} ref={(input) => { this.myInput = input; }} />

    </div>
  }
}
  SW.InputComponent = InputComponent;

})();
