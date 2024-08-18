import React from "react";
import { currentUser } from "@clerk/nextjs/server";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { desc, eq } from "drizzle-orm";
import HistoryClient from "./HistoryClient";
export default async function HistoryPage() {
  const user = await currentUser();

  if (!user || !user.primaryEmailAddress?.emailAddress) {
    return <p className="text-center">No history available</p>;
  }

  const historyList = await db
    .select()
    .from(AIOutput)
    .where(eq(AIOutput.createdBy, user.primaryEmailAddress.emailAddress))
    .orderBy(desc(AIOutput.id));

  return <HistoryClient historyList={historyList} />;
}