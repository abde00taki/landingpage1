import { MousePointerClick, PenLine, MessageCircle } from 'lucide-react';

const STEPS = [
  {
    icon: MousePointerClick,
    title: 'اختاري اللون',
    desc: 'اختاري اللون المفضل ليك والكمية اللي بغيتي',
  },
  {
    icon: PenLine,
    title: 'عمري معلوماتك',
    desc: 'كتبي اسمك، هاتفك، مدينة والعنوان ديالك',
  },
  {
    icon: MessageCircle,
    title: 'أكدي الطلب عبر واتساب',
    desc: 'اضغطي على تأكيد الطلب ويغلق ليك واتساب بكل التفاصيل',
  },
];

export default function HowToOrder() {
  return (
    <section className="py-12 sm:py-16 bg-beige-50">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900">
            كيفاش تطلبي؟
          </h2>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={i} className="relative bg-white rounded-3xl p-5 sm:p-6 text-center shadow-sm">
                <div className="absolute -top-3 right-1/2 translate-x-1/2 w-7 h-7 rounded-full bg-bordeaux-600 text-white text-sm font-bold flex items-center justify-center shadow-md">
                  {i + 1}
                </div>
                <div className="flex justify-center mb-3 mt-2">
                  <div className="w-14 h-14 rounded-2xl bg-bordeaux-50 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-bordeaux-600" />
                  </div>
                </div>
                <h3 className="font-bold text-charcoal-900 mb-1.5">{step.title}</h3>
                <p className="text-sm text-charcoal-500 leading-relaxed">{step.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
