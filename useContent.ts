'use client';

import { useEffect, useState } from 'react';
import { supabase } from './supabase';

export function useContent() {
  const [content, setContent] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchContent() {
      const { data } = await supabase
        .from('site_content')
        .select('key, value');

      if (data) {
        const map: Record<string, string> = {};
        data.forEach((row: { key: string; value: string }) => {
          map[row.key] = row.value;
        });
        setContent(map);
      }
      setLoading(false);
    }

    fetchContent();
  }, []);

  return { content, loading };
}