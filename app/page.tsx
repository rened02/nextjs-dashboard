'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/login'); // Reemplaza la ruta actual en lugar de simplemente empujar una nueva entrada en el historial
  }, [router]);

  return null;
}
