import React, {useState} from "react";
import {withStyles} from '@mui/styles';
import Typography from "@mui/material/Typography/Typography";
import InputBase from "@mui/material/InputBase/InputBase";
import Grid from '@mui/material/Grid';
import {styles} from "./styles";
import Toolbar from "@mui/material/Toolbar/Toolbar";
import {Outlet} from "react-router-dom";

function Header(props) {
    const {classes, setSearchKey, searchResults} = props;
    const [searchText, setSearchText] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        setSearchKey(searchText);
    }

    if (!searchResults) {
        return <Outlet/>
    }

    return (
        <div>
            <Toolbar className={classes.appBar} style={{zIndex: 1000}}>
                <Grid container className={classes.header} spacing={2}>
                    <Grid container>
                        <Typography variant="h4" component="h4">
                            Organization Chart
                        </Typography>
                        <div className={classes.search}>
                            <form id="search-form" onSubmit={handleSubmit} noValidate autoComplete="off">
                                <InputBase
                                    id="searchInput"
                                    name="search"
                                    placeholder="Search…"
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                    sx={{color: "black",}}
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                />
                            </form>
                        </div>
                    </Grid>
                </Grid>
            </Toolbar>
            <Outlet/>
        </div>
    )
}

export default withStyles(styles)(Header);
