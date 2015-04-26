import React from 'react'
import Header from '../HeaderComponent/HeaderComp.jsx'
import Social from '../SocialComponent/SocialComp.jsx'
import Jobs from '../JobComponent/JobComp.jsx'
import Projects from '../ProjectComponent/ProjectComp.jsx'
import {Grid, Row, Col} from 'react-bootstrap'

import _ from 'lodash'
import {jobs, projects, email, social} from '../../information.json'

require('./App.less')

var varless = require('varless');

let styles = {
    lightBlue: varless.get('lightBlue'),
    navy: varless.get('navy'),
    red: varless.get('red'),
    white: varless.get('white'),
    blue: varless.get('blue'),
    gray: varless.get('gray'),
    black: varless.get('black')
}

export default React.createClass({
    
    colorObject(color) {
        return {color: color} 
    },
    render() {
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
                                        firstColor={this.colorObject(styles.lightBlue)}
                                        lastColor={this.colorObject(styles.black)} />
                            </div>
                            <Projects mainHeader={this.colorObject(styles.blue)}
                                      secondHeader={this.colorObject(styles.gray)} 
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
                            <Jobs mainHeader={this.colorObject(styles.white)}
                                  secondHeader={this.colorObject(styles.gray)}
                                  jobs={jobs} />
                        </Row>
                    </Col>
                </Row>
            </Grid>
        )
    }
}) 
