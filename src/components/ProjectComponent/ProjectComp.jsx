import React from 'react'
import {Well, Panel, Modal, ModalTrigger, Row, Col} from 'react-bootstrap'
import {FlatButton, FontIcon, Toolbar, ToolbarGroup, IconButton} from 'material-ui'

import _ from 'lodash'

require('./Project.less')

let styles = {
    head: {
        h1: { fontSize: '1.4em', margin: '0', padding: '0'},
        h2: { fontSize: '80%', margin: '0', paddingLeft: '1em', cursor: 'pointer'}
    },
}

const MyModal = React.createClass({
    getIcon(name) {
        if (name === "live")
            name = "laptop";
        return "fa fa-" + name.toLowerCase();
    },

    render() {
        let projects = this.props.projects.map(project => {
            let icons = ["github", "live", "youtube"];
            icons = icons.map(icon => {
                    return (
                        <IconButton iconClassName={this.getIcon(icon)} 
                                    href={project[icon] ? project[icon] : "#"}
                                    linkButton={true}
                                    tooltip={project[icon] == null ? 'Not Available' : icon}/>
                    )
                });

            return (
                <li>
                    <Panel>
                        <Toolbar className="toolbar">
                            <ToolbarGroup key={0} float="left">
                                <FlatButton label={project.title} />
                            </ToolbarGroup>
                            <ToolbarGroup key={1} float="right">
                                {icons}
                            </ToolbarGroup>
                        </Toolbar>
                    </Panel>
                </li>
            )
        })
        return (
            <Modal {...this.props} bsStyle='primary' animation={true}>
                <div className='modal-body'>
                    <ul className="list-unstyled project-list">
                        {projects}
                    </ul>
                </div>
            </Modal>
        );
    }
});

export default React.createClass({
    render() {
        let h1 = _.assign({}, styles.head.h1, this.props.mainHeader);
        let h2 = _.assign({}, styles.head.h2, this.props.secondHeader);
        return (
            <div>
                <h1 style={h1}>
                    Projects 
                    <ModalTrigger modal={<MyModal {...this.props} />}>
                        <span style={h2}
                              className="small"> 
                            List of Projects 
                        </span>
                    </ModalTrigger>
                </h1>
            </div>
        )
    }
})
