import * as React from "react";
import { Fab, Typography } from "@mui/material";
import Add from "@mui/icons-material/Add";

export default function AddBetButton() {
  return (
    <div>
      <Fab
        variant="extended"
        size="medium"
        color="primary"
        aria-label="Add"
        sx={{
          position: "fixed",
          bottom: 12,
          right: 24,
        }}
        href="/propose-bet"
      >
          <Add sx={{mr:1}} />
          <Typography>New Bet</Typography>
      </Fab>
    </div>
  );
}
