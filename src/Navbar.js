import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputBase from "@material-ui/core/InputBase";
import Switch from "@material-ui/core/Switch";
import SearchIcon from "@material-ui/icons/Search";
import styles from "./styles/NavbarStyles";
import { ThemeContext } from "./contexts/ThemeContext";
import { LanguageContext } from "./contexts/LanguageContext";

class Navbar extends Component {
  static contextType = ThemeContext;
  render() {
    const { isDarkMode, toggleTheme } = this.context;
    const { classes } = this.props;
    return (
      <LanguageContext.Consumer>
        {(context) => (
          <div className={classes.root}>
            <AppBar position="static" color={isDarkMode ? "default" : "primary"}>
              <Toolbar>
                <IconButton className={classes.menuButton} color="inherit">
                  <span>FR flag</span>
                </IconButton>
                <Typography className={classes.tile} variant="h6" color="inherit">
                  App title {context.language}
                </Typography>
                <Switch onChange={toggleTheme} />
                <div className={classes.grow} />
                <div className={classes.search}>
                  <div className={classes.searchIcon}>
                    <SearchIcon />
                  </div>
                  <InputBase placeholder="Search..." classes={{ root: classes.inputRoot, input: classes.inputInput }} />
                </div>
              </Toolbar>
            </AppBar>
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}
export default withStyles(styles)(Navbar);
