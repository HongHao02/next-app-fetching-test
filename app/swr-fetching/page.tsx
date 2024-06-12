"use client";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { User } from "@/lib/definitions";
import Link from "next/link";
import React from "react";
import useSWR from "swr";
import { SWRCard } from "../ui/swr/swr-card";
import { error } from "console";

const SWRFetching = () => {
  //   const fetcher = async (url: string) => {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     return data;
  //   };
  const fetcher = async (url: string) => {
    const res = await fetch(url);
    return res.json();
  };
  const { data, error } = useSWR("https://reqres.in/api/users?page=2", fetcher, {
    revalidateIfStale: false,
    refreshInterval: 60000, // Tự động refresh sau mỗi 5 giây
    revalidateOnFocus: true, // Tự động revalidate khi cửa sổ được focus
    revalidateOnReconnect: true, // Tự động revalidate khi kết nối mạng được khôi phục
    dedupingInterval: 2000, // Debounce yêu cầu trong 2 giây
  });
  console.log("data ", data?.data);

  //   if (error) return <div>Error</div>;
  if (error) {
    throw new Error('Failed to fetch the list of users.' + error.message);
  }
  if (!data)
    return (
      <div className="p-4">
        <Skeleton className="w-full p-4 h-44 rounded-md "></Skeleton>
      </div>
    );
  return (
    <div className="p-2">
      <div className="grid grid-flow-row grid-cols-1 md:grid-cols-6 gap-2 ">
        {data?.data.map((user: User) => (
          <SWRCard key={user.id} user={user}></SWRCard>
        ))}
      </div>
      <Link href={"/dashboard"}>
        <Button className="mt-4">Home</Button>
      </Link>
    </div>
  );
};

export default SWRFetching;
