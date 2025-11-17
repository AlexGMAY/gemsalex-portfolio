import React from "react";
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") || "Merveille Alexander";
  const description =
    searchParams.get("description") || "Strategic Software Engineer & Business Problem Solver";

  return new ImageResponse(
    React.createElement(
      "div",
      {
        style: {
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#000",
          backgroundImage: "linear-gradient(to bottom right, #1a1a1a, #000)",
          fontFamily: "system-ui, sans-serif",
        },
      },
      React.createElement(
        "div",
        {
          style: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px",
            color: "white",
          },
        },
        React.createElement(
          "h1",
          {
            style: {
              fontSize: "72px",
              fontWeight: "bold",
              marginBottom: "16px",
              textAlign: "center",
              background: "linear-gradient(to right, #22d3ee, #a3e635)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
            },
          },
          title
        ),
        React.createElement(
          "p",
          {
            style: {
              fontSize: "32px",
              color: "#d1d5db",
              textAlign: "center",
              margin: 0,
            },
          },
          description
        )
      )
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
