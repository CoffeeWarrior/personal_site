import React, { useState, useEffect } from "react";

export function UseVisible(): any {
  const containerRef = React.createRef<HTMLElement>();
  const [visible, setVisible] = useState<Boolean>(false);

  const callback = (entries: IntersectionObserverEntry[]) => {
    const [entry] = entries;
    setVisible(entry.isIntersecting);
  };

  useEffect(() => {
    if (containerRef.current != null) {
      const observer = new IntersectionObserver(callback, {
        root: null,
        rootMargin: "0px",
        threshold: 1,
      });
      observer.observe(containerRef.current);
    }
  }, [containerRef]);

  return [containerRef, visible];
}
