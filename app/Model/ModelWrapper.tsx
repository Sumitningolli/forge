"use client";

import dynamic from 'next/dynamic';

const ClientModel = dynamic(() => import('./ModelClient'), { ssr: false });

export default function ModelWrapper() {
  return <ClientModel />;
}


