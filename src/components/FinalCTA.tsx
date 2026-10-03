import { ArrowDown, Truck, BadgeDollarSign } from 'lucide-react';
import { PRICE_SINGLE, PRICE_DOUBLE } from '@/data/product';

interface FinalCTAProps {
  onOrderClick: () => void;
}

export default function FinalCTA({ onOrderClick }: FinalCTAProps) {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-beige-50 to-bordeaux-50">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900 mb-6">
          اختاري اللون ديالك وطلبي دابا ❤️
        </h2>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white shadow-md">
            <span className="text-charcoal-600 text-sm font-medium">قطعة واحدة:</span>
            <span className="text-xl font-extrabold text-bordeaux-700">{PRICE_SINGLE} درهم</span>
          </div>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-white shadow-md">
            <span className="text-charcoal-600 text-sm font-medium">قطعتان:</span>
            <span className="text-xl font-extrabold text-bordeaux-700">{PRICE_DOUBLE} درهم</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-7">
          <div className="inline-flex items-center gap-1.5 text-charcoal-700 font-medium text-sm">
            <Truck className="w-4 h-4 text-bordeaux-600" />
            🚚 التوصيل مجاني
          </div>
          <div className="inline-flex items-center gap-1.5 text-charcoal-700 font-medium text-sm">
            <BadgeDollarSign className="w-4 h-4 text-bordeaux-600" />
            💵 الدفع عند الاستلام
          </div>
        </div>

        <button
          onClick={onOrderClick}
          className="inline-flex items-center gap-2 px-10 py-4 rounded-2xl bg-bordeaux-600 hover:bg-bordeaux-700 active:scale-95 text-white font-bold text-lg shadow-xl shadow-bordeaux-200 transition-all duration-300"
        >
          اطلبي الآن
          <ArrowDown className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
