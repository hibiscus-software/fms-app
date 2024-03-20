/*
 * Copyright (C), 2024 Hibiscus Software. Some rights reserved. This work is
 * licensed under the terms of the MIT license which can be found in the
 * root directory of this project.
 */

export const metadata = {
  title: 'Match Play | Field Mangement System',
}

function FieldStatus() {
  return (
    <section className="flex flex-row p-4 space-x-4">
      <div className="bg-blue-500 text-white rounded-xl flex flex-col">
        <div className="p-2 space-x-2 flex flex-row items-center justify-center justify-between">
          <p className="bg-green-500 rounded-xl px-4 py-1 text-md font-semibold">Ready</p>
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
      </div>
      <div className="bg-white text-black rounded-xl px-4 py-1 flex flex-col items-center">
        <p className="text-md font-semibold">Qualification 8</p>
        <p className="text-md font-semibold">0:15</p>
      </div>
      <div className="bg-red-500 text-white rounded-xl p-2 space-x-2 flex flex-row-reverse items-center justify-center">
        <p className="bg-green-500 rounded-xl px-4 py-1 ml-2 text-md font-semibold">Ready</p>
        <p className="text-md font-semibold">Red Alliance</p>
        <p className="text-2xl bg-red-600 rounded-xl px-4 py-1 font-semibold">0</p>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <main className="flex w-full">
      <FieldStatus></FieldStatus>
    </main>
  );
}