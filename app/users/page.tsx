import React, { Suspense } from "react";
import Link from "next/link";
import { UserTable } from "./UserTable/UserTable";

interface Props {
  searchParams: { sortOrder: string };
}

const UserPage = async ({ searchParams: { sortOrder } }: Props) => {
  return (
    <>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <Suspense fallback={<p>Loading...</p>}>
      <UserTable sortOrder={sortOrder} />
      </Suspense>
    </>
  );
};

export default UserPage;
