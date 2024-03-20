/*
 * Copyright (C), 2024 Hibiscus Software. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import Link from "next/link";

export default function WizardSidebar() {
  return (
    <aside className="pt-4 pl-4 pb-4">
      <ul className="menu p-4 w-60 min-h-full rounded-lg bg-base-200 text-base-content">
        <center><h2>Event Wizard Steps</h2></center>
        <div className="divider"></div>
        <li><Link href="/event-wizard/data-download">1. Data Download</Link></li>
        <li><a>2. Event Selection</a></li>
        <li><a>3. Team Selection</a></li>
      </ul>
    </aside>
  );
}