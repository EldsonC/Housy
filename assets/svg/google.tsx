import React from "react";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";

export function Google() {
  return (
    <Svg
      width="37"
      height="37"
      fill="none"
      viewBox="0 0 37 37"
    >
      <Rect
        width="37"
        height="37"
        fill="#F1E7FE"
        fillOpacity="0.44"
        rx="9"
      ></Rect>
      <G clipPath="url(#clip0_52_5)">
        <Path
          fill="#fff"
          d="M26.488 17.378c.105.604.157 1.216.157 1.83 0 2.737-.98 5.053-2.683 6.62h.003C22.475 27.204 20.428 28 18 28a9 9 0 010-18 8.663 8.663 0 016.021 2.342l-2.57 2.57A4.894 4.894 0 0018 13.562c-2.348 0-4.342 1.584-5.053 3.717a5.4 5.4 0 000 3.446h.003c.714 2.13 2.706 3.713 5.053 3.713 1.213 0 2.255-.31 3.063-.86h-.004a4.162 4.162 0 001.8-2.734H18v-3.465l8.488-.001z"
        ></Path>
      </G>
      <Defs>
        <ClipPath id="clip0_52_5">
          <Path
            fill="#fff"
            d="M0 0H18V18H0z"
            transform="translate(9 10)"
          ></Path>
        </ClipPath>
      </Defs>
    </Svg>
  );
}