if (window.Portfolio === undefined) {window.Portfolio = {}; }
(function() {

  class ResumeComponent extends React.Component {
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
       <section className="section-margin">
        <h1>David Kurth</h1>
        <h2>github:</h2>
        <h2>portfolio:</h2>
        <h2>linkedIn:</h2>
        <div className="ending-bar"></div>
       </section>
       <section className="section-margin">
        <h1>Summary of Qualifications</h1>
        <div className="ending-bar"></div>
       </section>
       <section className="section-margin">
        <h1>Work Experience</h1>
        <div className="ending-bar"></div>
       </section>
       <section className="section-margin">
        <h1>Education</h1>
        <div className="ending-bar"></div>
       </section>
     </div>
    }
  }

Portfolio.ResumeComponent = ResumeComponent;

})();
