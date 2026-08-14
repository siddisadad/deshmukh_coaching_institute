import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "linear-gradient(145deg, #071326 0%, #0e2a56 58%, #16356b 100%)",
          color: "white",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            fontSize: 22,
            letterSpacing: "0.28em",
            fontWeight: 700,
          }}
        >
          <div
            style={{
              width: 58,
              height: 58,
              borderRadius: 16,
              background: "#ff8a15",
              color: "#081428",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 30,
              fontWeight: 800,
            }}
          >
            D
          </div>
          DESHMUKH COACHING INSTITUTE
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
          <div style={{ fontSize: 64, fontWeight: 800, lineHeight: 1.1, maxWidth: 920 }}>
            Build Your Future With the Right Preparation.
          </div>
          <div style={{ fontSize: 28, color: "#f5c518", fontWeight: 700 }}>
            Learn. Prepare. Achieve.
          </div>
        </div>
      </div>
    ),
    size,
  );
}
