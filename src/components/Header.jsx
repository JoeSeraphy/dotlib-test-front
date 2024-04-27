import React from "react";

export default function Header() {
  return (
    <div>
      {" "}
      <header className="max-w-screen-xl m-auto py-4">
        <div className="flex justify-between">
          <img src="logo.png" alt="logo" />
          <span>Test-frontend</span>
        </div>
      </header>
    </div>
  );
}
