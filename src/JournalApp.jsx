import { Outlet } from "react-router-dom";

export const JournalApp = () => {
  return (
    <>
      <h1>JournalApp</h1>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
};
