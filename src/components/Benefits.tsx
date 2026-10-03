import { Feather, ShieldCheck, SunSnow, Sparkles, Wind, HandHeart, Palette } from 'lucide-react';

const BENEFITS = [
  { icon: Feather, text: 'قماش خفيف ومريح' },
  { icon: ShieldCheck, text: 'ما كيتكمش بسهولة' },
  { icon: SunSnow, text: 'مناسب للشتاء والصيف' },
  { icon: Sparkles, text: 'تصميم محتشم وأنيق' },
  { icon: Wind, text: 'مريح فالحركة والاستعمال اليومي' },
  { icon: HandHeart, text: 'مناسب للخروجات والإطلالات اليومية' },
  { icon: Palette, text: 'متوفر بـ3 ألوان أنيقة' },
];

export default function Benefits() {
  return (
    <section className="py-12 sm:py-16 bg-beige-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900">
            علاش غادي يعجبك هاد الطقم؟ ❤️
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <div
                key={i}
                className="flex items-center gap-3 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-bordeaux-50 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-bordeaux-600" />
                </div>
                <span className="text-charcoal-700 font-medium text-sm sm:text-base">{b.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
