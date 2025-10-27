export default function normalizePhoneNumber(number) {
  const cleaned = number.replace(/[^\d+]/g, '');

  const ruPattern = /^(?:\+7|7|8)(\d{10})$/;

  const ruMatch = cleaned.match(ruPattern);
  if (ruMatch) {
    return `+7${ruMatch[1]}`;
  }

  const intlPattern = /^\+(\d{6,15})$/; 
  const intlMatch = cleaned.match(intlPattern);
  if (intlMatch) {
    return `+${intlMatch[1]}`;
  }

  const digits = cleaned.replace(/\D/g, '');
  return `+${digits}`;
}
