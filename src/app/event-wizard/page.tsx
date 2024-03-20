/*
 * Copyright (C), 2024 Hibiscus Software. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import WizardSidebar from "../../components/wizard-sidebar";

export const metadata = {
  title: 'Event Wizard | Field Mangement System',
}

export default function Page() {
  return (
    <main className="flex">
      <WizardSidebar></WizardSidebar>
      <aside className="p-4 w-full">

      </aside>
    </main>
  );
} 