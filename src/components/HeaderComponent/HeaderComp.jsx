import React from 'react'
import _ from 'lodash'

export default React.createClass({
    render() {
        return (
            <div className="header">
                <h1 className={this.props.firstColor}>{this.props.first}</h1>
                <h1 className={this.props.secondColor}>{this.props.last}</h1>
            </div>
        )
    }
})
