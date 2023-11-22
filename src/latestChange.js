import React from "react";
import { useFlag, useStatus } from "@featurevisor/react";

export default function LatestChange() {
  const { isReady } = useStatus();
  const isEnabled = useFlag("showLatestChange");

  if (isReady && isEnabled) {
    return <div className="latest">Latest Change: COMMIT-MESSAGE-PLACEHOLDER</div>;
  }

  if (!isReady) {
    return <div className="latest">...</div>;
  }

  return <div className="latest">🔖</div>;
};
