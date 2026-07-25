"use client";

import { useEffect, useState } from "react";

export function useTyping(words: string[]) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index] ?? "";
    const timeout = window.setTimeout(
      () => {
        if (!deleting && subIndex < word.length) setSubIndex((value) => value + 1);
        else if (!deleting && subIndex === word.length) setDeleting(true);
        else if (deleting && subIndex > 0) setSubIndex((value) => value - 1);
        else {
          setDeleting(false);
          setIndex((value) => (value + 1) % words.length);
        }
      },
      deleting ? 42 : 76,
    );

    return () => window.clearTimeout(timeout);
  }, [deleting, index, subIndex, words]);

  return `${words[index]?.slice(0, subIndex) ?? ""}|`;
}
