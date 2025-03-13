import React from "react";

function MapInfo() {
  return (
    <div className="flex items-center justify-center w-56 h-56  rounded m-4 overflow-hidden">
      <iframe
        className="w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3419.1341861422507!2d30.471795351332645!3d31.02251085307454!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f66b0789c9e45f%3A0xc336b0e718715584!2z2LTYsdmD2Kkg2LnYqNiv2KfZhNmE2Ycg2KfZhNiu2YjYp9mE2YLYqSDZhNiq2KzYp9ix2Kkg2K3Yr9mK2K_Yp9mE2KrYs9mE2YrYrSDZiNin2YTYp9iz2KrYq9mF2KfYsSDYp9mE2LnZgtin2LHZiQ!5e0!3m2!1sar!2seg!4v1741856741500!5m2!1sar!2seg"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapInfo;
