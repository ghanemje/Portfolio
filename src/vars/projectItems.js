import React from "react";

export var androidApps = [
    {
        title: 'Traffic Sign Recognition - Python',
        logo: 'https://blog.mapillary.com/img/2015-01-27-traffic-signs-2.png',
        subtitle: 'A traffic sign detection, recognition, and classification pipeline using HOG and MSER feature detection techniques.',
        link: 'https://github.com/ghanemje/Traffic_Sign_Recognition-Python'
    },
    {
        title: 'Maze Path Planner - C++',
        logo: 'https://i.imgur.com/QYIdIh6.jpg',
        subtitle: 'A recursive function that solves a 6x6 maze and displays the solution path via backtracking.',
        link: 'https://github.com/ghanemje/Maze_Path_Planner-CPP'
    },
    {
        title: 'Baxter Robot Simulation - MATLAB/VREP',
        logo: 'https://i.imgur.com/HHTOY1Q.jpg',
        subtitle: 'Baxter V-REP Simulation: Pick and Place Application',
        link: 'https://github.com/ghanemje/V-REP_BaxterSimulation'
    },
    {
        title: 'Mobile Robot Path Planner using A* and Dijkstra - MATLAB',
        logo: 'https://i.imgur.com/8qsT1HS.jpg',
        subtitle: 'A maze with either a point or a rigid robot implementing A* and Dijkstra search algorithms',
        link: 'https://github.com/ghanemje/MobileRobotMaze'
    },
    {
        title: '8-Puzzle Solver using Breadth-First Search - MATLAB',
        logo: 'https://sites.google.com/site/rohanpandare/_/rsrc/1472768053781/projects/solving-8-puzzle-using-rbfs/8-Puzzle.JPG',
        subtitle: '8-puzzle Solver using Breadth-First Search',
        link: 'https://github.com/ghanemje/8puzzleBFS'
    }

]

export var androidLibs = [
    {
        title: 'Dynamic System Response GUI - MATLAB',
        logo: 'https://i.imgur.com/oz7fFtc.jpg',
        link: 'https://github.com/ghanemje/Dynamic_System_Response_GUI-MATLAB'
    },
    {
        title: 'Darcy Friction Factor Bisection - MATLAB',
        logo: 'https://i.imgur.com/ekWjk5v.jpg',
        subtitle: 'MATLAB program to get a Moody chart that relates the Darcy-Weisbach friction factor, Reynolds number, and surface roughness for a fully developed flow in a circular pipe.',
        link: 'https://github.com/ghanemje/Darcy_Friction_Factor_Bisection-MATLAB'
    },

]


export var icons = [
    {
        url: 'play.google.com',
        icon: <path fill="#FFF"
                    d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
    },
    {
        url: 'github',
        icon: <path fill="#FFF" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />
    },
    {
        url: '',
        icon: <path fill="#FFF" d="M10.59,13.41C11,13.8 11,14.44 10.59,14.83C10.2,15.22 9.56,15.22 9.17,14.83C7.22,12.88 7.22,9.71 9.17,7.76V7.76L12.71,4.22C14.66,2.27 17.83,2.27 19.78,4.22C21.73,6.17 21.73,9.34 19.78,11.29L18.29,12.78C18.3,11.96 18.17,11.14 17.89,10.36L18.36,9.88C19.54,8.71 19.54,6.81 18.36,5.64C17.19,4.46 15.29,4.46 14.12,5.64L10.59,9.17C9.41,10.34 9.41,12.24 10.59,13.41M13.41,9.17C13.8,8.78 14.44,8.78 14.83,9.17C16.78,11.12 16.78,14.29 14.83,16.24V16.24L11.29,19.78C9.34,21.73 6.17,21.73 4.22,19.78C2.27,17.83 2.27,14.66 4.22,12.71L5.71,11.22C5.7,12.04 5.83,12.86 6.11,13.65L5.64,14.12C4.46,15.29 4.46,17.19 5.64,18.36C6.81,19.54 8.71,19.54 9.88,18.36L13.41,14.83C14.59,13.66 14.59,11.76 13.41,10.59C13,10.2 13,9.56 13.41,9.17Z" />
    }

]