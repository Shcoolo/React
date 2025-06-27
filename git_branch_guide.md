# Git Branching Guide - مشروع GitHub

## 1. إنشاء فرع جديد للعمل
تأكد أنك على فرع `main` ومحدث بأحدث نسخة:

```bash
git checkout main
git pull origin main
```

لإنشاء فرع جديد خاص بمهمتك:

```bash
git checkout -b feature/اسم-الميزة
```

---

## 2. رفع الفرع إلى GitHub
لرفع الفرع الجديد إلى المستودع:

```bash
git push origin feature/اسم-الميزة
```

---

## 3. دمج الفرع في الفرع الأساسي `main` (الطريقة الموصى بها عبر GitHub)
- افتح Pull Request من فرعك إلى `main`.
- أضف وصفاً واضحاً للتعديلات.
- انتظر المراجعة والموافقة.
- اضغط على زر **Merge Pull Request**.

---

## 4. دمج الفرع في `main` محلياً (اختياري)
تأكد أنك على `main` ومحدث، ثم ادمج الفرع:

```bash
git checkout main
git pull origin main
git merge feature/اسم-الميزة
git push origin main
```

---

## 5. التعامل مع التعارضات (Conflicts)
قبل رفع فرعك تأكد أنك محدث مع `main`:

```bash
git checkout main
git pull origin main
git checkout feature/اسم-الميزة
git merge main
```

إذا ظهرت تعارضات:
- افتح الملفات المتأثرة.
- حل التعارضات يدوياً.
- بعد الحل:

```bash
git add .
git commit -m "حل التعارضات"
git push origin feature/اسم-الميزة
```

---

## 6. حذف الفرع بعد الدمج (اختياري)
لحذف الفرع محلياً:

```bash
git branch -d feature/اسم-الميزة
```

لحذفه من GitHub:

```bash
git push origin --delete feature/اسم-الميزة
```

---

## 7. قواعد العمل الجماعي
✔ لا تعديل مباشر على `main`
✔ كل ميزة أو إصلاح في فرع مستقل
✔ تحديث فرعك دائماً من `main` قبل الدمج
✔ مراجعة الكود مع الفريق قبل الدمج
✔ الحفاظ على المستودع مرتب وآمن

