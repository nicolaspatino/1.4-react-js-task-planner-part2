import React from "react";
import FaceRoundedIcon from '@material-ui/icons/FaceRounded';
import Card from "@material-ui/core/Card";
import {CardContent, CssBaseline, Typography} from "@material-ui/core";


import ExitToAppRoundedIcon from '@material-ui/icons/ExitToAppRounded';
import VpnKeyRoundedIcon from '@material-ui/icons/VpnKeyRounded';
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
                                    {this.props.info.status === 'In Progress' ? <VpnKeyRoundedIcon alt="progress"/> : <div/>}
                                    {this.props.info.status === 'Ready' ? <ExitToAppRoundedIcon alt="ready"/> : <div/>}
                                    {this.props.info.status === 'Completed' ? <FaceRoundedIcon alt="completed"/> : <div/>}
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