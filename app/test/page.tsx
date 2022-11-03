import React from "react";

type Props = {};

export default function Test({}: Props) {
  return (
    <div className="flex h-full min-h-screen w-full flex-col bg-gradient-to-b from-yellow-50/20 via-amber-100/60 to-yellow-50/40">
      <p className="text-center text-2xl text-gray-800">test</p>
    </div>
  );
}
