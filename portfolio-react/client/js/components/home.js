if (window.Portfolio === undefined) {window.Portfolio = {}; }
(function(){
class HomeComponent extends React.Component {

    constructor(){
     super();
   }

  render(){
    return <div>
    <header>
      <section id="banner"></section>
      <div className="nav-tab nav-1"><ReactRouter.Link to={'/'}>home</ReactRouter.Link></div>
      <div className="nav-tab"><ReactRouter.Link to={'/resume'}>resume</ReactRouter.Link></div>
    </header>
    <section>
      <h1 id="name-holder">DAVID KURTH</h1>
      <p className="info-me" id="space">Front End Developer</p>
      <div className="ending-bar"></div>
    </section>
    <section className="info-me">
      <div className="container">
      <div className="client-height">
        <div className="shown">
          <h1>Summary</h1>
          <p>This is my path. Originally an IT Recruiter for over 5 years I have always had an interest in creating and making things. I started out as a Graphic Design student in college for 3 years before I missed the cut. I then went on to get an Advertising degree. I like to brew my own beer.</p>
          <h1>Skills</h1>
          <p>My skills involve working with HTML5, CSS3, JS, Node.JS, React, and Express. I am a quick learner, and love to learn. I am currently reading up on Express, and mongoDB.</p>
          <p>To read more about me click below.</p>
        </div>
        <div className="hidden">
          <p>My other skills include an interest in .....</p>
        </div>
      </div>
      </div>
      <div className="read-more-trigger">
         <span className="arrow">&#x25be;</span>
         <span className="read-more">Read more</span>
         <span className="read-less">Read less</span>
      </div>
      <div className="ending-bar"></div>
    </section>

    </div>
  }
}

Portfolio.HomeComponent = HomeComponent;
})();
