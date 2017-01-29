window.Portfolio = window.Portfolio || {};
(function(){
class HomeComponent extends React.Component {
  render(){
    return <div>
    <header>
      <section id="banner"></section>
      <div className="nav-tab nav-1">home</div>
      <div className="nav-tab">resume</div>
    </header>
    <section>
      <h1 id="name-holder">DAVID KURTH</h1>
      <p className="info-me" id="space">Front End Developer</p>
      <div className="ending-bar"></div>
    </section>
    </div>
  }
}

Portfolio.HomeComponent = HomeComponent;
})();
