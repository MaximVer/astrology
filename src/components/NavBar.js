import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from "@material-ui/core/es/styles/withStyles";

const NavBar = () => {
    return(
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="title" color="inherit" style={styles.exp}>
                        Астролог Елена Вершинина
                    </Typography>
                    {/*<Button color="inherit" style={styles.button}>Login</Button>*/}
                    {/*<div style={styles.exp}>*/}

                    {/*</div>*/}
                </Toolbar>
            </AppBar>
        </div>
    )
};

const styles = {
    button: {
        position: 'relative',
        left: '20%'
    },
    exp: {
        position: 'relative',
        left: '10%',
    }
};
export default withStyles(styles)(NavBar);
// import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
//
// const styles = {
//     root: {
//         flexGrow: 1,
//     },
//     grow: {
//         flexGrow: 1,
//     },
//     menuButton: {
//         marginLeft: -12,
//         marginRight: 20,
//     },
// };
//
// function NavBar(props) {
//     const { classes } = props;
//     return (
//         <div className={classes.root}>
//             <AppBar position="static">
//                 <Toolbar>
//                     <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
//                     </IconButton>
//                     <Typography variant="h6" color="inherit" className={classes.grow}>
//                         News
//                     </Typography>
//                     <Button color="inherit">Login</Button>
//                 </Toolbar>
//             </AppBar>
//         </div>
//     );
// }
//
// NavBar.propTypes = {
//     classes: PropTypes.object.isRequired,
// };
//
// export default withStyles(styles)(NavBar);
