const translations = {
  en: {
    header: 'Fridge Tracker',
    foodName: 'Food name',
    quantity: 'Quantity',
    useBy: 'Use-by date',
    addToFridge: 'Add to Fridge',
    searchItems: 'Search items...',
    all: 'All',
    expiringSoon: 'Expiring soon',
    expired: 'Expired',
    noResults: 'No items match your search.',
    emptyTitle: 'Your fridge is empty!',
    emptyHint: 'Try adding some milk, eggs, or anything you bought today.',
    deleted: 'deleted',
    undo: 'Undo',
    noExpiry: 'No expiry',
    useByLabel: 'Use by:',
    good: 'Good',
    eatSoon: 'Eat soon',
    expiredLabel: 'Expired',
    deleteLabel: 'Delete',
  },
  ms: {
    header: 'Penjejak Peti Sejuk',
    foodName: 'Nama makanan',
    quantity: 'Kuantiti',
    useBy: 'Tarikh luput',
    addToFridge: 'Tambah ke Peti Sejuk',
    searchItems: 'Cari barang...',
    all: 'Semua',
    expiringSoon: 'Akan luput',
    expired: 'Luput',
    noResults: 'Tiada barang yang sepadan.',
    emptyTitle: 'Peti sejuk kosong!',
    emptyHint: 'Cuba tambah susu, telur, atau apa-apa yang anda beli hari ini.',
    deleted: 'dipadam',
    undo: 'Buat asal',
    noExpiry: 'Tiada tarikh',
    useByLabel: 'Guna sebelum:',
    good: 'Selamat',
    eatSoon: 'Makan segera',
    expiredLabel: 'Luput',
    deleteLabel: 'Padam',
  },
  ar: {
    header: 'متعقب الثلاجة',
    foodName: 'اسم الطعام',
    quantity: 'الكمية',
    useBy: 'تاريخ الانتهاء',
    addToFridge: 'أضف إلى الثلاجة',
    searchItems: 'ابحث عن عناصر...',
    all: 'الكل',
    expiringSoon: 'سينتهي قريباً',
    expired: 'منتهي الصلاحية',
    noResults: 'لا توجد عناصر تطابق بحثك.',
    emptyTitle: 'الثلاجة فارغة!',
    emptyHint: 'حاول إضافة الحليب، البيض، أو أي شيء اشتريته اليوم.',
    deleted: 'تم الحذف',
    undo: 'تراجع',
    noExpiry: 'بدون تاريخ',
    useByLabel: 'استخدم قبل:',
    good: 'جيد',
    eatSoon: 'تناوله قريباً',
    expiredLabel: 'منتهي',
    deleteLabel: 'حذف',
  },
}

export function getLang() {
  if (typeof localStorage === 'undefined') return 'en'
  try {
    return localStorage.getItem('fridge-tracker-lang') || 'en'
  } catch {
    return 'en'
  }
}

export function setLang(lang) {
  try {
    localStorage.setItem('fridge-tracker-lang', lang)
  } catch {}
}

export function t(lang, key) {
  return translations[lang]?.[key] ?? translations.en[key] ?? key
}

export const LANGUAGES = [
  { code: 'en', label: 'English', dir: 'ltr' },
  { code: 'ms', label: 'Bahasa Melayu', dir: 'ltr' },
  { code: 'ar', label: 'العربية', dir: 'rtl' },
]

export default translations