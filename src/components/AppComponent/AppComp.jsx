import React from 'react'
import Header from '../HeaderComponent/HeaderComp.jsx'
import Social from '../SocialComponent/SocialComp.jsx'
import Jobs from '../JobComponent/JobComp.jsx'
import Projects from '../ProjectComponent/ProjectComp.jsx'
import {Grid, Row, Col} from 'react-bootstrap'

import _ from 'lodash'

require('./App.less')

var varless = require('varless');



let jobs = [
    { image: "assets/img/in-logo.gif", desc: "Software Engineering Intern", date: "Summer 2015", style: {width: 150}},
    { image: "assets/img/texas-state-logo.gif", desc: "Research Assistant", date: "August 2014 - Present", style: {width: 100}},
    { image: "assets/img/usaa-logo.gif", desc: "Software Engineering Intern", date: "Summer 2014", style: {width: 100}},
    { image: "assets/img/texas-state-logo.gif", desc: "Instructional Assistant", date: "September 2013 - Summer 2014", style: {width: 100}},
    { image: "assets/img/polycom-logo.gif", desc: "Localization Software Intern", date: "Summer 2013", style: {width: 130}}
];

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
                            <Projects projects={['project',2,3]} 
                                      mainHeader={this.colorObject(styles.blue)}
                                      secondHeader={this.colorObject(styles.gray)} />
                            <div className="navbar-fixed-bottom">
                                <Social links={[{network: 'github', src: "https://github.com/sangm"}, {network: 'linkedin', src:"https://linkedin.com/in/sangmercado"}]}
                                        email={{network: 'inbox', src:'sang.mercado@gmail.com'}}/>
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
