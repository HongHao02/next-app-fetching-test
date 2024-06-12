import React from "react";
import UserCard from "../ui/dashboard/usercard";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  return (
    <div>
      <UserCard></UserCard>
      <Link href={"swr-fetching"}>
        <Button className="mt-6">SWR FETCHING</Button>
      </Link>
    </div>
  );
};

export default DashboardPage;
