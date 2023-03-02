import * as React from "react";
import { Container } from "@mui/material";
import { supabase } from "./../lib/supabaseClient";
import BetCard from "../components/betCard";
import Grid from "@mui/material/Unstable_Grid2";
import SearchAppBar from "../components/searchAppBar";
import Header from "../components/header";
import AddBetButton from "../components/addBetButton";

function BetListPage({ bets }) {
  return (
    <>
      <Header />
        <SearchAppBar />
      <Container>
        <Grid container spacing={2}>
          {bets.map((bet) => (
            <Grid xs={12} sm={6} md={4} key={bet.id}>
              <BetCard bet={bet}></BetCard>
            </Grid>
          ))}
        </Grid>
        <AddBetButton />
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  let { data } = await supabase.from("bets").select();

  return {
    props: {
      bets: data,
    },
  };
}

export default BetListPage;
