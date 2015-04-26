import React from 'react'
import {Modal, ModalTrigger, Button, Row, Col} from 'react-bootstrap'
import _ from 'lodash'
import {FlatButton, Paper} from 'material-ui'

let styles = {
    modal: {
        h1: { fontSize: '1.5em', fontWeight: '300', padding: '0', margin: '0'},
        h2: { fontSize: '1.1em', fontWeight: '300', padding: '0', margin: '0'},
        li: { padding: '.5em' },
        div: { textAlign: 'center' }
    }
}

const MyModal = React.createClass({
    render() {
        let jobs = this.props.jobs.map(job => {
            return (
                <li>
                    <div>
                        <img style={job.style} src={job.image} />
                        <h1>{job.desc}</h1>
                        <h2>{job.date}</h2>
                    </div>
                </li>
            )
        })
        return (
            <Modal {...this.props} bsStyle='primary' animation={true}>
                <div className='modal-body job-modal'>
                    <ul className="list-unstyled list-inline">
                        {jobs}
                    </ul>
                </div>
            </Modal>
        );
    }
});

export default React.createClass({
    render() {
        return(
            <div className="job">
                <h1 className={this.props.mainHeader}>Software Engineering Intern at LinkedIn 
                    <ModalTrigger modal={<MyModal {...this.props} />}>
                        <span className={this.props.secondHeader + ' second-header'}>
                           Previous Employers 
                        </span>
                    </ModalTrigger>
                </h1>
            </div>
        )
    }
})
