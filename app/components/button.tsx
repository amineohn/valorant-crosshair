"use client";
import { useRouter } from "next/navigation";

type Button = {
  label: string;
  route: string;
};
const Button = ({ label, route }: Button) => {
  const router = useRouter();
  return (
    <button
      className="rounded bg-gradient-to-r from-yellow-400 to-yellow-600 py-2 px-4 font-bold text-white hover:from-yellow-500 hover:to-yellow-700"
      onClick={() => router.push(route)}
    >
      {label}
    </button>
  );
};
export default Button;
