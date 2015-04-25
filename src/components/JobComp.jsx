import React from 'react'
import {Modal, ModalTrigger, Button, Row, Col} from 'react-bootstrap'
import _ from 'lodash'
import {FlatButton, Paper} from 'material-ui'

let styles = {
    head: {
        h1: { fontSize: '1.4em', margin: '0', padding: '0'},
        h2: { fontSize: '80%', margin: '0', paddingLeft: '1em', cursor: 'pointer'}
    },
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
                <li style={styles.modal.li}>
                    <div>
                        <img style={job.style} src={job.image} />
                        <h1 style={styles.modal.h1}>{job.desc}</h1>
                        <h2 style={styles.modal.h2}>{job.date}</h2>
                    </div>
                </li>
            )
        })
        return (
            <Modal {...this.props} bsStyle='primary' animation={true}>
                <div className='modal-body'
                     style={styles.modal.div}>
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
        let h1 = _.assign({}, styles.head.h1, this.props.mainHeader);
        let h2 = _.assign({}, styles.head.h2, this.props.secondHeader);
        return(
            <div>
                <h1 style={h1}>Software Engineering Intern at LinkedIn 
                    <ModalTrigger modal={<MyModal {...this.props} />}>
                        <span style={h2}
                              className="small"> 
                            Full Details
                        </span>
                    </ModalTrigger>
                </h1>
            </div>
        )
    }
})
