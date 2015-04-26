import React from 'react'
import Header from '../HeaderComponent/HeaderComp.jsx'
import Social from '../SocialComponent/SocialComp.jsx'
import Jobs from '../JobComponent/JobComp.jsx'
import Projects from '../ProjectComponent/ProjectComp.jsx'
import {Grid, Row, Col} from 'react-bootstrap'

import _ from 'lodash'


/* 
 * Colors defined in variables.less 
    @lightBlue
    @navy
    @red
    @white
    @blue
    @gray
    @black
  **/

export default React.createClass({
    
    render() {
        let {jobs, projects, social, email} = this.props.info
        return (
            <Grid className="site-container">
                <Row>
                    <Col xs={12} 
                         md={6}
                         className="left-div">
                        <Row className="SysMargin">
                            <div className="navbar-fixed-top SysMargin">
                                <Header first="Sang" 
                                        last="Mercado"
                                        firstColor="lightBlue"
                                        lastColor="black" />
                            </div>
                            <Projects mainHeader="blue"
                                      secondHeader="gray" 
                                      projects={projects} />
                            <div className="navbar-fixed-bottom">
                                <Social links={social}
                                        email={email}/>
                            </div>
                        </Row>
                    </Col>
                    <Col xs={12} 
                         md={6}
                         className="right-div">
                        <Row className="SysMargin">
                            <Jobs mainHeader="white"
                                  secondHeader="gray"
                                  jobs={jobs} />
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}) 
