import React from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <p>ini adalah layout untuk dashboard</p>
      {children}
    </div>
  );
}
