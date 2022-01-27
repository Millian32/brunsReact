import React from 'react';
import ReactDOM from 'react-dom';
import './Content/kendo/2014.3.1119/kendo.common.min.css';
import './Content/kendo/2014.3.1119/kendo.mobile.all.min.css';
import './Content/kendo/2014.3.1119/kendo.dataviz.min.css';
import './Content/kendo/2014.3.1119/kendo.metro.min.css';
import './Content/kendo/2014.3.1119/kendo.dataviz.metro.min.css';

// import './Scripts/kendo/2014.3.1119/jquery.min.js';
// import './Scripts/kendo/2014.3.1119/jszip.min.js';
// import './Scripts/kendo/2014.3.1119/kendo.all.min.js';
// import './Scripts/kendo/2014.3.1119/kendo.aspnetmvc.min.js';
// import './Scripts/kendo.modernizr.custom.js';

// import './UnifyTheme/Unify-v1.7/HTML/assets/plugins/bootstrap/css/bootstrap.min.css';
// import './UnifyTheme/Unify-v1.7/HTML/assets/css/style.css';

// import './UnifyTheme/Unify-v1.7/HTML/assets/css/headers/header-default.css';
// import './UnifyTheme/Unify-v1.7/HTML/assets/css/footers/footer-v1.css';


class Header extends React.Component {
  render() {
    return (
      <div float="left">
        <h1 style={{ "color": "darkseagreen" }}>Bruns Headering Inc.</h1>
        <h3>COMMERCIAL GEOTHERMAL SYSTEMS</h3>
        <br></br>
        <p></p>
        <nav>
          <HomePageMenu />
        </nav>
      </div>
    );
  }
}

class HomePageMenu extends React.Component {
  render() {
    return (
      <div class="wrapper">
        <div class="header">
          <div class="container">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
              <span class="sr-only">Toggle navigation</span>
              <span class="fa fa-bars"></span>
            </button>
          </div>

          <div class="collapse navbar-collapse mega-menu navbar-responsive-collapse">
            <div class="container">
              <ul class="nav navbar-nav">

                <li class="dropdown active">
                  <li class="active">
                    <a href='/Index/Home'>Home</a>
                  </li>
                </li>

                  <li class="dropdown active">
                    <a href="javascript:void(0);" class="dropdown-toggle" data-toggle="dropdown">
                      List of Jobs
                    </a>
                    <ul class="dropdown-menu">
                      <li class="active"><a href='/ListOfJobs_Edu/Home'>Educational</a></li>
                      <li class="active"><a href='/ListOfJobs_Gov/Home'>Government</a></li>
                      <li class="active"><a href='/ListOfJobs_Heal/Home'>Healthcare</a></li>
                      <li class="active"><a href='/ListOfJobs_Comm/Home'>Community</a></li>
                      <li class="active"><a href='/ListOfJobs_House/Home'>Housing</a></li>
                      <li class="active"><a href='/ListOfJobs_Bus/Home'>Business</a></li>
                    </ul>
                  </li>

                  <li class="dropdown active">
                    <a href="javascript:void(0);" class=" dropdown-toggle" data-toggle="dropdown">
                      Project Photos
                    </a>
                    <ul class="dropdown-menu">
                      <li class="active"><a href='/PicsListView/Home/CampRipley'>Camp Ripley</a></li>
                      <li class="active"><a href='/PicsListView/Home/IowaPrison'>Iowa State Maximum Security Prison</a></li>
                      <li class="active"><a href='/PicsListView/Home/LincolnSchool'>Lincoln NE Public School District Office</a></li>
                      <li class="active"><a href='/PicsListView/Home/Cornhuskers'>Nebraska Cornhuskers Housing Project Geo Addition</a></li>
                    </ul>
                  </li>

                  <li class="dropdown active">
                    <li class="active">
                      <a href='/WhatIsGeothermal/Home'>What is Geothermal</a>
                    </li>
                  </li>  

                    <li class="dropdown active">
                      <li class="active">
                        <a href='/Contact/Home'>Contact</a>
                        <a href='/Index/Home/#contactinfo'>Contact</a>
                      </li>
                    </li>

                </ul>

            </div>
          </div>

        </div>
      </div>
    );
  }
}

ReactDOM.render(<Header />, document.getElementById("root"));
