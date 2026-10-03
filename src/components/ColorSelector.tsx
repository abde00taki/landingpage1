import { Check } from 'lucide-react';
import { COLORS, type ColorKey } from '@/data/product';
import ProductImage from './ProductImage';

interface ColorSelectorProps {
  selectedColor: ColorKey;
  onSelect: (color: ColorKey) => void;
}

export default function ColorSelector({ selectedColor, onSelect }: ColorSelectorProps) {
  return (
    <section className="py-12 sm:py-16 bg-white scroll-margin-top" id="colors">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-8 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-charcoal-900 mb-2">
            اختاري اللون اللي يناسبك ❤️
          </h2>
          <p className="text-charcoal-500 text-sm sm:text-base">ثلاثة ألوان أنيقة ومتاحة دابا</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {COLORS.map((color) => {
            const isSelected = selectedColor === color.key;
            return (
              <div
                key={color.key}
                className={`group relative rounded-3xl overflow-hidden transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'ring-2 ring-bordeaux-600 ring-offset-2 shadow-xl shadow-bordeaux-100'
                    : 'ring-1 ring-beige-200 shadow-md hover:shadow-lg'
                }`}
                onClick={() => onSelect(color.key)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-beige-100">
                  <ProductImage
                    src={color.image}
                    alt={`طقم نسائي بلون ${color.nameAr} - ${color.nameEn}`}
                    className="w-full h-full transition-transform duration-500 group-hover:scale-105"
                  />

                  {isSelected && (
                    <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-bordeaux-600 flex items-center justify-center shadow-lg animate-fade-in">
                      <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                  )}

                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="w-4 h-4 rounded-full border-2 border-white/80 shadow-sm"
                        style={{ backgroundColor: color.swatch }}
                      />
                      <span className="text-white font-bold text-sm">{color.nameAr}</span>
                      <span className="text-white/70 text-xs">· {color.nameEn}</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 sm:p-4 bg-white">
                  <button
                    onClick={() => onSelect(color.key)}
                    className={`w-full py-2.5 rounded-xl font-bold text-sm transition-all duration-200 ${
                      isSelected
                        ? 'bg-bordeaux-600 text-white shadow-md'
                        : 'bg-beige-100 text-bordeaux-700 hover:bg-beige-200'
                    }`}
                  >
                    {isSelected ? '✓ تم اختيار هذا اللون' : 'اختاري هذا اللون'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
