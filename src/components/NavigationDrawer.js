import React from "react";
import {ListItem, Drawer, Divider, CssBaseline} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import user from '../images/user.svg';
import logout from '../images/logout.svg';
import edit from '../images/edit.svg';
import Link from "@material-ui/core/Link";
import {CardTask} from "../components/CardTask";
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const styles = theme => ({
    appBar: {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        width: `calc(100% - ${250}px)`,
        marginLeft: 250,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginLeft: 12,
        marginRight: 20,
    },
    hide: {
        display: 'none',
    },
    list: {
        width: 250,
    },
    drawer: {
        width: 250,
        flexShrink: 0,
    },
    drawerHeader: {
        display: 'flex',
        alignItems: 'center',
        padding: '0 8px',
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing.unit * 3,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -250,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
    }
});

class NavigationDrawer extends React.Component{

    constructor(props) {
        super(props);
        this.handleDrawerClose = this.handleDrawerClose.bind(this);
        this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    }


    state = {
        open: false,
        task: [
            {
                "description": "Implement Login view",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "In Progress",
                "dueDate": 999238419383
            },
            {
                "description": "Implement Login controller ",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "Ready",
                "dueDate": 156464645646
            },
            {
                "description": "Facebook Integration",
                "responsible": {
                    "name": "Santiago Carrillo",
                    "email": "sancarbar@gmail"
                },
                "status": "Completed",
                "dueDate": 737136317199
            }
        ]
    };

    handleDrawerOpen() {
        this.setState({
            open: true
        });
    };

    handleDrawerClose() {
        this.setState({
            open: false
        });
    };

    render() {

        const { classes} = this.props;

        return (
            <div>
                <CssBaseline/>
                <AppBar position="fixed" color="primary" className={classNames(classes.appBar, {[classes.appBarShift]: this.state.open})}>
                    <Toolbar disableGutters={!this.state.open}>
                        <IconButton onClick={this.handleDrawerOpen} color="inherit" aria-label="Menu" className={classNames(classes.menuButton, this.state.open && classes.hide)}>
                            <MenuIcon/>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer open={this.state.open} variant="persistent" anchor="left">
                    <div className={classes.drawerHeader}>
                        <IconButton onClick={this.handleDrawerClose}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </div>
                    <Divider/>
                    <div className={classes.list}>
                        <List>
                            <ListItem>
                                <img src={user} alt="user" className="img2"/>
                                <ListItemText primary="Sergio Peña" secondary="sergio@gmail.com" />
                            </ListItem>
                        </List>
                        <div className="right">
                            <img src={edit} alt="edit"/>
                        </div>
                    </div>
                    <Divider/>
                    <div className="bottom">
                        <img src={logout} alt="logout"/>
                        <Link href="/">Logout</Link>
                    </div>
                </Drawer>
                <main className={classNames(classes.content, {[classes.contentShift]: this.state.open})}>
                    <div />
                    {this.state.task.map(task => {
                        return (<CardTask info={task}/>);
                    })}
                </main>
            </div>
        );
    }
}

NavigationDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, {withTheme: true})(NavigationDrawer);