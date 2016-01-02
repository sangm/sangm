import React, { PropTypes } from 'react'
import EmailComponent from '../EmailComponent/EmailComponent.jsx'
import { IconButton } from 'material-ui'

/* Header.less contains class names used in this file */

class HeaderComponent extends React.Component {

    static propTypes = {
        firstName: PropTypes.string.isRequired,
        lastName: PropTypes.string.isRequired,
        firstNameColor: PropTypes.string.isRequired,
        lastNameColor: PropTypes.string.isRequired,
        github: PropTypes.string.isRequired,
        linkedin: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
    };

    render() {
        let {firstName, lastName, firstNameColor, lastNameColor, github, linkedin, email } = this.props;

        const githubClass = github ? `fa fa-github ${firstNameColor}` : 'fa fa-github';
        const linkedinClass = linkedin ? `fa fa-linkedin ${firstNameColor}` : 'fa fa-linkedin';
        const emailClass = email ? `fa fa-inbox ${firstNameColor}` : 'fa fa-inbox';

        return (
            <div className="header">
                <div className="nameHeader">
                    <h1 className={firstNameColor}>{firstName}</h1>
                    <h1 className={lastNameColor}>{lastName}</h1>
                </div>
                <div className="iconHeader">
                    <ul className="list-unstyled list-inline">
                        <li className="icon">
                            <IconButton iconClassName={ githubClass }
                                        href={github}
                                        disabled={!github}
                                        linkButton={true}/>
                        </li>
                        <li>
                            <IconButton iconClassName={ linkedinClass }
                                        href={linkedin}
                                        disabled={!linkedin}
                                        linkButton={true}/>
                        </li>
                        <li className="icon">
                            <EmailComponent icon={emailClass}
                                            email={email}/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HeaderComponent