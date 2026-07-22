import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #ffffff",
          borderRadius: 3,
          color: "#ffffff",
          background: "#000000",
          fontFamily: "monospace",
          fontSize: 14,
          fontWeight: 800,
          letterSpacing: "-0.04em",
        }}
      >
        TL
      </div>
    ),
    size
  );
}
