/*
 * Copyright (C), 2024 Hibiscus Software. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

export const metadata = {
  title: 'Match Play | Field Mangement System',
}

let isBlueAllianceReady: boolean = true;
let isRedAllianceReady: boolean = true;

function BlueAllianceReady() {
  if (isBlueAllianceReady) {
    return (
      <p className="bg-green-500 rounded-xl px-4 py-1 text-md font-semibold">Ready</p>
    );
  } else {
    return (
      <p className="bg-red-500 rounded-xl px-4 py-1 text-md font-semibold">Not Ready</p>
    );
  }
}

function RedAllianceReady() {
  if (isRedAllianceReady) {
    return (
      <p className="bg-green-500 rounded-xl px-4 py-1 text-md font-semibold">Ready</p>
    );
  } else {
    return (
      <p className="bg-red-500 rounded-xl px-4 py-1 text-md font-semibold">Not Ready</p>
    );
  }
}

function FieldStatus() {
  return (
    <section className="flex flex-row p-4 space-x-4 w-full justify-center">
      <div className="bg-blue-500 text-white rounded-xl flex flex-col">
        <div className="p-2 space-x-2 flex flex-row items-center justify-center justify-between">
          <BlueAllianceReady></BlueAllianceReady>
          <p className="text-md font-semibold">Blue Alliance</p>
          <p className="text-2xl bg-blue-600 rounded-xl px-4 py-1 font-semibold">0</p>
        </div>
        <div className="font-semibold p-2 space-x-2 flex flex-row">
          <p>Station</p>
          <p>Team</p>
          <p>Bypass</p>
          <p>DQ</p>
          <p>WPA</p>
          <p>DS</p>
          <p>E-Stop</p>
          <p>Robot</p>
        </div>
        <div className="font-semibold p-2 space-x-2 flex flex-row">
          <p>1</p>
          <p>3602</p>
          <p>Stop</p>
          <p>Card</p>
          <input type="checkbox" className="checkbox border-white" />
          <input type="checkbox" className="checkbox border-white" />
        </div>
      </div>
      <div className="bg-white text-black rounded-xl px-4 py-1 flex flex-col items-center">
        <p className="text-md font-semibold">Qualification 8</p>
        <p className="text-md font-semibold">0:15</p>
      </div>
      <div className="bg-red-500 text-white rounded-xl flex flex-col">
        <div className="p-2 space-x-2 flex flex-row-reverse items-center justify-center justify-between">
          <RedAllianceReady></RedAllianceReady>
          <p className="text-md font-semibold">Red Alliance</p>
          <p className="text-2xl bg-red-600 rounded-xl px-4 py-1 font-semibold">0</p>
        </div>
        <div className="font-semibold p-2 space-x-2 flex flex-row">
          <p>Station</p>
          <p>Team</p>
          <p>Bypass</p>
          <p>DQ</p>
          <p>WPA</p>
          <p>DS</p>
          <p>E-Stop</p>
          <p>Robot</p>
        </div>
        <div className="font-semibold p-2 space-x-2 flex flex-row">
          <p>1</p>
          <p>3602</p>
          <p>Stop</p>
          <p>Card</p>
          <input type="checkbox" className="checkbox border-white" />
          <input type="checkbox" className="checkbox border-white" />
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="flex">
      <FieldStatus></FieldStatus>
    </main>
  );
}