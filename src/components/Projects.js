import React from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import WorksGridItems from "./sub/ProjectGridItems";
import {androidApps, androidLibs} from '../vars/projectItems'


const styles = theme => ({
    root: {
        flexGrow: 1,
    },
});

const Projects = (props) => (
    <Grid>
        <WorksGridItems name='Planning and Perception for Autonomous Robots' list={androidApps} margins={0}/>
        <WorksGridItems name='Mechanical Engineering' list={androidLibs} margins={1}/>
         

    </Grid>
);

Projects.propTypes = {};

export default withStyles(styles)(Projects);