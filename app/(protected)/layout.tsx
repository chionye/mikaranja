/** @format */

"use client";

import { Header, SideMenu } from "@/components/layout";
import { ReactNode } from "react";
import { QueryClient } from "@tanstack/react-query";
import { createAsyncStoragePersister } from "@tanstack/query-async-storage-persister";
import { PersistQueryClientProvider } from "@tanstack/react-query-persist-client";
import { AuthProvider } from "@/contexts/AuthContext";

interface Props {
  children: ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 1000 * 60 * 60 * 24,
    },
  },
});

const persister = createAsyncStoragePersister({
  storage: window.localStorage,
});

export default function ProtectedLayout({ children }: Props) {
  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister }}>
      <AuthProvider>
        <div className='bg-blue-50 min-h-screen relative'>
          <Header />
          <SideMenu />
          <main className='ml-56 mt-16'>{children}</main>
        </div>
      </AuthProvider>
    </PersistQueryClientProvider>
  );
}
