"use server"

import { headers } from "next/headers";

export async function getCurrentPath() {
  const headerList = await headers();
  return headerList.get("x-current-path");
}
