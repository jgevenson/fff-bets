import * as React from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { supabase } from "../../../lib/supabaseClient";
import Grid from "@mui/material/Unstable_Grid2";
import SearchAppBar from "../../../components/searchAppBar";
import Header from "../../../components/header";
import AddBetButton from "../../../components/addBetButton";
import { useRouter } from "next/router";

function BetDetailPage() {
  const router = useRouter();
  const id = router.query.id;
  const [bet, setBet] = React.useState("");

  useEffect(() => {
    const fetchBet = async () => {
      let { data: bet, error } = await supabase
        .from("bets")
        .select()
        .eq("id", id)
        .single();
  
      if (error) console.log("error", error);
      else setBet(bet);
    };
    fetchBet();
  }, [id]);

  console.log(bet);

  return (
    <>
      <Header />
      <SearchAppBar />
      <Container>
        <Grid container spacing={2}>
          <Grid xs={12}>
            <div>Member: {bet.submitter}</div>
          </Grid>
          <Grid xs={12}>
            <div>League: {bet.league}</div>
          </Grid>
          <Grid xs={12}>
            <div>Event: {bet.event}</div>
          </Grid>
          <Grid xs={12}>
            <div>Bet: {bet.bet_description}</div>
          </Grid>
          <Grid xs={12}>
            <div>Amount: ${bet.proposed_amount}</div>
          </Grid>
          <Grid xs={12}>
            <div>Odds: {bet.odds}</div>
          </Grid>
        </Grid>
        <AddBetButton />
      </Container>
    </>
  );
}
export default BetDetailPage;
