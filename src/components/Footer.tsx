import { Truck, BadgeDollarSign, MapPin } from 'lucide-react';
import WhatsAppIcon from './WhatsAppIcon';
import { whatsappSupportUrl } from '@/data/whatsapp';

export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-charcoal-200 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
          <div className="inline-flex items-center gap-2 text-sm">
            <WhatsAppIcon className="w-5 h-5 text-[#25D366]" />
            <a
              href={whatsappSupportUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              دعم واتساب
            </a>
          </div>
          <div className="inline-flex items-center gap-2 text-sm">
            <BadgeDollarSign className="w-5 h-5 text-bordeaux-400" />
            الدفع عند الاستلام
          </div>
          <div className="inline-flex items-center gap-2 text-sm">
            <Truck className="w-5 h-5 text-bordeaux-400" />
            توصيل لجميع مدن المغرب
          </div>
          <div className="inline-flex items-center gap-2 text-sm">
            <MapPin className="w-5 h-5 text-bordeaux-400" />
            المغرب
          </div>
        </div>

        <div className="border-t border-charcoal-700 pt-5 text-center">
          <p className="text-xs text-charcoal-400">
            © {new Date().getFullYear()} — جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
