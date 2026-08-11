import React from "react";
import * as LucideIcons from "lucide-react";

const aliases = {
  "alert-circle": "CircleAlert",
  "check-circle": "CircleCheck",
  "help-circle": "CircleHelp",
  "info-circle": "CircleInfo",
};

function getIconComponent(name) {
  const componentName = aliases[name] || name.split("-").map((part) => part.charAt(0).toUpperCase() + part.slice(1)).join("");
  return LucideIcons[componentName] || LucideIcons.Circle;
}

export function Icon({ name, size = 20, strokeWidth = 1.5, style, ...rest }) {
  const IconComponent = getIconComponent(name);

  return (
    <span
      aria-hidden="true"
      style={{ display: "inline-flex", width: size, height: size, flex: "0 0 auto", color: "inherit", ...style }}
      {...rest}
    >
      <IconComponent size={size} strokeWidth={strokeWidth} aria-hidden="true" />
    </span>
  );
}
