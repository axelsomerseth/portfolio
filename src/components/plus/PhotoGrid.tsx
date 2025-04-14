import React from "react";

import ducky from "../../assets/images/ducky.png";
import psAI from "../../assets/images/ps_ai.png";
import sapXsjsRef from "../../assets/images/sap_xsjs_ref.png";
import fullstackPathway from "../../assets/images/fullstack_pathway.png";
import isUnahPps from "../../assets/images/is_unah_pps.png";
import billsCutter from "../../assets/images/bills_cutter.png";
import misEstudios from "../../assets/images/mis_estudios.png";

const PhotoGrid: React.FC<{}> = () => {
  return (
    <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img src={sapXsjsRef} alt="" />
      </div>
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img src={ducky} alt="" />
      </div>
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img src={psAI} alt="" />
      </div>
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img src={billsCutter} alt="" />
      </div>
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img src={isUnahPps} alt="" />
      </div>
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img src={fullstackPathway} alt="" />
      </div>
      <div className="relative aspect-9/10 w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800 rotate-2">
        <img src={misEstudios} alt="" />
      </div>
    </div>
  );
};

export default PhotoGrid;
