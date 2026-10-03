import { useState, useCallback } from 'react';
import { COLORS, PRODUCT_IMAGES, type ColorKey } from '@/data/product';
import Hero from '@/components/Hero';
import ColorSelector from '@/components/ColorSelector';
import Benefits from '@/components/Benefits';
import OfferSelector from '@/components/OfferSelector';
import HowToOrder from '@/components/HowToOrder';
import OrderForm from '@/components/OrderForm';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import MobileStickyCTA from '@/components/MobileStickyCTA';

function App() {
  const [quantity, setQuantity] = useState<1 | 2>(1);
  const [color1, setColor1] = useState<ColorKey>('bordeaux');
  const [color2, setColor2] = useState<ColorKey>('marron');

  const scrollToOrder = useCallback(() => {
    document.getElementById('order')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  function handleColorSelect(color: ColorKey) {
    if (quantity === 1) {
      setColor1(color);
    } else {
      setColor1(color);
    }
  }

  return (
    <div className="min-h-screen bg-beige-50">
      <Hero onOrderClick={scrollToOrder} heroImage={PRODUCT_IMAGES.bordeaux} />

      <ColorSelector selectedColor={color1} onSelect={handleColorSelect} />

      <Benefits />

      <OfferSelector quantity={quantity} onSelect={setQuantity} />

      {/* Two-piece color selector */}
      {quantity === 2 && (
        <section className="py-12 sm:py-16 bg-beige-50">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-charcoal-900 mb-2">
                اختاري لون كل قطعة 🎨
              </h2>
              <p className="text-charcoal-500 text-sm">تقدري تختاري نفس اللون أو ألوان مختلفة</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
              {/* Piece 1 */}
              <div className="bg-white rounded-3xl p-5 shadow-md">
                <h3 className="font-bold text-charcoal-900 mb-3">لون القطعة الأولى</h3>
                <div className="grid grid-cols-3 gap-2">
                  {COLORS.map((c) => (
                    <button
                      key={c.key}
                      onClick={() => setColor1(c.key)}
                      className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-all duration-200 ${
                        color1 === c.key
                          ? 'bg-bordeaux-50 ring-2 ring-bordeaux-600'
                          : 'bg-beige-50 ring-1 ring-beige-200 hover:ring-bordeaux-300'
                      }`}
                    >
                      <span
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: c.swatch }}
                      />
                      <span className="text-xs font-bold text-charcoal-700">{c.nameAr}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Piece 2 */}
              <div className="bg-white rounded-3xl p-5 shadow-md">
                <h3 className="font-bold text-charcoal-900 mb-3">لون القطعة الثانية</h3>
                <div className="grid grid-cols-3 gap-2">
                  {COLORS.map((c) => (
                    <button
                      key={c.key}
                      onClick={() => setColor2(c.key)}
                      className={`flex flex-col items-center gap-1.5 p-2.5 rounded-xl transition-all duration-200 ${
                        color2 === c.key
                          ? 'bg-bordeaux-50 ring-2 ring-bordeaux-600'
                          : 'bg-beige-50 ring-1 ring-beige-200 hover:ring-bordeaux-300'
                      }`}
                    >
                      <span
                        className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: c.swatch }}
                      />
                      <span className="text-xs font-bold text-charcoal-700">{c.nameAr}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <HowToOrder />

      <OrderForm quantity={quantity} color1={color1} color2={color2} />

      <FAQ />

      <FinalCTA onOrderClick={scrollToOrder} />

      <Footer />

      <FloatingWhatsApp />

      <MobileStickyCTA quantity={quantity} onOrderClick={scrollToOrder} />

      {/* Bottom padding so sticky CTA doesn't cover footer on mobile */}
      <div className="h-16 sm:hidden" />
    </div>
  );
}

export default App;
