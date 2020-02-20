import React from "react";
import Card from "@material-ui/core/Card";
import {CardContent, CssBaseline, Typography} from "@material-ui/core";
import progress from '../images/progress.svg';
import ready from '../images/ready.svg';
import completed from '../images/completed.svg';
import './CardTask.css';

export class CardTask extends React.Component{

    constructor(props) {
        super(props);
        this.state = {username: "", password: ""};
    }

    render() {

        return (
            <React.Fragment>
                <CssBaseline/>
                <main className="layout">
                    <Card className="margin" elevation={5}>
                        <CardContent>
                            <div className="gridCard">
                                <div>
                                    <Typography variant="h5">
                                        {this.props.info.description}
                                    </Typography>
                                </div>
                                <div>
                                    {this.props.info.status === 'In Progress' ? <img src={progress} alt="progress"/> : <div/>}
                                    {this.props.info.status === 'Ready' ? <img src={ready} alt="ready"/> : <div/>}
                                    {this.props.info.status === 'Completed' ? <img src={completed} alt="completed"/> : <div/>}
                                </div>
                            </div>
                            <Typography variant="h6">
                                {this.props.info.status} - {new Date(this.props.info.dueDate).toDateString()}
                            </Typography>
                            <Typography variant="h6">
                                {this.props.info.responsible.name}
                            </Typography>
                        </CardContent>
                    </Card>
                </main>
            </React.Fragment>
        );
    }
}