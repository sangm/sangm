import React from 'react'
import _ from 'lodash'

let styles = {
    head: {
        h1: { fontSize: '1.4em', margin: '0', padding: '0'},
        h2: { fontSize: '80%', margin: '0', paddingLeft: '1em', cursor: 'pointer'}
    },
}

export default React.createClass({
    render() {
        let h1 = _.assign({}, styles.head.h1, this.props.mainHeader);
        let h2 = _.assign({}, styles.head.h2, this.props.secondHeader);
        return (
            <div>
                <h1 style={h1}>
                    Project Demonstration
                    <span style={h2}>
                         List of Projects 
                    </span>
                </h1>
            </div>
        )
        return <div>{this.props.projects}</div>
    }
})
