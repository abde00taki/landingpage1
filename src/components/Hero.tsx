import { ArrowDown, Truck, BadgeDollarSign, Zap } from 'lucide-react';
import { PRICE_SINGLE, PRICE_DOUBLE } from '@/data/product';
import ProductImage from './ProductImage';

interface HeroProps {
  onOrderClick: () => void;
  heroImage: string;
}

export default function Hero({ onOrderClick, heroImage }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-beige-50 via-beige-50 to-white">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-10 w-72 h-72 bg-bordeaux-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-20 left-10 w-60 h-60 bg-beige-200 rounded-full blur-3xl opacity-50" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1 text-center lg:text-right animate-fade-in-up">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-bordeaux-50 text-bordeaux-700 text-sm font-semibold mb-4">
              ✨ طقم نسائي أنيق
            </span>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-charcoal-900 leading-tight mb-4 text-balance">
              أناقة وراحة في إطلالة واحدة ✨
            </h1>

            <p className="text-base sm:text-lg text-charcoal-600 leading-relaxed mb-6 max-w-md mx-auto lg:mx-0">
              طقم نسائي أنيق بتصميم راقٍ ومريح، مناسب لإطلالتك اليومية والمناسبات.
            </p>

            {/* Price */}
            <div className="inline-flex flex-col items-center lg:items-start gap-2 mb-5">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl sm:text-5xl font-extrabold text-bordeaux-700">{PRICE_SINGLE}</span>
                <span className="text-xl font-semibold text-bordeaux-600">درهم</span>
              </div>
              <span className="text-base text-charcoal-600 font-medium">🚚 التوصيل مجاني</span>
            </div>

            {/* Bundle offer */}
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-l from-bordeaux-600 to-bordeaux-500 text-white font-bold text-sm sm:text-base shadow-lg shadow-bordeaux-200 mb-6">
              🔥 خذي قطعتين فقط بـ {PRICE_DOUBLE} درهم
            </div>

            {/* Trust points */}
            <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-4 justify-center lg:justify-start mb-7">
              <div className="inline-flex items-center gap-1.5 text-sm text-charcoal-700 font-medium">
                <BadgeDollarSign className="w-4 h-4 text-bordeaux-600" />
                الدفع عند الاستلام
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm text-charcoal-700 font-medium">
                <Truck className="w-4 h-4 text-bordeaux-600" />
                التوصيل مجاني
              </div>
              <div className="inline-flex items-center gap-1.5 text-sm text-charcoal-700 font-medium">
                <Zap className="w-4 h-4 text-bordeaux-600" />
                طلب سريع وسهل
              </div>
            </div>

            <button
              onClick={onOrderClick}
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-bordeaux-600 hover:bg-bordeaux-700 active:scale-95 text-white font-bold text-lg shadow-xl shadow-bordeaux-200 transition-all duration-300 animate-pulse-soft"
            >
              اطلبي الآن
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in">
            <div className="relative w-full max-w-sm lg:max-w-md">
              <div className="absolute -inset-3 bg-gradient-to-tr from-bordeaux-200 to-beige-200 rounded-3xl blur-2xl opacity-40" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-bordeaux-100 aspect-[3/4] bg-beige-100">
                <ProductImage
                  src={heroImage}
                  alt="طقم نسائي أنيق بتصميم راقٍ ومريح"
                  className="w-full h-full"
                  eager
                />
              </div>
              <div className="absolute -bottom-3 -right-3 bg-white rounded-2xl shadow-xl px-5 py-3 hidden sm:block">
                <span className="text-xs text-charcoal-500 font-medium block">يبدأ من</span>
                <span className="text-2xl font-extrabold text-bordeaux-700">{PRICE_SINGLE} درهم</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
