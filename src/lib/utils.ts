export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function whatsappLink(phone: string, message: string) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function telLink(phone: string) {
  return `tel:${phone.replace(/\s/g, "")}`;
}

export function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export function isValidIndianPhone(value: string) {
  const digits = value.replace(/\D/g, "");
  return /^(?:91)?[6-9]\d{9}$/.test(digits);
}
