import React, { Component } from 'react';
import './App.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const styles = theme => ({
  root: {
    width: 900,
  },
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      value: 'recents'
    }  
  }

  propTypes = {
    classes: PropTypes.object.isRequired,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;
    return (
      <div>
        <Button variant="fab" color="primary" aria-label="Add" className={classes.button}>
          <AddIcon />
        </Button>
        <Button variant="contained" color="secondary" className={classes.button}>
          Delete
        <DeleteIcon className={classes.rightIcon} />
        </Button>
        <TextField label='Email' variant='filled' autoComplete />
        <Button variant="outlined" color="secondary" className={classes.button}>
          Secondary
      </Button>
        <IconButton className={classes.button} aria-label="Delete">
          <DeleteIcon />
        </IconButton>

        <BottomNavigation value={value} onChange={this.handleChange} className={classes.root}>
          <BottomNavigationAction label="Recents" value="recents" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} />
          <BottomNavigationAction label="Nearby" value="nearby" icon={<LocationOnIcon />} />
          <BottomNavigationAction label="Folder" value="folder" icon={<Icon>folder</Icon>} />
        </BottomNavigation>
      </div>
    );
  }
}

export default withStyles(styles)(App);
