import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#132a25",
          border: "3px solid #d6973d",
          borderRadius: "50%",
          color: "#f0bb5d",
          display: "flex",
          fontFamily: "Georgia",
          fontSize: 40,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        G
      </div>
    ),
    size,
  );
}
