/*
 * Copyright (C), 2024 Hibiscus Software. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

import WizardSidebar from "../../../components/wizard-sidebar";

export const metadata = {
  title: 'Data Download | Field Mangement System',
}

export default function Page() {
  return (
    <main className="flex">
      <WizardSidebar></WizardSidebar>
      <aside className="p-4 w-full">
        <div role="alert" className="alert rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
          <span>Download updated team and event lists from FIRST HQ.</span>
        </div>
      </aside>
    </main>
  );
}