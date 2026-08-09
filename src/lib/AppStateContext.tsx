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
    // Load from local storage on mount
    const storedUser = localStorage.getItem('abtalks_user');
    const storedDays = localStorage.getItem('abtalks_days');
    
    if (storedUser) setUser(JSON.parse(storedUser));
    if (storedDays) setDays(JSON.parse(storedDays));
    
    setIsMounted(true);
  }, []);

  const completeDay = (dayId: number) => {
    setDays((prevDays) => {
      const newDays = [...prevDays];
      const dayIndex = newDays.findIndex(d => d.dayNumber === dayId);
      
      if (dayIndex !== -1 && newDays[dayIndex].status === 'current') {
        newDays[dayIndex] = { ...newDays[dayIndex], status: 'completed' };
        
        if (dayIndex + 1 < newDays.length) {
          newDays[dayIndex + 1] = { ...newDays[dayIndex + 1], status: 'current' };
        }
        
        localStorage.setItem('abtalks_days', JSON.stringify(newDays));
        return newDays;
      }
      return prevDays;
    });

    setUser((prevUser) => {
      const newUser = {
        ...prevUser,
        streak: prevUser.streak + 1,
        totalCompleted: prevUser.totalCompleted + 1,
      };
      localStorage.setItem('abtalks_user', JSON.stringify(newUser));
      return newUser;
    });
  };

  const getDay = (id: number) => days.find(d => d.dayNumber === id);

  // Prevent hydration mismatch by returning a loading state or nothing initially
  // but since we want SEO/flicker-free we can just render it. 
  // Wait, if it renders initial state on server, and local storage state on client, React will throw hydration errors.
  // The safest way is to render nothing until mounted.
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
