import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'كيفاش نطلب؟',
    a: 'اختاري اللون والكمية، عمري معلوماتك، ومن بعد اضغطي على تأكيد الطلب عبر واتساب.',
  },
  {
    q: 'واش التوصيل مجاني؟',
    a: 'نعم، التوصيل مجاني.',
  },
  {
    q: 'كيفاش نخلص؟',
    a: 'الدفع عند الاستلام.',
  },
  {
    q: 'شحال ثمن قطعة واحدة؟',
    a: 'قطعة واحدة بـ270 درهم مع التوصيل المجاني.',
  },
  {
    q: 'وشحال جوج قطع؟',
    a: 'العرض الخاص: قطعتان بـ500 درهم فقط.',
  },
  {
    q: 'واش نقدر ناخد جوج بألوان مختلفة؟',
    a: 'نعم، تقدري تختاري لون مختلف لكل قطعة.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-12 sm:py-16 bg-white scroll-margin-top" id="faq">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900">
            أسئلة متكررة
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border-2 transition-all duration-200 ${
                  isOpen ? 'border-bordeaux-200 bg-bordeaux-50/50' : 'border-beige-200 bg-beige-50/30'
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-3 p-4 text-right"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-charcoal-800 text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 text-bordeaux-600 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-4 pb-4 text-sm text-charcoal-600 leading-relaxed">{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
