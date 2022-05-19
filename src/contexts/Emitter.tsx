
import React, { createContext, useContext, useMemo } from 'react';
import EventEmitter from "events";

export enum TopicsEmitter {
  users = 'users'
}

interface EmitterContextInterface {
  emitter?: EventEmitter,
  unsubscribeUsers?: (listener: any) => void
  emitUsers: () => void
}
export const EmitterContext = createContext<EmitterContextInterface>({
  emitUsers: () => { }
});

export const useEmitter = () => useContext(EmitterContext);

interface EmitterProviderProps {
  children: any
}

const EmitterProvider = ({ children }: EmitterProviderProps) => {
  const emitter = useMemo(() => new EventEmitter(), [])

  const unsubscribeUsers = (listeners: any[]) => {
    listeners.forEach(listener => emitter.removeListener(TopicsEmitter.users, listener))
  }

  const emitUsers = () => {
    emitter.emit(TopicsEmitter.users)
  }

  return <EmitterContext.Provider
    value={{
      emitter,
      unsubscribeUsers,
      emitUsers
    }}>
    {children}
  </EmitterContext.Provider>
}

export default EmitterProvider