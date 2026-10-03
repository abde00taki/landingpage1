# طقم نسائي أنيق — Landing Page

## كيفاش تبدلي صور المنتج

ضع صورك الحقيقية في المسارات التالية (بنفس الأسماء):

```
public/images/bordeaux.jpg
public/images/marron.jpg
public/images/burgundy.jpg
```

أو ابحث في الكود عن:

- `#PRODUCT_IMAGE_BORDEAUX` — صورة Bordeaux
- `#PRODUCT_IMAGE_MARRON` — صورة Marron
- `#PRODUCT_IMAGE_BURGUNDY` — صورة Burgundy

ستجد المسارات في ملف `src/data/product.ts`. غير المسار هناك إذا استعملت أسماء أو صيغ مختلفة (مثلاً `.png`).

> إذا لم تكن الصورة موجودة بعد، يظهر placeholder أنيق بدلاً منها ولا يتعطل الموقع.
