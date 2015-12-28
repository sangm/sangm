import React from 'react'
import ProjectTile from './ProjectTile.jsx'
import { GridList, GridTile, IconButton, FlatButton, Dialog, RaisedButton } from 'material-ui'

export default class ProjectComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            cols: 2
        };

        if (typeof window !== 'undefined') {
            this.updateDimensions();
        }
    }

    updateDimensions = () => {
        if (typeof window !== 'undefined') {
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
            } else if (width >= 1024 && this.state.cols !== 4) {
                this.setState({cols: 4})
            }
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

        return (
            <GridList
                cols={this.state.cols}
                cellHeight={200}
                padding={8}
                style={{width: '100%', height: '100%', overflowY: 'auto'}}>

                {projects.map((project, index) => <ProjectTile key={index}
                                                               project={project}
                                                               cols={project.featured ? 2 : 1}
                                                               rows={project.featured ? 2: 1}/>) }
            </GridList>
        )
    }
}