import React, { PropTypes } from 'react'
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

        const githubClass = `fa fa-github ${firstNameColor}`;
        const linkedinClass = `fa fa-linkedin ${firstNameColor}`;
        const emailClass = `fa fa-inbox ${firstNameColor}`;

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
                                        linkButton={true}/>
                        </li>
                        <li>
                            <IconButton iconClassName={ linkedinClass }
                                        href={linkedin}
                                        linkButton={true}/>
                        </li>
                        <li className="icon">
                            <IconButton iconClassName={ emailClass }
                                        linkButton={true}/>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default HeaderComponent