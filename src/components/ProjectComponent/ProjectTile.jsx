import React, { PropTypes } from 'react'
import { IconButton, GridTile, Dialog } from 'material-ui'
import { Avatar, Card, CardHeader, CardMedia, CardTitle, CardActions, FlatButton, CardText } from 'material-ui'

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
            tileStyle = {cursor: 'pointer'};

        const iconButton =
            <IconButton iconClassName="fa fa-github white"
                        linkButton={true}
                        href={github}
            />;

        const cardButtons = [
            <FlatButton label="Github"
                        disabled={!github}/>,
            <FlatButton label="YouTube"
                        disabled={!youtube}/>,
            <FlatButton label="Live Demo"
                        disabled={!demo}/>
        ];

        return (
            <div>
                <Dialog
                    open={this.state.open}
                    autoScrollBodyContent={true}
                    bodyStyle={dialogStyle}
                    onRequestClose={this.handleClose}>

                    <Card initiallyExpanded={true}>
                        <CardMedia
                            overlay={<CardTitle title={project.title} />}
                            overlayContentStyle={overlayStyle}>
                            <img src={image}/>
                        </CardMedia>
                        <CardActions>
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
                         style={imageStyle}/>>
                </GridTile>
            </div>
        )
    }
}
