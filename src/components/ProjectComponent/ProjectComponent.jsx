import React from 'react'
import { GridList, GridTile, IconButton } from 'material-ui'

export default class ProjectComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cols: 2,
        }
    }

    updateDimensions = () => {
        var w = window,
            d = document,
            documentElement = d.documentElement,
            body = d.getElementsByTagName('body')[0],
            width = w.innerWidth || documentElement.clientWidth || body.clientWidth,
            height = w.innerHeight || documentElement.clientHeight || body.clientHeight;

        /* Only re render if width's difference is bigger than some constant */
        if (width < 530 && this.state.cols !== 1) {
            this.setState({cols: 1})
        } else if (width > 530 && width < 1024 && this.state.cols !== 2) {
            this.setState({cols: 2})
        } else if (width >= 1024 && this.state.cols !== 3) {
            this.setState({cols: 3})
        }
    }

    componentWillMount() {
        this.updateDimensions();
    }

    componentDidMount() {
        window.addEventListener("resize", this.updateDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.updateDimensions);
    }

    render() {
        let {projects} = this.props;

        let generateTile = (project) => {
            const iconButton = <IconButton iconClassName="fa fa-github" />;
            return (
                <GridTile
                    title={project.title}
                    actionIcon={iconButton}
                    actionPosition="right"
                    titlePosition="bottom"
                    titleBackground="rgba(52, 152, 219,0.4)"
                    cols={project.featured ? 2 : 1}
                    rows={project.featured ? 2 : 1}>
                    <img src={project.image}/>
                >
                </GridTile>
            )
        };

        return (
            <GridList
                cols={this.state.cols}
                cellHeight={200}
                padding={4}
                style={{width: '100%', height: '100%', overflowY: 'auto'}} >

                {projects.map(project => generateTile(project))}
            </GridList>
        )
    }
}