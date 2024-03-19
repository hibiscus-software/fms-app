/*
 * Copyright (C), 2024 Hibiscus Software. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import Link from 'next/link'

export default function Header() {
  return (
    <header className="p-2 bg-base-300 text-base-content">
      <div role="tablist" className="tabs tabs-md">
        <Link href="/event-wizard" role="tab" className="tab"><i className="fa-solid fa-wand-magic-sparkles"></i>&nbsp;Event Wizard</Link>
        <Link href="/" role="tab" className="tab"><i className="fa-solid fa-play"></i>&nbsp;Match Play</Link>
        <Link href="/" role="tab" className="tab"><i className="fa-solid fa-magnifying-glass"></i>&nbsp;Match Test</Link>
        <Link href="/" role="tab" className="tab"><i className="fa-solid fa-pencil"></i>&nbsp;Match Review</Link>
        <Link href="/" role="tab" className="tab"><i className="fa-regular fa-rectangle-list"></i>&nbsp;Field Test</Link>
        <Link href="/" role="tab" className="tab"><i className="fa-solid fa-file"></i>&nbsp;Reports</Link>
        <Link href="/" role="tab" className="tab"><i className="fa-solid fa-gear"></i>&nbsp;Settings</Link>
        <Link href="/" role="tab" className="tab"><i className="fa-solid fa-circle-info"></i>&nbsp;About</Link>
      </div>
    </header>
  );
}