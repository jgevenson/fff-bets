import * as React from "react";
import { useEffect } from "react";
import { Container } from "@mui/material";
import { supabase } from "../../../lib/supabaseClient";
import Grid from "@mui/material/Unstable_Grid2";
import SearchAppBar from "../../../components/searchAppBar";
import Header from "../../../components/header";
import AddBetButton from "../../../components/addBetButton";
import { useRouter } from "next/router";
import { OilBarrel } from "@mui/icons-material";

function BetDetailPage() {
  const router = useRouter()
  const id = router.query.id

  const [bet, setBet] = React.useState("");

  useEffect(() => {
    fetchBet()
  },[])

  const fetchBet = async () => {
    let {data: bet, error} = await supabase
    .from('bets')
    .select()
    .eq('id',id)
    .single()

    if (error) console.log('error', error)
    else setBet(bet)
  }
  console.log(bet)
  

  return (
    <>
      <Header />
        <SearchAppBar />
      <Container>
        <Grid container spacing={2}>
          {bet.submitter}
        </Grid>
        <AddBetButton />
      </Container>
    </>
  );
}
export default BetDetailPage;