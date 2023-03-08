import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import calculatePayout from "../lib/calculatePayout";
import oddsDisplay from "../lib/oddsDisplay";
import concatArray from "../lib/concatArray";

export default function BetCard({ bet }) {
  console.log(bet)
  let betURL = "./bet-detail/" + bet.id;
  return (
    <a href = {betURL}>
    <Card variant="outlined">
      <CardContent sx={{ position: "relative" }}>
        <div>Member: {concatArray(bet.submitter)}</div>
        <div>League: {bet.league}</div>
        <div>Event: {bet.event}</div>
        <div>Bet: {bet.bet_description}</div>
        <div>Amount: ${bet.proposed_amount}</div>
        <div>Odds: {oddsDisplay(bet.odds)}</div>
        <div>Payout: ${calculatePayout(bet.odds, bet.proposed_amount)}</div>
        <Chip
          label={(bet.isSettled === false) ? "OPEN" : bet.result}
          color={chipColor(bet)}
          variant={(bet.isSettled === true) ? "filled" : "outlined"}
          sx={{
            position: "absolute",
            bottom: 24,
            right: 16,
          }}
        />
      </CardContent>
    </Card>
    </a>
  );
}

function chipColor(x) {
  let color;
  switch (x.result) {
    case "HIT":
      color = "success";
      break;
    case "MISS":
      color = "error";
      break;
    default:
      color = "primary";
  }
  return color;
}

