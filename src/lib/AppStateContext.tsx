"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialMockUser, initialMockDays, User, ChallengeDay } from './mockData';

type AppState = {
  user: User;
  days: ChallengeDay[];
  completeDay: (dayId: number) => void;
  getDay: (dayId: number) => ChallengeDay | undefined;
};

const AppStateContext = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(initialMockUser);
  const [days, setDays] = useState<ChallengeDay[]>(initialMockDays);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem('abtalks_user');
    const storedDays = localStorage.getItem('abtalks_days');
    
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedDays) setDays(JSON.parse(storedDays));
    
    setIsMounted(true);
  }, []);

  const completeDay = (dayId: number) => {
    const dayIndex = days.findIndex(d => d.dayNumber === dayId);
    
    // Only allow submitting if it's the current active day
    if (dayIndex === -1 || days[dayIndex].status !== 'current') {
      return; 
    }

    const newDays = [...days];
    newDays[dayIndex] = { ...newDays[dayIndex], status: 'completed' };
    if (dayIndex + 1 < newDays.length) {
      newDays[dayIndex + 1] = { ...newDays[dayIndex + 1], status: 'current' };
    }
    
    setDays(newDays);
    localStorage.setItem('abtalks_days', JSON.stringify(newDays));

    const newUser = {
      ...user,
      streak: user.streak + 1,
      totalCompleted: user.totalCompleted + 1,
    };
    
    setUser(newUser);
    localStorage.setItem('abtalks_user', JSON.stringify(newUser));
  };

  const getDay = (id: number) => days.find(d => d.dayNumber === id);

  if (!isMounted) {
    return <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center" />;
  }

  return (
    <AppStateContext.Provider value={{ user, days, completeDay, getDay }}>
      {children}
    </AppStateContext.Provider>
  );
}

export const useAppState = () => {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error("useAppState must be used within AppStateProvider");
  return ctx;
};
