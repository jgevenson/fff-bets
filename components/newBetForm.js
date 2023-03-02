import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Box,
  Chip,
  OutlinedInput,
  Button,
  Snackbar,
  ButtonGroup,
  Hidden,
  InputAdornment
} from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
import * as React from "react";
import { supabase } from "../lib/supabaseClient";
import oddsDisplay from "../lib/oddsDisplay";
import { display } from "@mui/system";

const style = {};

const members = ["Arch", "Haynes", "Luke", "Matt", "Obar", "Phil", "Schneider"];
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * members.length + ITEM_PADDING_TOP,
    },
  },
};

export default function NewBetForm() {
  const [submitter, setSubmitter] = React.useState([]);
  const [league, setLeague] = React.useState("");
  const [game, setGame] = React.useState("");
  const [bet_description, setBetDescription] = React.useState("");
  const [odds, setOdds] = React.useState("");
  const [proposed_amount, setProposedAmount] = React.useState(25);

  const changeSubmitter = (event) => {
    const {
      target: { value },
    } = event;
    setSubmitter(typeof value === "string" ? value.split(",") : value);
  };

  const changeLeague = (event) => {
    setLeague(event.target.value);
  };
  const changeGame = (event) => {
    setGame(event.target.value);
  };
  const changeBetDescription = (event) => {
    setBetDescription(event.target.value);
  };
  const changeOdds = (event) => {
    setOdds(event.target.value);
  };
  const changeProposedAmount = (event) => {
    setProposedAmount(event.target.value);
  };

  const incrementFive = () => {
    setProposedAmount(proposed_amount + 5);
  };
  const incrementTen = () => {
    setProposedAmount(proposed_amount + 10);
  };
  const incrementTwentyFive = () => {
    setProposedAmount(proposed_amount + 25);
  };
  const decrementFive = () => {
    proposed_amount <= 5
      ? proposed_amount
      : setProposedAmount(proposed_amount - 5);
  };
  const decrementTen = () => {
    proposed_amount <= 10
      ? proposed_amount
      : setProposedAmount(proposed_amount - 10);
  };
  const decrementTwentyFive = () => {
    proposed_amount <= 25
      ? proposed_amount
      : setProposedAmount(proposed_amount - 25);
  };

  const formatOdds = () => {
    console.log("Add Validation to formatOdds function");
  };

  const addBet = async () => {
    let { data, error } = await supabase
      .from("bets")
      .insert({
        submitter,
        league,
        event: game,
        bet_description,
        odds,
        proposed_amount,
      })
      .single()
      .select();
    if (error) console.log(error);
    console.log(data);
    setSubmitter([]);
    setLeague("");
    setGame("");
    setBetDescription("");
    setOdds("");
    setProposedAmount("");
  };

  return (
    <Grid2 container spacing={2}>
      <Grid2 xs={12} md={4}>
        <FormControl fullWidth sx={style}>
          <InputLabel id="submitter-label">Submitter</InputLabel>
          <Select
            labelId="submitter-label"
            multiple
            label="Submitter "
            id="submitter-select"
            value={submitter}
            onChange={changeSubmitter}
            input={
              <OutlinedInput id="select-multiple-chip" label="Submitter" />
            }
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {members.map((member) => (
              <MenuItem key={member} value={member}>
                {member}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid2>
      <Grid2 xs={12} md={4}>
        <FormControl fullWidth sx={style}>
          <TextField
            id="league-field"
            label="League"
            onChange={changeLeague}
            value={league}
          />
        </FormControl>
      </Grid2>
      <Grid2 xs={12} md={4}>
        <FormControl fullWidth sx={style}>
          <TextField
            id="event-field"
            label="Event"
            onChange={changeGame}
            value={game}
          />
        </FormControl>
      </Grid2>
      <Grid2 xs={12}>
        <FormControl fullWidth sx={style}>
          <TextField
            id="bet_description-field"
            label="Bet"
            onChange={changeBetDescription}
            value={bet_description}
          />
        </FormControl>
      </Grid2>
      <Grid2 xs={12} md={3}>
        <FormControl fullWidth sx={style}>
          <TextField
            id="odds-field"
            label="Odds"
            onChange={changeOdds}
            value={odds}
            placeholder="-110"
            onBlur={formatOdds}
          />
        </FormControl>
      </Grid2>
      <Grid2 xs={12} md={9}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Hidden smDown>
            <ButtonGroup
              size="large"
              variant="contained"
              sx={{
                marginRight: 1,
              }}
            >
              <Button onClick={decrementTwentyFive}>-25</Button>
              <Button onClick={decrementTen}>-10</Button>
              <Button onClick={decrementFive}>-5</Button>
            </ButtonGroup>
          </Hidden>
          <FormControl
            sx={{
              flexGrow: 1,
            }}
          >
            <TextField
              id="proposed_amount-field"
              label="Proposed Amount"
              onChange={changeProposedAmount}
              value={proposed_amount}
              type="number"
            />
          </FormControl>
          <ButtonGroup
            size="large"
            variant="contained"
            sx={{
              marginLeft: 1,
            }}
          >
            <Button onClick={incrementFive}>+5</Button>
            <Button onClick={incrementTen}>+10</Button>
            <Button onClick={incrementTwentyFive}>+25</Button>
          </ButtonGroup>
        </Box>
      </Grid2>
      <Grid2 xs={12}>
        <Button fullWidth variant="contained" onClick={addBet}>
          Submit
        </Button>
      </Grid2>
    </Grid2>
  );
}
