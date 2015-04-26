import React from 'react'
import {FloatingActionButton, Snackbar} from 'material-ui'

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
        return this.props.links.map(link => {
            return (
                <li key={link.src}>
                    <a href={link.src}>
                        <FloatingActionButton iconClassName={this.getIcon(link.network)} 
                                              mini={true} 
                                              secondary={true}/>
                    </a>
                </li>
            )
        })
    },
    
    handleSnackbar() {
        //We can add more code to this function, but for now we'll just include an alert.
        let email = this.props.email.src
        window.location.href = `mailto:${email}?subject=Contact%20from%20sangm.io`
        this.refs.snackbar.dismiss();
    },

    handleClick() {
        this.refs.snackbar.show();
    },

    render() {
        return (
            <ul className="list-unstyled list-inline"
                style={styles.ul}>
                {this.getIcons()}
                <li>
                    <FloatingActionButton iconClassName={this.getIcon(this.props.email.network)} 
                                          onTouchTap={this.handleClick}
                                          mini={true}
                                          secondary={true}/>
                </li>
                <Snackbar
                    message={`My email is ${this.props.email.src} :)`}
                    ref="snackbar"
                    action="Launch Email Client"
                    onActionTouchTap={this.handleSnackbar}/>
            </ul>
        )
    }
})
