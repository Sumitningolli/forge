import dynamic from 'next/dynamic';
import React from 'react';

const ModelClient = dynamic(() => import('./ModelClient'), { ssr: false });

export default function Page() {
  return <ModelClient />;
}
