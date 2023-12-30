import { Outlet } from "react-router-dom";

export const JournalApp = () => {
  return (
    <>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
