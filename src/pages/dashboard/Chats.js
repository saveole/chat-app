import { Box, IconButton, Typography } from "@mui/material";
import { CircleDashed, Stack } from "phosphor-react";
import React from "react";

const Chats = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100%",
        width: 320,
        backgroundColor: "#F8FAFF",
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
      }}
    >
      <Stack>
        <Typography variant="h5">Chats</Typography>
      </Stack>

      <IconButton>
        <CircleDashed />
      </IconButton>
    </Box>
  );
};

export default Chats;
