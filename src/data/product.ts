// ======================================================
// #PRODUCT_IMAGES_START
// ضع هنا مسارات صور المنتجات الثلاثة
// ======================================================

export const PRODUCT_IMAGES = {
  // #PRODUCT_IMAGE_BORDEAUX
  // صورة Bordeaux
  bordeaux: '/images/Bordeaux.png',

  // #PRODUCT_IMAGE_MARRON
  // صورة Marron
  marron: '/images/marron.png',

  // #PRODUCT_IMAGE_BURGUNDY
  // صورة Burgundy
  burgundy: '/images/burgundy.jpeg',
};

// #PRODUCT_IMAGES_END

export type ColorKey = 'bordeaux' | 'marron' | 'burgundy';

export interface ColorOption {
  key: ColorKey;
  nameAr: string;
  nameEn: string;
  image: string;
  swatch: string;
}

export const COLORS: ColorOption[] = [
  {
    key: 'bordeaux',
    nameAr: 'بوردو',
    nameEn: 'Bordeaux',
    image: PRODUCT_IMAGES.bordeaux,
    swatch: '#9e1b32',
  },
  {
    key: 'marron',
    nameAr: 'مارون',
    nameEn: 'Marron',
    image: PRODUCT_IMAGES.marron,
    swatch: '#6d2e1e',
  },
  {
    key: 'burgundy',
    nameAr: 'بورغندي',
    nameEn: 'Burgundy',
    image: PRODUCT_IMAGES.burgundy,
    swatch: '#5c1a26',
  },
];

export const PRICE_SINGLE = 270;
export const PRICE_DOUBLE = 500;

export const WHATSAPP_NUMBER = '212660343865';

export function colorName(key: ColorKey): string {
  const c = COLORS.find((c) => c.key === key);
  return c ? c.nameAr : '';
}
