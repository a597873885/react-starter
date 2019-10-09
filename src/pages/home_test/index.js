import './index.scss'
import React from 'react'
import { withRouter } from 'react-router-dom'

// 壳组件
import Shell from 'Root/components/shell'
import Meta from 'Root/components/meta'
import PostsList from 'Root/components/posts/list'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="main-content">

                
          <nav className="navbar navbar-expand-md navbar-light d-none d-md-flex" id="topbar">
            <div className="container-fluid">
              
              <div className="navbar-user">

                
                <div className="dropdown mr-4 d-none d-md-flex">

                  
                  <a href="#" className="text-muted" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <span className="icon active">
                      <i className="fe fe-bell"></i>
                    </span>
                  </a>

                  
                  <div className="dropdown-menu dropdown-menu-right dropdown-menu-card">
                    <div className="card-header">
                      <div className="row align-items-center">
                        <div className="col">
                  
                          
                          <h5 className="card-header-title">
                            Notifications
                          </h5>

                        </div>
                        <div className="col-auto">
                  
                          
                          <a href="#!" className="small">
                            View all
                          </a>

                        </div>
                      </div> 
                    </div> 
                    <div className="card-body">

                      
                      <div className="list-group list-group-flush my-n3">
                        <a className="list-group-item px-0" href="#!">
                
                          <div className="row">
                            <div className="col-auto">
                      
                              
                              <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"/>
                              </div>

                            </div>
                            <div className="col ml-n2">
                      
                              
                              <div className="small text-muted">
                                <strong className="text-body">Dianna Smiley</strong> shared your post with <strong className="text-body">Ab Hadley</strong>, <strong className="text-body">Adolfo Hess</strong>, and <strong className="text-body">3 others</strong>.
                              </div>

                            </div>
                            <div className="col-auto">

                              <small className="text-muted">
                                2m
                              </small>
                      
                            </div>
                          </div> 

                        </a>
                        <a className="list-group-item px-0" href="#!">

                          <div className="row">
                            <div className="col-auto">
                      
                              
                              <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/avatar-2.jpg" alt="..." className="avatar-img rounded-circle"/>
                              </div>

                            </div>
                            <div className="col ml-n2">
                      
                              
                              <div className="small text-muted">
                                <strong className="text-body">Ab Hadley</strong> reacted to your post with a 😍
                              </div>

                            </div>
                            <div className="col-auto">

                              <small className="text-muted">
                                2m
                              </small>
                      
                            </div>
                          </div> 

                        </a>
                        <a className="list-group-item px-0" href="#!">

                          <div className="row">
                            <div className="col-auto">
                      
                              
                              <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/avatar-3.jpg" alt="..." className="avatar-img rounded-circle"/>
                              </div>

                            </div>
                            <div className="col ml-n2">
                      
                              
                              <div className="small text-muted">
                                <strong className="text-body">Adolfo Hess</strong> commented <blockquote className="text-body">“I don’t think this really makes sense to do without approval from Johnathan since he’s the one...” </blockquote>
                              </div>

                            </div>
                            <div className="col-auto">

                              <small className="text-muted">
                                2m
                              </small>
                      
                            </div>
                          </div> 

                        </a>
                        <a className="list-group-item px-0" href="#!">

                          <div className="row">
                            <div className="col-auto">
                      
                              
                              <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/avatar-4.jpg" alt="..." className="avatar-img rounded-circle"/>
                              </div>

                            </div>
                            <div className="col ml-n2">
                      
                              
                              <div className="small text-muted">
                                <strong className="text-body">Daniela Dewitt</strong> subscribed to you.
                              </div>

                            </div>
                            <div className="col-auto">

                              <small className="text-muted">
                                2m
                              </small>
                      
                            </div>
                          </div> 

                        </a>
                        <a className="list-group-item px-0" href="#!">

                          <div className="row">
                            <div className="col-auto">
                      
                              
                              <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/avatar-5.jpg" alt="..." className="avatar-img rounded-circle"/>
                              </div>

                            </div>
                            <div className="col ml-n2">
                      
                              
                              <div className="small text-muted">
                                <strong className="text-body">Miyah Myles</strong> shared your post with <strong className="text-body">Ryu Duke</strong>, <strong className="text-body">Glen Rouse</strong>, and <strong className="text-body">3 others</strong>.
                              </div>

                            </div>
                            <div className="col-auto">

                              <small className="text-muted">
                                2m
                              </small>
                      
                            </div>
                          </div> 

                        </a>
                        <a className="list-group-item px-0" href="#!">

                          <div className="row">
                            <div className="col-auto">
                      
                              
                              <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/avatar-6.jpg" alt="..." className="avatar-img rounded-circle"/>
                              </div>

                            </div>
                            <div className="col ml-n2">
                      
                              
                              <div className="small text-muted">
                                <strong className="text-body">Ryu Duke</strong> reacted to your post with a 😍
                              </div>

                            </div>
                            <div className="col-auto">

                              <small className="text-muted">
                                2m
                              </small>
                      
                            </div>
                          </div> 

                        </a>
                        <a className="list-group-item px-0" href="#!">

                          <div className="row">
                            <div className="col-auto">
                      
                              
                              <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/avatar-7.jpg" alt="..." className="avatar-img rounded-circle"/>
                              </div>

                            </div>
                            <div className="col ml-n2">
                      
                              
                              <div className="small text-muted">
                                <strong className="text-body">Glen Rouse</strong> commented <blockquote className="text-body">“I don’t think this really makes sense to do without approval from Johnathan since he’s the one...” </blockquote>
                              </div>

                            </div>
                            <div className="col-auto">

                              <small className="text-muted">
                                2m
                              </small>
                      
                            </div>
                          </div> 

                        </a>
                        <a className="list-group-item px-0" href="#!">

                          <div className="row">
                            <div className="col-auto">
                      
                              
                              <div className="avatar avatar-sm">
                                <img src="assets/img/avatars/profiles/avatar-8.jpg" alt="..." className="avatar-img rounded-circle"/>
                              </div>

                            </div>
                            <div className="col ml-n2">
                      
                              
                              <div className="small text-muted">
                                <strong className="text-body">Grace Gross</strong> subscribed to you.
                              </div>

                            </div>
                            <div className="col-auto">

                              <small className="text-muted">
                                2m
                              </small>
                      
                            </div>
                          </div> 

                        </a>
                      </div>
              
                    </div>
                  </div> 

                </div>

                
                <div className="dropdown">

                  
                  <a href="#" className="avatar avatar-sm avatar-online dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="assets/img/avatars/profiles/avatar-1.jpg" alt="..." className="avatar-img rounded-circle"/>
                  </a>

                  
                  <div className="dropdown-menu dropdown-menu-right">
                    <a href="profile-posts.html" className="dropdown-item">Profile</a>
                    <a href="settings.html" className="dropdown-item">Settings</a>
                    <hr className="dropdown-divider"/>
                    <a href="sign-in.html" className="dropdown-item">Logout</a>
                  </div>

                </div>

              </div>

            </div>
          </nav>



          <div className="header bg-dark pb-5">
          <div className="container-fluid">

            
            <div className="header-body">
              <div className="row align-items-end">
                <div className="col">
                  
                  
                  <h6 className="header-pretitle text-secondary">
                    Overview
                  </h6>

                  
                  <h1 className="header-title text-white">
                    Performance
                  </h1>

                </div>
                <div className="col-auto">
                  
                  
                  <ul className="nav nav-tabs header-tabs">
                    <li className="nav-item" data-toggle="chart" data-target="#headerChart" data-update='{"data":{"datasets":[{"data":[0,10,5,15,10,20,15,25,20,30,25,40]}]}}' data-prefix="$" data-suffix="k">
                      <a href="#" className="nav-link text-center active" data-toggle="tab">
                        <h6 className="header-pretitle text-secondary">
                          Earnings
                        </h6>
                        <h3 className="text-white mb-0">
                          $19.2k
                        </h3>
                      </a>
                    </li>
                    <li className="nav-item" data-toggle="chart" data-target="#headerChart" data-update='{"data":{"datasets":[{"data":[50,75, 35,25,55,87,67,53,25,80,87,45]}]}}' data-prefix="" data-suffix="k">
                      <a href="#" className="nav-link text-center" data-toggle="tab">
                        <h6 className="header-pretitle text-secondary">
                          Sessions
                        </h6>
                        <h3 className="text-white mb-0">
                          92.1k
                        </h3>
                      </a>
                    </li>
                    <li className="nav-item" data-toggle="chart" data-target="#headerChart" data-update='{"data":{"datasets":[{"data":[40,57,25,50,57,32,46,28,59,34,52,48]}]}}' data-prefix="" data-suffix="%">
                      <a href="#" className="nav-link text-center" data-toggle="tab">
                        <h6 className="header-pretitle text-secondary">
                          Bounce
                        </h6>
                        <h3 className="text-white mb-0">
                          50.2%
                        </h3>
                      </a>
                    </li>
                  </ul>

                </div>
              </div> 
            </div> 

            
            <div className="header-footer">

              
              <div className="chart">
                <canvas id="headerChart" className="chart-canvas"></canvas>
              </div>

            </div>

          </div>
          </div> 


          <div className="container-fluid mt-n6">
          <div className="row">
            <div className="col-12 col-xl-8">
              
              
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                  
                      
                      <h4 className="card-header-title">
                        Orders
                      </h4>

                    </div>
                    <div className="col-auto mr-n3">
                      
                      
                      <span className="text-muted">
                        Show affiliate:
                      </span>

                    </div>
                    <div className="col-auto">

                      
                      <div className="custom-control custom-switch">
                        <input type="checkbox" className="custom-control-input" id="cardToggle" data-toggle="chart" data-target="#ordersChart" data-add='{"data":{"datasets":[{"data":[15,10,20,12,7,0,8,16,18,16,10,22],"backgroundColor":"#d2ddec","label":"Affiliate"}]}}'/>
                      </div>

                    </div>
                  </div> 

                </div>
                <div className="card-body">
                  
                  
                  <div className="chart">
                    <canvas id="ordersChart" className="chart-canvas"></canvas>
                  </div>

                </div>
              </div>

            </div>
            <div className="col-12 col-xl-4">

              
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                  
                      
                      <h4 className="card-header-title">
                        Devices
                      </h4>

                    </div>
                    <div className="col-auto">

                      
                      <ul className="nav nav-tabs nav-tabs-sm card-header-tabs">
                        <li className="nav-item" data-toggle="chart" data-target="#devicesChart" data-update='{"data":{"datasets":[{"data":[60,25,15]}]}}'>
                          <a href="#" className="nav-link active" data-toggle="tab">
                            All
                          </a>
                        </li>
                        <li className="nav-item" data-toggle="chart" data-target="#devicesChart" data-update='{"data":{"datasets":[{"data":[15,45,20]}]}}'>
                          <a href="#" className="nav-link" data-toggle="tab">
                            Direct
                          </a>
                        </li>
                      </ul>

                    </div>
                  </div> 

                </div>
                <div className="card-body">
                  
                  
                  <div className="chart chart-appended">
                    <canvas id="devicesChart" className="chart-canvas" data-target="#devicesChartLegend"></canvas>
                  </div>

                  
                  <div id="devicesChartLegend" className="chart-legend"></div>

                </div>
              </div>
              
            </div>
          </div> 
          <div className="row">
            <div className="col-12 col-lg-6 col-xl">
              
              
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">

                      
                      <h6 className="card-title text-uppercase text-muted mb-2">
                        Budget
                      </h6>
                      
                      
                      <span className="h2 mb-0">
                        $24,500
                      </span>

                      
                      <span className="badge badge-soft-success mt-n1">
                        +3.5%
                      </span>

                    </div>
                    <div className="col-auto">
                      
                      
                      <span className="h2 fe fe-dollar-sign text-muted mb-0"></span>

                    </div>
                  </div> 

                </div>
              </div>

            </div>
            <div className="col-12 col-lg-6 col-xl">
              
              
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">

                      
                      <h6 className="card-title text-uppercase text-muted mb-2">
                        Total Hours
                      </h6>
                      
                      
                      <span className="h2 mb-0">
                        763.5
                      </span>

                    </div>
                    <div className="col-auto">
                      
                      
                      <span className="h2 fe fe-briefcase text-muted mb-0"></span>

                    </div>
                  </div> 

                </div>
              </div>
                
            </div>
            <div className="col-12 col-lg-6 col-xl">
              
              
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">

                      
                      <h6 className="card-title text-uppercase text-muted mb-2">
                        Progress
                      </h6>

                      <div className="row align-items-center no-gutters">
                        <div className="col-auto">

                          
                          <span className="h2 mr-2 mb-0">
                            84.5%
                          </span>
                          
                        </div>
                        <div className="col">
                          
                          
                          <div className="progress progress-sm">
                            <div className="progress-bar" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                          </div>

                        </div>
                      </div> 

                    </div>
                    <div className="col-auto">
                      
                      
                      <span className="h2 fe fe-clipboard text-muted mb-0"></span>

                    </div>
                  </div> 

                </div>
              </div>
                
            </div>
            <div className="col-12 col-lg-6 col-xl">
              
              
              <div className="card">
                <div className="card-body">
                  <div className="row align-items-center">
                    <div className="col">

                      
                      <h6 className="card-title text-uppercase text-muted mb-2">
                        Effective Hourly
                      </h6>
                      
                      
                      <span className="h2 mb-0">
                        $85.50
                      </span>

                    </div>
                    <div className="col-auto">
                      
                      
                      <span className="h2 fe fe-clock text-muted mb-0"></span>

                    </div>
                  </div> 

                </div>
              </div>
                
            </div>
          </div> 
          <div className="row">
            <div className="col-12 col-xl-4">

              
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">
                      
                      
                      <h4 className="card-header-title">
                        Projects
                      </h4>

                    </div>
                    <div className="col-auto">

                      
                      <a href="#!" className="small">View all</a>
                      
                    </div>
                  </div> 
                </div>
                <div className="card-body">

                  <div className="row align-items-center">
                    <div className="col-auto">
                      
                      
                      <a href="project-overview.html" className="avatar avatar-4by3">
                        <img src="assets/img/avatars/projects/project-1.jpg" alt="..." className="avatar-img rounded"/>
                      </a>

                    </div>
                    <div className="col ml-n2">

                      
                      <h4 className="card-title mb-1">
                        <a href="project-overview.html">Homepage Redesign</a>
                      </h4>

                      
                      <p className="card-text small text-muted">
                        <time >Updated 5hr ago</time>
                      </p>
                      
                    </div>
                    <div className="col-auto">
                      
                      
                      <div className="dropdown">
                        <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                          <i className="fe fe-more-vertical"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#!" className="dropdown-item">
                            Action
                          </a>
                          <a href="#!" className="dropdown-item">
                            Another action
                          </a>
                          <a href="#!" className="dropdown-item">
                            Something else here
                          </a>
                        </div>
                      </div>
                      
                    </div>
                  </div> 

                  
                  <hr/>

                  <div className="row align-items-center">
                    <div className="col-auto">
                      
                      
                      <a href="project-overview.html" className="avatar avatar-4by3">
                        <img src="assets/img/avatars/projects/project-2.jpg" alt="..." className="avatar-img rounded"/>
                      </a>

                    </div>
                    <div className="col ml-n2">

                      
                      <h4 className="card-title mb-1">
                        <a href="project-overview.html">Travels & Time</a>
                      </h4>

                      
                      <p className="card-text small text-muted">
                        <time datetime="2018-05-24">Updated 3hr ago</time>
                      </p>
                      
                    </div>
                    <div className="col-auto">
                      
                      
                      <div className="dropdown">
                        <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                          <i className="fe fe-more-vertical"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#!" className="dropdown-item">
                            Action
                          </a>
                          <a href="#!" className="dropdown-item">
                            Another action
                          </a>
                          <a href="#!" className="dropdown-item">
                            Something else here
                          </a>
                        </div>
                      </div>
                      
                    </div>
                  </div> 

                  
                  <hr/>

                  <div className="row align-items-center">
                    <div className="col-auto">
                      
                      
                      <a href="project-overview.html" className="avatar avatar-4by3">
                        <img src="assets/img/avatars/projects/project-3.jpg" alt="..." className="avatar-img rounded"/>
                      </a>

                    </div>
                    <div className="col ml-n2">

                      
                      <h4 className="card-title mb-1">
                        <a href="project-overview.html">Safari Exploration</a>
                      </h4>

                      
                      <p className="card-text small text-muted">
                        <time datetime="2018-05-24">Updated 10hr ago</time>
                      </p>
                      
                    </div>
                    <div className="col-auto">
                      
                      
                      <div className="dropdown">
                        <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                          <i className="fe fe-more-vertical"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#!" className="dropdown-item">
                            Action
                          </a>
                          <a href="#!" className="dropdown-item">
                            Another action
                          </a>
                          <a href="#!" className="dropdown-item">
                            Something else here
                          </a>
                        </div>
                      </div>
                      
                    </div>
                  </div> 

                  
                  <hr/>

                  <div className="row align-items-center">
                    <div className="col-auto">
                      
                      
                      <a href="project-overview.html" className="avatar avatar-4by3">
                        <img src="assets/img/avatars/projects/project-5.jpg" alt="..." className="avatar-img rounded"/>
                      </a>

                    </div>
                    <div className="col ml-n2">

                      
                      <h4 className="card-title mb-1">
                        <a href="project-overview.html">Personal Site</a>
                      </h4>

                      
                      <p className="card-text small text-muted">
                        <time datetime="2018-05-24">Updated 4hr ago</time>
                      </p>
                      
                    </div>
                    <div className="col-auto">
                      
                      
                      <div className="dropdown">
                        <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                          <i className="fe fe-more-vertical"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a href="#!" className="dropdown-item">
                            Action
                          </a>
                          <a href="#!" className="dropdown-item">
                            Another action
                          </a>
                          <a href="#!" className="dropdown-item">
                            Something else here
                          </a>
                        </div>
                      </div>
                      
                    </div>
                  </div> 

                </div> 
              </div>             

            </div>
            <div className="col-12 col-xl-8">
              
              
              <div className="card">
                <div className="card-header">
                  <div className="row align-items-center">
                    <div className="col">

                      
                      <h4 className="card-header-title">
                        Goals
                      </h4>

                    </div>
                    <div className="col-auto">

                      
                      <a href="#!" className="btn btn-sm btn-white">
                        Export
                      </a>
                      
                    </div>
                  </div> 
                </div>
                <div className="table-responsive mb-0" data-toggle="lists" data-lists-values='["goal-project", "goal-status", "goal-progress", "goal-date"]'>
                  <table className="table table-sm table-nowrap card-table">
                    <thead>
                      <tr>
                        <th>
                          <a href="#" className="text-muted sort" data-sort="goal-project">
                            Goal
                          </a>
                        </th>
                        <th>
                          <a href="#" className="text-muted sort" data-sort="goal-status">
                            Status
                          </a>
                        </th>
                        <th>
                          <a href="#" className="text-muted sort" data-sort="goal-progress">
                            Progress
                          </a>
                        </th>
                        <th>
                          <a href="#" className="text-muted sort" data-sort="goal-date">
                            Due date
                          </a>
                        </th>
                        <th className="text-right">
                          Team
                        </th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody className="list">
                      <tr>
                        <td className="goal-project">
                          Update the API
                        </td>
                        <td className="goal-status">
                          <span className="text-warning">●</span> In progress
                        </td>
                        <td className="goal-progress">
                          55%
                        </td>
                        <td className="goal-date">
                          <time datetime="2018-10-24">07/24/18</time>
                        </td>
                        <td className="text-right">
                          <div className="avatar-group">
                            <a href="profile-posts.html" className="avatar avatar-xs" data-toggle="tooltip" title="Dianna Smiley">
                              <img src="assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="profile-posts.html" className="avatar avatar-xs" data-toggle="tooltip" title="Ab Hadley">
                              <img src="assets/img/avatars/profiles/avatar-2.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="profile-posts.html" className="avatar avatar-xs" data-toggle="tooltip" title="Adolfo Hess">
                              <img src="assets/img/avatars/profiles/avatar-3.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="profile-posts.html" className="avatar avatar-xs" data-toggle="tooltip" title="Daniela Dewitt">
                              <img src="assets/img/avatars/profiles/avatar-4.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                              <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#!" className="dropdown-item">
                                Action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Another action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="goal-project">
                          Release v1.2-Beta
                        </td>
                        <td className="goal-status">
                          <span className="text-warning">●</span> In progress
                        </td>
                        <td className="goal-progress">
                          25%
                        </td>
                        <td className="goal-date">
                          <time datetime="2018-10-24">08/26/18</time>
                        </td>
                        <td className="text-right">
                          <div className="avatar-group justify-content-end">
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Dianna Smiley">
                              <img src="assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Ab Hadley">
                              <img src="assets/img/avatars/profiles/avatar-2.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Adolfo Hess">
                              <img src="assets/img/avatars/profiles/avatar-3.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                              <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#!" className="dropdown-item">
                                Action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Another action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="goal-project">
                          GDPR Compliance
                        </td>
                        <td className="goal-status">
                          <span className="text-success">●</span> Completed
                        </td>
                        <td className="goal-progress">
                          100%
                        </td>
                        <td className="goal-date">
                          <time datetime="2018-10-24">06/19/18</time>
                        </td>
                        <td className="text-right">
                          <div className="avatar-group justify-content-end">
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Dianna Smiley">
                              <img src="assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Ab Hadley">
                              <img src="assets/img/avatars/profiles/avatar-2.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Adolfo Hess">
                              <img src="assets/img/avatars/profiles/avatar-3.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                              <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#!" className="dropdown-item">
                                Action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Another action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="goal-project">
                          v1.2 Documentation
                        </td>
                        <td className="goal-status">
                          <span className="text-danger">●</span> Cancelled
                        </td>
                        <td className="goal-progress">
                          0%
                        </td>
                        <td className="goal-date">
                          <time datetime="2018-10-24">06/25/18</time>
                        </td>
                        <td className="text-right">
                          <div className="avatar-group justify-content-end">
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Dianna Smiley">
                              <img src="assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Ab Hadley">
                              <img src="assets/img/avatars/profiles/avatar-2.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                              <span className="fe fe-more-vertical"></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#!" className="dropdown-item">
                                Action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Another action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td className="goal-project">
                          Plan design offsite
                        </td>
                        <td className="goal-status">
                          <span className="text-success">●</span> Completed
                        </td>
                        <td className="goal-progress">
                          100%
                        </td>
                        <td className="goal-date">
                          <time datetime="2018-10-24">06/30/18</time>
                        </td>
                        <td className="text-right">
                          <div className="avatar-group justify-content-end">
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Dianna Smiley">
                              <img src="assets/img/avatars/profiles/avatar-1.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Ab Hadley">
                              <img src="assets/img/avatars/profiles/avatar-2.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Adolfo Hess">
                              <img src="assets/img/avatars/profiles/avatar-3.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                            <a href="#!" className="avatar avatar-xs" data-toggle="tooltip" title="Daniela Dewitt">
                              <img src="assets/img/avatars/profiles/avatar-4.jpg" className="avatar-img rounded-circle" alt="..."/>
                            </a>
                          </div>
                        </td>
                        <td className="text-right">
                          <div className="dropdown">
                            <a href="#" className="dropdown-ellipses dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                              <i className="fe fe-more-vertical"></i>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right">
                              <a href="#!" className="dropdown-item">
                                Action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Another action
                              </a>
                              <a href="#!" className="dropdown-item">
                                Something else here
                              </a>
                            </div>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

            </div>
          </div> 
          </div>

          </div> 

      </div>
    )
  }
}
