"use server";

import { completeDay } from "@/lib/mockData";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function submitProofOfWork(dayId: number) {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Update mock database in memory
  completeDay(dayId);
  
  // Bust the cache for these pages
  revalidatePath('/dashboard');
  revalidatePath(`/day/${dayId}`);
  
  redirect('/dashboard');
}
