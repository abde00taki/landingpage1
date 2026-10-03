import { useEffect, useState } from 'react';
import { PRICE_SINGLE, PRICE_DOUBLE } from '@/data/product';

interface MobileStickyCTAProps {
  quantity: 1 | 2;
  onOrderClick: () => void;
}

export default function MobileStickyCTA({ quantity, onOrderClick }: MobileStickyCTAProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 400);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const price = quantity === 1 ? PRICE_SINGLE : PRICE_DOUBLE;
  const label = quantity === 1 ? 'اطلبي الآن' : 'أكملي الطلب';

  return (
    <div
      className={`sm:hidden fixed bottom-0 inset-x-0 z-30 bg-white border-t border-beige-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3 safe-padding">
        <div className="flex-shrink-0">
          <span className="text-xs text-charcoal-400 block">المجموع</span>
          <span className="text-lg font-extrabold text-bordeaux-700">{price} درهم</span>
        </div>
        <button
          onClick={onOrderClick}
          className="flex-1 py-3 rounded-xl bg-bordeaux-600 active:scale-95 text-white font-bold text-base shadow-md transition-all duration-200"
        >
          {label} — {price} درهم
        </button>
      </div>
    </div>
  );
}
