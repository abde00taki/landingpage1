import {
  WHATSAPP_NUMBER,
  colorName,
  type ColorKey,
} from './product';

export interface OrderData {
  name: string;
  phone: string;
  city: string;
  address: string;
  size: string;
  quantity: 1 | 2;
  color1: ColorKey;
  color2: ColorKey;
}

export function buildOrderMessage(d: OrderData): string {
  const lines: string[] = ['طلب جديد 🛍️', ''];

  lines.push(`👤 الاسم: ${d.name}`);
  lines.push(`📞 الهاتف: ${d.phone}`);
  lines.push(`🏙️ المدينة: ${d.city}`);
  lines.push(`📍 العنوان: ${d.address}`);
  lines.push('');

  if (d.quantity === 1) {
    lines.push('📦 الكمية: قطعة واحدة');
    lines.push(`🎨 اللون: ${colorName(d.color1)}`);
  } else {
    lines.push('📦 الكمية: قطعتان');
    lines.push(`🎨 القطعة الأولى: ${colorName(d.color1)}`);
    lines.push(`🎨 القطعة الثانية: ${colorName(d.color2)}`);
  }

  lines.push(`📏 المقاس: ${d.size}`);
  lines.push('');
  const total = d.quantity === 1 ? '270 درهم' : '500 درهم';
  lines.push(`💰 المجموع: ${total}`);
  lines.push('🚚 التوصيل: مجاني');
  lines.push('💵 الدفع: عند الاستلام');

  return lines.join('\n');
}

export function buildSupportMessage(): string {
  return 'السلام عليكم، عندي سؤال بخصوص الطقم النسائي.';
}

export function whatsappOrderUrl(data: OrderData): string {
  const msg = buildOrderMessage(data);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function whatsappSupportUrl(): string {
  const msg = buildSupportMessage();
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}
