import React from "react";

import { useColorMode } from "@docusaurus/theme-common";

import ReadingIcon from "@site/static/img/icons/hi-reading-icon.svg";
import PrereqIcon from "@site/static/img/icons/hi-prerequisite-icon.svg";
import TargetIcon from "@site/static/img/icons/hi-target-icon.svg";
import StarIcon from "@site/static/img/icons/hi-star-icon.svg";
import TipIcon from "@site/static/img/icons/hi-tip-icon.svg";
import NoteIcon from "@site/static/img/icons/hi-note-icon.svg";
import CoffeeIcon from "@site/static/img/icons/hi-coffee-icon.svg";
import InfoIcon from "@site/static/img/icons/hi-info-icon.svg";
import WarnIcon from "@site/static/img/icons/hi-warn-icon.svg";

const typeToStyles = {
  tip: { color1: "#336667", color2: "#00B067", icon: <TipIcon /> },
  reading: {
    color1: "#F46800",
    color2: "#F24CF4",
    icon: ReadingIcon,
  },
  info: { color1: "#336667", color2: "#00B067", icon: <InfoIcon /> },
  warn: { color1: "#00B067", color2: "#FFD303", icon: <WarnIcon /> },
  warning: { color1: "#00B067", color2: "#FFD303", icon: <WarnIcon /> },
  synopsis: {
    color1: "var(--background-color-secondary)",
    color2: "var(--semi-transparent-color-3)",
    icon: null,
  },
  prerequisite: {
    color1: "var(--color-text-strong)",
    color2: "var(--background-color-secondary)",
    icon: <PrereqIcon />,
  },
  learning: {
    color1: "#6836D0",
    color2: "#05BDFC",
    icon: <TargetIcon />,
  },
  "best-practice": {
    color1: "#6836D0",
    color2: "#6836D0",
    icon: <StarIcon />,
  },
  remember: { color1: "#6D0000", color2: "#F66800", icon: <TipIcon /> },
  note: { color1: "#F69900", color2: "#FFCE15", icon: <NoteIcon /> },
  docs: { color1: "#6836D0", color2: "#F44CF6", icon: <CoffeeIcon /> },
  // add as many types as you like
};

const gradientStyles = ({ color1, color2 }) => ({
  background: `linear-gradient(78.06deg, ${color1} 1.14%, ${color2} 98.88%)`,
  border: 0,
  borderRadius: 16,
  padding: "0 30px",
  display: "flex",
  width: "100%",
  // alignItems: "center",
  justifyContent: "start",
  marginBottom: 20,
  fontSize: 21,
  flexWrap: "wrap",
  flexDirection: "column",
});

function HighlightBox({ type, title, children }) {
  const styles = typeToStyles[type] || typeToStyles.info; // default to 'info' if type doesn't exist

  const { isDarkTheme } = useColorMode();
  const iconStyles = {
    alignSelf: "center",
    marginTop: "10px",
    filter: isDarkTheme ? "brightness(0) invert(1)" : "brightness(0)",
  };

  return (
    <div style={gradientStyles(styles)}>
      <div
        style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
      >
        <div style={iconStyles}>{styles.icon}</div>
        <h3 style={{ marginTop: "10px", marginLeft: "10px" }}>{title}</h3>
      </div>
      {children}
    </div>
  );
}

export default HighlightBox;
