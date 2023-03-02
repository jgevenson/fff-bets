import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Link from "next/link";
import Grid2 from "@mui/material/Unstable_Grid2";
import Container from "@mui/material/Container";
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function SearchAppBar() {
  return (
    <AppBar
      position="static"
      sx={{
        marginBottom: 2,
      }}
    >
      <Toolbar>
        <Container>
          <Grid2 container>
            <Grid2 xs>
              <Link href={"/bet-list"}>View Bets</Link>
            </Grid2>
          </Grid2>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
