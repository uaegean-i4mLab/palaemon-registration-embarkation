import * as React from "react";
import LayoutNew from "./LayoutNew";
import Head from "next/head";
//AppBar
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// List
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

export default function IndexForm(props) {
  let longText = "";

  return (
    <LayoutNew home activeStep={0}>
      <Head>
        <title>Palaemon Embarkation Registration Service</title>
      </Head>

      <Typography variant="h5" sx={{ mt: 6, mb: 4 }}>
        Palaemon Embarkation Registration Service
      </Typography>
      <Typography sx={{ mt: 6, mb: 4 }}>
        To complete your Registration please authenticate using:
        <Box fontWeight="fontWeightBold" display="inline">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="1. Your Palaemon Service Card" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Typography>

      <Typography></Typography>
      <Box>
        <Button
          variant="contained"
          size="large"
          type="submit"
          onClick={() => {
            window.location = "/login";
          }}
        >
          Access the service
        </Button>
      </Box>
    </LayoutNew>
  );
}
