import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen bg-gray-700 text-white">
      <Link href={"/dashboard"}>
        <div className="w-32 h-20 bg-white rounded-md flex text-black items-center justify-center">
          Dashboard
        </div>
      </Link>
    </main>
  );
}
