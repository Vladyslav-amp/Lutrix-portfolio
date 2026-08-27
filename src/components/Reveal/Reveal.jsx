import { useEffect, useRef, useState } from 'react';
import './Reveal.scss';
export default function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div'
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.unobserve(node);
      }
    }, {
      threshold: 0.14,
      rootMargin: '0px 0px -7% 0px'
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <Tag ref={ref} className={`reveal ${visible ? 'reveal--visible' : ''} ${className}`} style={{
    '--reveal-delay': `${delay}ms`
  }}>{children}</Tag>;
}
