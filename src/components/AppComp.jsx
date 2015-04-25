import React from 'react'
import Header from './HeaderComp.jsx'
import Social from './SocialComp.jsx'
import Jobs from './JobComp.jsx'
import Projects from './ProjectComp.jsx'
import {Grid, Row, Col} from 'react-bootstrap'

import _ from 'lodash'

let jobs = [
    { image: "assets/img/linkedin-logo.gif", desc: "Software Engineering Intern", date: "Summer 2015", style: {width: 150}},
    { image: "assets/img/texas-state-logo.gif", desc: "Research Assistant", date: "August 2014 - Present", style: {width: 100}},
    { image: "assets/img/usaa-logo.gif", desc: "Software Engineering Intern", date: "Summer 2014", style: {width: 100}},
    { image: "assets/img/texas-state-logo.gif", desc: "Instructional Assistant", date: "September 2013 - Summer 2014", style: {width: 100}},
    { image: "assets/img/polycom-logo.gif", desc: "Localization Software Intern", date: "Summer 2013", style: {width: 130}}
];

let styles = {
    siteContainer: { fontFamily: "'Roboto', 'sans-serif'", },
    margin: { margin: '3em', },
    height: { height: '100%' },
    padding: { padding: '0' },
    first: { color: '#3498DB' },
    last: { color: 'black' },
    white: { color: 'white' },
    navy: { background: '#2C3E50' },
    gray: { color: '#777' },
    center: {
        display: 'flex',
        alignItems: 'center'
    }
}

                        /*
                        <Row style={styles.margin}>
                            <Projects projects={['project',2,3]} />
                        </Row>
                        */
export default React.createClass({
    
    render() {
        let baseStyle = _.assign({}, styles.padding, styles.height);
        let leftStyle = _.assign({}, baseStyle);
        let rightStyle = _.assign({}, baseStyle, styles.center, styles.navy);
        return (
            <Grid className="site-container"
                  style={styles.siteContainer}>
                <Row>
                    <Col xs={12} 
                         md={6}
                         style={leftStyle}>
                        <Row style={styles.margin}>
                            <Header first="Sang" 
                                    last="Mercado"
                                    firstColor={styles.first}
                                    lastColor={styles.last} />
                            <div className="navbar-fixed-bottom">
                                <Social github="https://github.com/sangm"
                                        linkedin="http://linkedin.com/in/sangmercado"
                                        inbox="sang.mercado@gmail.com" />
                            </div>
                            
                        </Row>
                    </Col>
                    <Col xs={12} 
                         md={6}
                         style={rightStyle}>
                        <Row style={styles.margin}>
                            <Jobs mainHeader={styles.white}
                                  secondHeader={styles.gray}
                                  jobs={jobs} />
                        </Row>
                        
                    </Col>
                </Row>
            </Grid>
        )
    }
}) 
