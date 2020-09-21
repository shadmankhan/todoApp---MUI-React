import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline, Typography, Link } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
    footer: {
        padding: "5px",
        textAlign: "center",
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
    },

}));

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div>
            <CssBaseline />
            <footer className={classes.footer}>

                <Typography variant="body2" color="textSecondary">
                    {'Copyright © '}
                    <Link color="inherit" href="https://github.com/shadmankhan/todoApp---MUI-React">
                        Shadman Khan
                        </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </footer>
        </div>
    );
}