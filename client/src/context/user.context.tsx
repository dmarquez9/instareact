/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import { useAuth } from './auth.context';

const UserContext = React.createContext<any | null>(null);

function UserProvider(props: any): any {
  const { data } = useAuth();
  return <UserContext.Provider value={data} {...props} />;
}

function useUser(): any {
  const context = React.useContext(UserContext);
  if (context === undefined) {
    throw new Error(`useUser must be used within a UserProvider`);
  }
  return context;
}

export { UserProvider, useUser };
