import React from "react";

import Multiselect  from './Components/Widgets/MyMultiselect';


const Layout = () => {
  return (
    <React.Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">React Examples</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div class="jumbotron jumbotron-fluid">
              <div class="container">
                <h1 class="display-4">ReactJS Components</h1>
                <p class="lead">
                  <blockquote className="blockquote text-right">
                    <p className="mb-0">
                      A JavaScript library for building user interfaces
                    </p>
                    <footer className="blockquote-footer">
                      I'm another Full Stack Developer, passionate about React
                      Framework. <cite> David Fernández Puentes</cite>
                    </footer>
                  </blockquote>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-2"></div>
          <div className="col-8 justify-content-center">
            <h4>Multiselect component</h4>
            <Multiselect />
          </div>
          <div className="col-2"></div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layout;
