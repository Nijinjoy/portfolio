import { ImageResponse } from "next/og";
import { siteConfig } from "@/constants/site";
import { stats } from "@/data/portfolio";

export const alt = `${siteConfig.name} | ${siteConfig.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const tech = ["React Native", "Next.js", "Vue.js", "WordPress"];

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px 80px",
        color: "#F8FAFC",
        background: "linear-gradient(135deg, #020617 0%, #0F172A 48%, #1E1B4B 100%)",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            fontSize: 24,
            fontWeight: 600,
            color: "#6EE7B7",
          }}
        >
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#10B981" }} />
          Available for new projects
        </div>
        <div style={{ marginTop: 36, fontSize: 92, fontWeight: 800, letterSpacing: -2 }}>
          {siteConfig.name}
        </div>
        <div style={{ marginTop: 8, fontSize: 40, fontWeight: 600, color: "#38BDF8" }}>
          {`${siteConfig.role} · Mobile, Tablet & Web`}
        </div>
        <div style={{ marginTop: 28, fontSize: 30, color: "#94A3B8", maxWidth: 900 }}>
          Fast, reliable apps people actually use, shipped to the App Store and Google Play.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          gap: 48,
        }}
      >
        <div style={{ display: "flex", gap: 12 }}>
          {tech.map((item) => (
            <div
              key={item}
              style={{
                display: "flex",
                padding: "10px 20px",
                borderRadius: 999,
                fontSize: 22,
                fontWeight: 600,
                color: "#CBD5E1",
                border: "1px solid rgba(148, 163, 184, 0.3)",
                background: "rgba(255, 255, 255, 0.05)",
              }}
            >
              {item}
            </div>
          ))}
        </div>
        <div style={{ display: "flex", gap: 36 }}>
          {stats.slice(0, 2).map((stat) => (
            <div key={stat.label} style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "#38BDF8" }}>{stat.value}</div>
              <div style={{ fontSize: 20, color: "#94A3B8" }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>,
    size,
  );
}
