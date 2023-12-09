'use client'
import React, {  } from 'react'
import { song } from '@types'
import { createContext, useContext } from 'react';

// Create the context with a default value
const SongContext = createContext<song[] | null>(null);

// Custom hook for using the context
export function useSongContext() {
  const context = useContext(SongContext);
  if (!context) {
    throw new Error('useSongContext must be used within a SongContextProvider');
  }
  return context;
}

export default SongContext;
