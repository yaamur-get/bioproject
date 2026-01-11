# Link in Bio - صفحة روابط احترافية

صفحة روابط "Link in Bio" احترافية قابلة للتخصيص بسهولة لكل عميل.

## التخصيص

لتخصيص الصفحة لعميل جديد، قم بتعديل ملف `src/config/profile.ts`:

### البيانات الأساسية

```typescript
{
  name: "الاسم الكامل",
  title: "الوصف الرئيسي",
  subtitle: "الوصف الفرعي",
  image: "/path/to/image.png", // ضع الصورة في مجلد public
  backgroundGradient: {
    from: "#2B5F7D",  // لون البداية
    via: "#5B8FA3",   // اختياري - لون المنتصف
    to: "#7AACBE"     // لون النهاية
  }
}
```

### الروابط

```typescript
links: [
  {
    id: "unique-id",
    label: "عنوان الزر",
    url: "https://example.com",
    icon: "whatsapp", // أو twitter, email, linkedin, instagram, etc.
    bgColor: "white", // اختياري
    textColor: "black" // اختياري
  }
]
```

### الأيقونات المتاحة

- `whatsapp` - واتساب
- `twitter` - تويتر/X
- `email` - البريد الإلكتروني
- `linkedin` - لينكد إن
- `instagram` - إنستجرام
- `facebook` - فيسبوك
- `youtube` - يوتيوب
- `phone` - الهاتف
- `telegram` - تليجرام
- `website` - موقع ويب

### روابط التذييل (اختياري)

```typescript
footer: {
  links: [
    { label: "الخصوصية", url: "/privacy" },
    { label: "اتصل بنا", url: "/contact" }
  ]
}
```

## إضافة صور

1. ضع الصورة في مجلد `public/`
2. استخدم المسار في التكوين: `/image-name.png`

## التشغيل

```bash
npm install
npm run dev
```

افتح [http://localhost:3000](http://localhost:3000) في المتصفح.

## النشر

الصفحة جاهزة للنشر على Vercel بضغطة واحدة من خلال زر "Publish" في واجهة Softgen.