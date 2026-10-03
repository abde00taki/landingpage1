import { useState, useRef } from 'react';
import { COLORS, PRICE_SINGLE, PRICE_DOUBLE, type ColorKey } from '@/data/product';
import { whatsappOrderUrl, type OrderData } from '@/data/whatsapp';
import WhatsAppIcon from './WhatsAppIcon';

interface OrderFormProps {
  quantity: 1 | 2;
  color1: ColorKey;
  color2: ColorKey;
}

interface FormFields {
  name: string;
  phone: string;
  city: string;
  address: string;
}

const EMPTY_FIELDS: FormFields = { name: '', phone: '', city: '', address: '' };

const MOROCCAN_PHONE_RE = /^(?:\+212|0)([5-7])\d{8}$/;

export default function OrderForm({ quantity, color1, color2 }: OrderFormProps) {
  const [fields, setFields] = useState<FormFields>(EMPTY_FIELDS);
  const [errors, setErrors] = useState<Partial<Record<keyof FormFields, string>>>({});
  const fieldRefs = useRef<Record<string, HTMLElement | null>>({});

  const total = quantity === 1 ? PRICE_SINGLE : PRICE_DOUBLE;

  function updateField(key: keyof FormFields, value: string) {
    setFields((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  function validate(): boolean {
    const e: Partial<Record<keyof FormFields, string>> = {};
    if (!fields.name.trim()) e.name = 'المرجو إدخال الاسم الكامل';
    if (!fields.phone.trim()) {
      e.phone = 'المرجو إدخال رقم الهاتف';
    } else if (!MOROCCAN_PHONE_RE.test(fields.phone.replace(/[\s-]/g, ''))) {
      e.phone = 'المرجو إدخال رقم هاتف صحيح';
    }
    if (!fields.city.trim()) e.city = 'المرجو إدخال المدينة';
    if (!fields.address.trim()) e.address = 'المرجو إدخال العنوان الكامل';
    setErrors(e);

    if (Object.keys(e).length > 0) {
      const firstKey = Object.keys(e)[0] as keyof FormFields;
      fieldRefs.current[firstKey]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      fieldRefs.current[firstKey]?.focus();
      return false;
    }
    return true;
  }

  function handleSubmit() {
    if (!validate()) return;

    const order: OrderData = {
      name: fields.name.trim(),
      phone: fields.phone.trim(),
      city: fields.city.trim(),
      address: fields.address.trim(),
      quantity,
      color1,
      color2,
    };

    window.open(whatsappOrderUrl(order), '_blank');
  }

  const color1Name = COLORS.find((c) => c.key === color1)?.nameAr ?? '';
  const color2Name = COLORS.find((c) => c.key === color2)?.nameAr ?? '';

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-white to-beige-50 scroll-margin-top" id="order">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900 mb-2">
            طلبي دابا والدفع عند الاستلام
          </h2>
          <p className="text-charcoal-500 text-sm sm:text-base">
            عمري المعلومات التالية باش نوجدولك الطلب ديالك.
          </p>
        </div>

        <div className="bg-white rounded-3xl shadow-xl shadow-bordeaux-50 ring-1 ring-beige-200 p-5 sm:p-7">
          {/* Name */}
          <div className="mb-4" ref={(el) => { fieldRefs.current.name = el; }}>
            <label htmlFor="f-name" className="block text-sm font-bold text-charcoal-700 mb-1.5">
              الاسم الكامل
            </label>
            <input
              id="f-name"
              type="text"
              value={fields.name}
              onChange={(e) => updateField('name', e.target.value)}
              placeholder="الاسم الكامل"
              aria-invalid={!!errors.name}
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors text-charcoal-900 placeholder:text-charcoal-300 ${
                errors.name
                  ? 'border-red-400 bg-red-50 focus:border-red-500'
                  : 'border-beige-200 focus:border-bordeaux-500 bg-beige-50/50'
              }`}
            />
            {errors.name && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.name}</p>}
          </div>

          {/* Phone */}
          <div className="mb-4" ref={(el) => { fieldRefs.current.phone = el; }}>
            <label htmlFor="f-phone" className="block text-sm font-bold text-charcoal-700 mb-1.5">
              رقم الهاتف
            </label>
            <input
              id="f-phone"
              type="tel"
              inputMode="tel"
              dir="ltr"
              value={fields.phone}
              onChange={(e) => updateField('phone', e.target.value)}
              placeholder="06XXXXXXXX"
              aria-invalid={!!errors.phone}
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors text-charcoal-900 placeholder:text-charcoal-300 text-right ${
                errors.phone
                  ? 'border-red-400 bg-red-50 focus:border-red-500'
                  : 'border-beige-200 focus:border-bordeaux-500 bg-beige-50/50'
              }`}
            />
            {errors.phone && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.phone}</p>}
          </div>

          {/* City */}
          <div className="mb-4" ref={(el) => { fieldRefs.current.city = el; }}>
            <label htmlFor="f-city" className="block text-sm font-bold text-charcoal-700 mb-1.5">
              المدينة
            </label>
            <input
              id="f-city"
              type="text"
              value={fields.city}
              onChange={(e) => updateField('city', e.target.value)}
              placeholder="مثال: الدار البيضاء"
              aria-invalid={!!errors.city}
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors text-charcoal-900 placeholder:text-charcoal-300 ${
                errors.city
                  ? 'border-red-400 bg-red-50 focus:border-red-500'
                  : 'border-beige-200 focus:border-bordeaux-500 bg-beige-50/50'
              }`}
            />
            {errors.city && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.city}</p>}
          </div>

          {/* Address */}
          <div className="mb-4" ref={(el) => { fieldRefs.current.address = el; }}>
            <label htmlFor="f-address" className="block text-sm font-bold text-charcoal-700 mb-1.5">
              العنوان الكامل
            </label>
            <textarea
              id="f-address"
              rows={2}
              value={fields.address}
              onChange={(e) => updateField('address', e.target.value)}
              placeholder="الحي، الشارع، رقم المنزل..."
              aria-invalid={!!errors.address}
              className={`w-full px-4 py-3 rounded-xl border-2 outline-none transition-colors text-charcoal-900 placeholder:text-charcoal-300 resize-none ${
                errors.address
                  ? 'border-red-400 bg-red-50 focus:border-red-500'
                  : 'border-beige-200 focus:border-bordeaux-500 bg-beige-50/50'
              }`}
            />
            {errors.address && <p className="mt-1.5 text-sm text-red-500 font-medium">{errors.address}</p>}
          </div>

          {/* Quantity display (read-only, driven by OfferSelector) */}
          <div className="mb-4">
            <label className="block text-sm font-bold text-charcoal-700 mb-1.5">الكمية</label>
            <div className="px-4 py-3 rounded-xl bg-beige-50 border-2 border-beige-200 text-charcoal-700 font-medium">
              {quantity === 1 ? `قطعة واحدة — ${PRICE_SINGLE} درهم` : `قطعتان — ${PRICE_DOUBLE} درهم`}
            </div>
            <p className="mt-1 text-xs text-charcoal-400">
              اختاري الكمية من قسم العرض بالأعلى
            </p>
          </div>

          {/* Colors display */}
          {quantity === 1 ? (
            <div className="mb-5">
              <label className="block text-sm font-bold text-charcoal-700 mb-1.5">اللون</label>
              <div className="px-4 py-3 rounded-xl bg-beige-50 border-2 border-beige-200 text-charcoal-700 font-medium flex items-center gap-2">
                <span
                  className="w-4 h-4 rounded-full border border-beige-300"
                  style={{ backgroundColor: COLORS.find((c) => c.key === color1)?.swatch }}
                />
                {color1Name}
              </div>
              <p className="mt-1 text-xs text-charcoal-400">
                اختاري اللون من قسم الألوان بالأعلى
              </p>
            </div>
          ) : (
            <div className="mb-5 grid sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-sm font-bold text-charcoal-700 mb-1.5">لون القطعة الأولى</label>
                <div className="px-4 py-3 rounded-xl bg-beige-50 border-2 border-beige-200 text-charcoal-700 font-medium flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full border border-beige-300"
                    style={{ backgroundColor: COLORS.find((c) => c.key === color1)?.swatch }}
                  />
                  {color1Name}
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-charcoal-700 mb-1.5">لون القطعة الثانية</label>
                <div className="px-4 py-3 rounded-xl bg-beige-50 border-2 border-beige-200 text-charcoal-700 font-medium flex items-center gap-2">
                  <span
                    className="w-4 h-4 rounded-full border border-beige-300"
                    style={{ backgroundColor: COLORS.find((c) => c.key === color2)?.swatch }}
                  />
                  {color2Name}
                </div>
              </div>
              <p className="mt-1 text-xs text-charcoal-400 sm:col-span-2">
                اختاري ألوان القطعتين من قسم الألوان بالأعلى
              </p>
            </div>
          )}

          {/* Order Summary */}
          <div className="rounded-2xl bg-gradient-to-br from-bordeaux-50 to-beige-50 border border-bordeaux-100 p-4 sm:p-5 mb-5">
            <h3 className="font-bold text-charcoal-900 mb-3 flex items-center gap-2">
              📋 ملخص الطلب
            </h3>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between text-charcoal-600">
                <span>الكمية:</span>
                <span className="font-bold text-charcoal-900">{quantity === 1 ? 'قطعة واحدة' : 'قطعتان'}</span>
              </div>
              {quantity === 1 ? (
                <div className="flex justify-between text-charcoal-600">
                  <span>اللون:</span>
                  <span className="font-bold text-charcoal-900">{color1Name}</span>
                </div>
              ) : (
                <>
                  <div className="flex justify-between text-charcoal-600">
                    <span>القطعة الأولى:</span>
                    <span className="font-bold text-charcoal-900">{color1Name}</span>
                  </div>
                  <div className="flex justify-between text-charcoal-600">
                    <span>القطعة الثانية:</span>
                    <span className="font-bold text-charcoal-900">{color2Name}</span>
                  </div>
                </>
              )}
              <div className="border-t border-bordeaux-100 my-2" />
              <div className="flex justify-between items-center">
                <span className="text-charcoal-600">المجموع:</span>
                <span className="text-xl font-extrabold text-bordeaux-700">{total} درهم</span>
              </div>
              <div className="flex justify-between text-charcoal-600">
                <span>التوصيل:</span>
                <span className="font-bold text-green-600">مجاني 🚚</span>
              </div>
              <div className="flex justify-between text-charcoal-600">
                <span>الدفع:</span>
                <span className="font-bold text-charcoal-900">عند الاستلام 💵</span>
              </div>
            </div>
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-[#25D366] hover:bg-[#1da851] active:scale-[0.98] text-white font-bold text-base sm:text-lg shadow-lg shadow-green-200 transition-all duration-200"
          >
            <WhatsAppIcon className="w-6 h-6" />
            تأكيد الطلب عبر واتساب
          </button>

          <p className="mt-3 text-center text-xs text-charcoal-400">
            سيتم فتح واتساب برسالة جاهزة، فقط اضغطي إرسال
          </p>
        </div>
      </div>
    </section>
  );
}
