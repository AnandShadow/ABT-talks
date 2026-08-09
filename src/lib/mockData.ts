export interface User {
  name: string;
  avatarUrl: string;
  streak: number;
  totalCompleted: number;
}

export interface Deliverable {
  id: string;
  label: string;
}

export interface ChallengeDay {
  dayNumber: number;
  title: string;
  description: string;
  deliverables: Deliverable[];
  status: 'completed' | 'current' | 'locked' | 'missed';
}

export const mockUser: User = {
  name: "Alex",
  avatarUrl: "https://api.dicebear.com/9.x/notionists/svg?seed=Alex",
  streak: 11,
  totalCompleted: 11,
};

export const mockDays: ChallengeDay[] = Array.from({ length: 60 }, (_, i) => {
  const dayNumber = i + 1;
  let status: ChallengeDay['status'] = 'locked';
  
  if (dayNumber <= 11) {
    status = 'completed';
  } else if (dayNumber === 12) {
    status = 'current';
  }

  return {
    dayNumber,
    title: `Day ${dayNumber}: Building the Foundation`,
    description: "Today we focus on shipping the core features that will define your project's primary value proposition.",
    deliverables: [
      { id: "github", label: "Push code to GitHub" },
      { id: "linkedin", label: "Share update on LinkedIn" },
      { id: "insight", label: "Daily Insight logged" }
    ],
    status,
  };
});

export const getDay = (id: number) => mockDays.find(d => d.dayNumber === id);
