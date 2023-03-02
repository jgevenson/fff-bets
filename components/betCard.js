import Chip from "@mui/material/Chip";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import calculatePayout from "../lib/calculatePayout";
import oddsDisplay from "../lib/oddsDisplay";

export default function BetCard({ bet }) {
  bet.isSettled = betStatus(bet.result);
  return (
    <Card variant="outlined">
      <CardContent sx={{ position: "relative" }}>
        <div>Member: {concatArray(bet.submitter)}</div>
        <div>League: {bet.league}</div>
        <div>Event: {bet.event}</div>
        <div>Bet: {bet.bet_description}</div>
        <div>Amount: ${bet.proposed_amount}</div>
        <div>Odds: {oddsDisplay(bet.odds)}</div>
        <div>Payout: ${calculatePayout(bet.odds,bet.proposed_amount)}</div>
        <Chip
          label={chipLabel(bet)}
          color={chipColor(bet)}
          variant={chipOutline(bet)}
          sx={{
            position: "absolute",
            bottom: 24,
            right: 16,
          }}
        />
      </CardContent>
    </Card>
  );
}
const concatArray = b => {
  let text = '';
  if (b.length === 1) {
    text = b    
  } else {
    for(let i=0;i<b.length;i++) {
      text += b[i] + ", "
    }
  }
  return text
}


function betStatus(x) {
  return (x != null || x > "") ? "TRUE" : "FALSE";
}

function chipLabel(x) {
  return x.isSettled === "FALSE" ? "OPEN" : x.result;
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

function chipOutline(x) {
  return x.isSettled === "TRUE" ? "filled" : "outlined";
}
