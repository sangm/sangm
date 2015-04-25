import React from 'react'
import {FloatingActionButton} from 'material-ui'

/*
<li>
    <img src={'assets/img/me.png'} 
         className="img-circle" 
         style={styles.img}/>
</li>
*/
let styles = {
    img: {
        width: '3em',
        height: '3em'
    },

    ul: {
        margin: '1em'
    }
}
export default React.createClass({
    getIcon(name) {
        return "fa fa-" + name.toLowerCase() + " fa-2x";
    },
    
    getIcons() {
        return Object.keys(this.props).map(key => {
            return (
                <li>
                    <a href={this.props[key]}>
                        <FloatingActionButton className="no-box-shadow" 
                                              iconClassName={this.getIcon(key)} 
                                              mini={true} 
                                              secondary={true}/>
                    </a>
                </li>
            )
        });
    },
    
    render() {
        return (
            <ul className="list-unstyled list-inline"
                style={styles.ul}>
                {this.getIcons()}
            </ul>
        )
    }
})
