import React from 'react'
import _ from 'lodash'

let styles = {
    head: {
        margin: '0',
        fontSize: '5em',
        fontWeight: '500'
    },
}

export default React.createClass({
    render() {
        let firstStyle = _.assign(this.props.firstColor, styles.head);
        let secondStyle = _.assign(this.props.lastColor, styles.head);
        return (
            <div>
                <h1 style={firstStyle}>{this.props.first}</h1>
                <h1 style={secondStyle}>{this.props.last}</h1>
            </div>
        )
    }
})
