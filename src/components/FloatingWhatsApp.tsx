import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappSupportUrl } from '@/data/whatsapp';

export default function FloatingWhatsApp() {
  const [showLabel, setShowLabel] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1500);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (dismissed) return;
    const t = setTimeout(() => setShowLabel(true), 3000);
    return () => clearTimeout(t);
  }, [dismissed]);

  if (!visible) return null;

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 z-40 flex items-end gap-2">
      {showLabel && !dismissed && (
        <div className="relative mb-1 bg-white rounded-2xl shadow-xl px-4 py-2.5 ring-1 ring-beige-200 animate-slide-in">
          <button
            onClick={() => setDismissed(true)}
            className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-charcoal-200 hover:bg-charcoal-300 flex items-center justify-center"
            aria-label="إغلاق"
          >
            <X className="w-3 h-3 text-white" />
          </button>
          <p className="text-sm font-bold text-charcoal-800 whitespace-nowrap">عندك سؤال؟</p>
          <p className="text-xs text-charcoal-500 whitespace-nowrap">تواصل معنا</p>
        </div>
      )}

      <a
        href={whatsappSupportUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className="flex-shrink-0 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#1da851] active:scale-90 text-white shadow-lg shadow-green-300 flex items-center justify-center transition-all duration-300"
        aria-label="تواصل معنا عبر واتساب"
      >
        <WhatsAppIcon className="w-7 h-7" />
      </a>
    </div>
  );
}
