import { ClipLoader } from "react-spinners";
import React from "react";

const Loading = props => {
  const style = { 
   position: "fixed",
   top: "50%", 
   left: "50%", 
   transform: "translate(-50%, -50%)" };

  return (
    <div style={style}>
      <ClipLoader sizeUnit={'px'} color={"green"} size={75} loading={props.isFetching} />
      <p>Loading....</p>
    </div> 
  );
};

export default Loading;