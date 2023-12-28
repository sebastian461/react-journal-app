import { MailOutline } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Outlet } from "react-router-dom";

export const JournalApp = () => {
  return (
    <>
      <Typography variant="h1">JournalApp</Typography>
      <MailOutline />

      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
