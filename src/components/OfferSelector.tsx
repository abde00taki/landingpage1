import { Check, Flame, Truck } from 'lucide-react';
import { PRICE_SINGLE, PRICE_DOUBLE } from '@/data/product';

interface OfferSelectorProps {
  quantity: 1 | 2;
  onSelect: (q: 1 | 2) => void;
}

export default function OfferSelector({ quantity, onSelect }: OfferSelectorProps) {
  return (
    <section className="py-12 sm:py-16 bg-white scroll-margin-top" id="offer">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900">
            اختاري العرض المناسب ليك
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {/* Single piece */}
          <button
            onClick={() => onSelect(1)}
            className={`relative text-right rounded-3xl p-5 sm:p-6 transition-all duration-300 ${
              quantity === 1
                ? 'bg-bordeaux-50 ring-2 ring-bordeaux-600 shadow-xl'
                : 'bg-beige-50 ring-1 ring-beige-200 hover:ring-bordeaux-300'
            }`}
          >
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-charcoal-900">قطعة واحدة</h3>
              {quantity === 1 && (
                <span className="w-6 h-6 rounded-full bg-bordeaux-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </span>
              )}
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-extrabold text-bordeaux-700">{PRICE_SINGLE}</span>
              <span className="text-lg font-semibold text-bordeaux-600">درهم</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-sm text-charcoal-600 font-medium">
              <Truck className="w-4 h-4 text-bordeaux-600" />
              التوصيل مجاني
            </div>
          </button>

          {/* Two pieces */}
          <button
            onClick={() => onSelect(2)}
            className={`relative text-right rounded-3xl p-5 sm:p-6 transition-all duration-300 ${
              quantity === 2
                ? 'bg-bordeaux-50 ring-2 ring-bordeaux-600 shadow-xl'
                : 'bg-beige-50 ring-1 ring-beige-200 hover:ring-bordeaux-300'
            }`}
          >
            {/* Badge */}
            <div className="absolute -top-3 right-5 px-3 py-1 rounded-full bg-gradient-to-l from-bordeaux-600 to-bordeaux-500 text-white text-xs font-bold shadow-lg flex items-center gap-1">
              <Flame className="w-3.5 h-3.5" />
              عرض خاص
            </div>

            <div className="flex items-center justify-between mb-3">
              <h3 className="text-lg font-bold text-charcoal-900">قطعتان</h3>
              {quantity === 2 && (
                <span className="w-6 h-6 rounded-full bg-bordeaux-600 flex items-center justify-center">
                  <Check className="w-4 h-4 text-white" strokeWidth={3} />
                </span>
              )}
            </div>
            <div className="flex items-baseline gap-3 mb-1">
              <span className="text-4xl font-extrabold text-bordeaux-700">{PRICE_DOUBLE}</span>
              <span className="text-lg font-semibold text-bordeaux-600">درهم</span>
            </div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-charcoal-400 line-through">بدل 540 درهم</span>
              <span className="text-sm font-bold text-bordeaux-600">وفري 40 درهم 🔥</span>
            </div>
            <div className="inline-flex items-center gap-1.5 text-sm text-charcoal-600 font-medium">
              <Truck className="w-4 h-4 text-bordeaux-600" />
              التوصيل مجاني
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}
