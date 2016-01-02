import React, { PropTypes } from 'react'
import { IconButton, Snackbar} from 'material-ui'

export default class EmailComponent extends React.Component {
    static propTypes = {
        icon: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            showEmail: false
        }
    }

    handleOpenEmail = () => {
        this.setState({showEmail: true});
    };

    handleCloseEmail = () => {
        this.setState({showEmail: false});
    };

    handleSendEmail = () => {
        let { email } = this.props;
        window.location.href = `mailto:${email}?subject=Contact%20from%20sangm.io`;
    };

    render() {
        let { icon, email } = this.props;

        return (
            <div>
                <IconButton iconClassName={icon}
                            disabled={!email}
                            onTouchTap={this.handleOpenEmail}/>
                <Snackbar
                    open={this.state.showEmail}
                    message={email}
                    action="Open Email Client"
                    autoHideDuration={3000}
                    onActionTouchTap={this.handleSendEmail}
                    onRequestClose={this.handleCloseEmail}
                />
            </div>
        )
    }
}
