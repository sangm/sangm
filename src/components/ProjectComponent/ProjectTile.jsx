import React, { PropTypes } from 'react'
import { IconButton, GridTile, Dialog, RaisedButton } from 'material-ui'
import { Avatar, Card, CardHeader, CardMedia, CardTitle, CardActions, FlatButton, CardText, FontIcon } from 'material-ui'

export default class ProjectTile extends React.Component {

    static propTypes = {
        project: PropTypes.object.isRequired
    };

    constructor(props) {
        super(props);
        this.state = {
            open: false,
        };
    }

    handleOpen = () => {
        this.setState({open: true});
    }

    handleClose = () => {
        this.setState({open: false});
    }

    render() {
        const {project, cols, rows } = this.props;
        const {github, image, youtube, demo } = project;

        const imageStyle = {width: '100%'},
            dialogStyle = {padding: 0},
            overlayStyle = {background: 'rgba(52, 152, 219, 0.4)'},
            tileStyle = {cursor: 'pointer'},
            buttonStyle = {verticalAlign: 'middle'},
            cardContentStyle = {textAlign: 'center'},
            primaryStyle = {color: 'rgb(255, 64, 129)'},
            secondaryStyle = {color: '#00bcd4'},
            disabledStyle = {color: 'rgba(0,0,0,0.3)'},
            iconStyle = {paddingLeft: '-.3em', paddingRight: '.3em', verticalAlign: 'middle'};

        const iconButton =
            <IconButton iconClassName="fa fa-github white"
                        linkButton={true}
                        href={github}
            />;

        const cardButtons = [
            <FlatButton linkButton={true}
                        href={youtube}
                        disabled={!youtube}
                        style={buttonStyle}
                        primary={true}
                        label="YouTube">
                <FontIcon className="fa fa-youtube"
                          style={youtube ? Object.assign(primaryStyle, iconStyle) :
                                           Object.assign(disabledStyle, iconStyle)}/>
            </FlatButton>,

            <FlatButton linkButton={true}
                        href={demo}
                        disabled={!demo}
                        style={buttonStyle}
                        secondary={true}
                        label="Live Demo">
                <FontIcon className="fa fa-laptop"
                          style={demo ? iconStyle :
                                           Object.assign(disabledStyle, iconStyle)}/>
            </FlatButton>,

            <FlatButton linkButton={true}
                        href={github}
                        style={buttonStyle}
                        disabled={!github}
                        secondary={true}
                        label="GitHub">
                <FontIcon className="fa fa-github"
                          style={github ? Object.assign(secondaryStyle, iconStyle) :
                                          Object.assign(disabledStyle, iconStyle)}/>
            </FlatButton>
        ];

        return (
            <div>
                <Dialog
                    open={this.state.open}
                    autoScrollBodyContent={true}
                    bodyStyle={dialogStyle}
                    onRequestClose={this.handleClose}>

                    <Card initiallyExpanded={true}>
                        <CardMedia>
                            <img src={image}/>
                        </CardMedia>
                        <CardActions style={cardContentStyle}>
                            {cardButtons}
                        </CardActions>
                    </Card>
                </Dialog>
                <GridTile
                    onTouchTap={this.handleOpen}
                    title={project.title}
                    actionIcon={iconButton}
                    actionPosition="right"
                    titlePosition="bottom"
                    titleBackground="rgba(52, 152, 219,0.4)"
                    style={tileStyle}
                    cols={cols}
                    rows={rows}>
                    <img src={project.image}
                         style={imageStyle}/>
                </GridTile>
            </div>
        )
    }
}
