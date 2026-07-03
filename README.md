<div align="center">

# Привет, я Александр 👋

### AI-Архитектор · Founder of Lumen.studio

> *«Не вайб-кодинг — дисциплина»*

---

[![Portfolio](https://img.shields.io/badge/🪄_Магическое_портфолио-d4af37?style=for-the-badge&logoColor=white)](https://akuznetsov33vl-droid.github.io/portfolio/)
[![Email](https://img.shields.io/badge/Email-enriquechandlerleoq@outlook.com-740001?style=for-the-badge&logo=microsoft-outlook&logoColor=white)](mailto:enriquechandlerleoq@outlook.com)
[![Telegram](https://img.shields.io/badge/Telegram-@zveruga33-26A5E4?style=for-the-badge&logo=telegram&logoColor=white)](https://t.me/zveruga33)

</div>

---

## 🎯 Кто я и чем занимаюсь

Проектирую и запускаю **AI-системы под бизнес-задачи**: Telegram-боты с RAG, SaaS-платформы на LLM, генераторы документов, лидогенерационные системы B2B. Работаю в паре «архитектор + Claude Code» через свою методологию **Spec-First Pipeline**.

**Главное:**
- 🪄 **20+ проектов** в портфолио (4 в Calltouch, «Ловец трекеров», ИИ-анализ звонков, 8+ коммерческих сайтов, генератор ВКР с 3 клиентами)
- 🎙️ **Speech AI в проде** — транскрибация, диаризация и LLM-скоринг реальных звонков + голосовой перезвон
- 📚 **75+ артефактов** методологии: промпты, шаблоны, чеклисты, гайды
- ⚖️ **Юридически чистый контур РФ** — 152-ФЗ, 38-ФЗ, 54-ФЗ, ГК ч.4
- ⚡ **3–7 дней** до MVP Telegram-бота · **2–4 недели** до SaaS

---

## 🧙 Стек

### AI / LLM
![Claude](https://img.shields.io/badge/Claude_API-d97757?style=flat-square&logo=anthropic&logoColor=white)
![YandexGPT](https://img.shields.io/badge/YandexGPT-FFCC00?style=flat-square&logo=yandex&logoColor=black)
![GigaChat](https://img.shields.io/badge/GigaChat-00C2FF?style=flat-square&logoColor=white)
![RAG](https://img.shields.io/badge/RAG-8b6914?style=flat-square&logoColor=white)
![pgvector](https://img.shields.io/badge/pgvector-336791?style=flat-square&logo=postgresql&logoColor=white)
![MCP](https://img.shields.io/badge/MCP-1a472a?style=flat-square&logoColor=white)
![Prompt_Engineering](https://img.shields.io/badge/Prompt_Engineering-740001?style=flat-square&logoColor=white)
![SpeechKit](https://img.shields.io/badge/Yandex_SpeechKit-FFCC00?style=flat-square&logo=yandex&logoColor=black)
![Whisper](https://img.shields.io/badge/faster--whisper-412991?style=flat-square&logoColor=white)

### Frontend
![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_v4-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=flat-square&logoColor=white)

### Backend & Data
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![Python](https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=python&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=flat-square&logo=postgresql&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=flat-square&logo=supabase&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white)

### Infrastructure (РФ)
![Yandex_Cloud](https://img.shields.io/badge/Yandex_Cloud-FFCC00?style=flat-square&logo=yandex&logoColor=black)
![Cloudflare](https://img.shields.io/badge/Cloudflare_Workers-F38020?style=flat-square&logo=cloudflare&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)

### Боты и интеграции
![Telegram](https://img.shields.io/badge/Telegram_Bot_API-26A5E4?style=flat-square&logo=telegram&logoColor=white)
![amoCRM](https://img.shields.io/badge/amoCRM-3399FF?style=flat-square&logoColor=white)
![Bitrix24](https://img.shields.io/badge/Bitrix24-2FC6F6?style=flat-square&logoColor=white)
![Calltouch](https://img.shields.io/badge/Calltouch-FF6600?style=flat-square&logoColor=white)

---

## 🏰 Избранные проекты

### 🟢 AI-Помощник отдела продаж Calltouch v2 `private · NDA`
**Внутренний инструмент для МОПов Calltouch.** Lead Generator (NL→XLSX) + Telegram-ассистент по продуктам с RAG.

> ⚡ **Результат:** 6–10 часов ручной работы менеджера → 5–15 минут

**Стек:** Next.js 16 · TypeScript · Supabase + pgvector · YandexGPT Pro · Node.js + pm2 · jose JWT · Zod · Telegram Bot API

**Что реализовано:**
- Парсинг Я.Директа через прокси-пулы российских IP
- Детекция **18+ трекеров** (Calltouch, Roistat, CoMagic, Метрика, GA4, amoCRM, Bitrix24, Mindbox...)
- RAG на YandexGPT (text-search-doc 256 dim) + pgvector IVFFlat
- Команды `/kp` и `/prez` — автогенерация DOCX/PPTX по шаблонам
- Лимиты, анти-спам, логирование LLM-вызовов (cost, latency, tokens)

---

### 🟡 AI-Менеджер отдела продаж Calltouch `private · NDA · spec ready`
Система AI-квалификации лидов + live-помощник для менеджера. Архитектура и SPEC сданы.

> 💰 **Прогноз:** экономия 1,4–2 млн ₽/мес ФОТ

**Стек:** Next.js + Supabase + Anthropic + Telegram Bot API

---

### 🟢 Ловец трекеров · Детектор коллтрекинга и виджетов `live` · 🌐 [lovec.lumenstudio.su](http://lovec.lumenstudio.su)
**Экосистема из 3 инструментов, которая по сайту определяет установленные системы аналитики и виджеты — и превращает это в тёплые B2B-лиды.**

- 🧩 **Chrome MV3-расширение v1.0.7** — 4 вкладки, детект трекеров прямо на странице
- 🔬 **Веб-парсер глубокого скана на Yandex Cloud** — разбор одного сайта по кнопке
- 🏭 **Серверная версия 2.0** — пакетный парсинг конкурентов (job-модель, авто-скейл), прогон-тест на **960 сайтах**

> 🎯 Детектим **18+ трекеров** (Calltouch, Roistat, CoMagic, Mango…) + **разбивку виджетов Calltouch по типам** (чат / обратный звонок) из `callback_load.php`

**Стек:** Chrome Manifest V3 · Python · Playwright + Chromium · Yandex Cloud VM · авто-скейл

---

### 🟢 ИИ-анализ звонков · Speech AI `пилот на реальных звонках · NDA`
**Транскрибация, диаризация и LLM-скоринг реальных разговоров.** Пилот на звонках медицинской сети (клиент под NDA). Стерео-запись = разделение оператор/клиент без отдельной модели диаризации.

> 📊 Метрики: конверсия · пропущенные · причины «не записали» · чек-лист скрипта. Локальный ASR (faster-whisper) = **0 ₽**

**Стек:** faster-whisper · Yandex SpeechKit v3 · YandexGPT · Beget

---

### 🟢 Голосовой ИИ-перезвон · Voice AI `демо`
Голосовой бот на **Yandex SpeechKit v3** (голос marina, friendly): перезванивает лиду, квалифицирует его в диалоге и переводит на живого оператора. Авторизация через `yc IAM`.

> ☎️ Первое касание голосом без оператора → на человека попадает уже «прогретый» лид

**Стек:** SpeechKit v3 (TTS/STT) · YandexGPT · yc IAM

---

### 🟢 Lumen.studio · Сайт AI-студии `live`
Витрина услуги внедрения ИИ-анализа звонков и голосовых ботов: воронка **аудит → пилот → ретейнер**. Next.js, выложен статикой в Object Storage.

**Стек:** Next.js · Yandex Cloud · Object Storage

---

### 🟢 Цветы мира · Демо-магазин в стиле Roots `live демо` · 🌐 [открыть](https://cvetymira-demo.website.yandexcloud.net/prototype-3/index.html)
Премиальный «галерейный» демо-магазин цветов в чёрно-белой эстетике roots-store.ru: острые углы, много воздуха, сдержанная типографика. Пресейл-прототип «анти-Flowwow».

**Стек:** HTML/CSS/JS · Object Storage · UI/UX

---

### 🟢 Decor-NSK · Интернет-магазин + Enterprise-админка `pre-sale demo` · 🌐 [decor-nsk-demo-2.vercel.app](https://decor-nsk-demo-2.vercel.app)
**Полный e-commerce под клиента «Декор-Дизайн Сибирь» (Новосибирск, с 2012).** Кликабельный прототип для пресейла перед боевой версией.

> 🎯 **27 разделов админки** уровня Bitrix/Tilda/Adobe Commerce — в одном Next.js-приложении

**Стек:** Next.js 16 · React 19 · Tailwind v4 · shadcn/ui · **Prisma + PostgreSQL 16** · Auth.js v5 · Vercel Blob · Zustand · React Hook Form + Zod

**Фишки админки:**
- 🛒 **Каталог:** товары, категории (2-уровневое дерево), бренды, JSONB-атрибуты
- 📦 **Заказы и лиды** с статусами и историей
- 🤝 **B2B-портал** для оптовиков с прайс-листами
- 🎟️ **Купоны и промокоды** + A/B-эксперименты
- 🤖 **AI-чат** прямо в админке (ассистент для менеджера)
- 🚚 **Доставка** (зоны, тарифы, ПВЗ)
- ⭐ **Модерация отзывов** с антиспамом
- 📧 **Email-шаблоны** с переменными
- 🔗 **Workflows** — автоматизация (триггеры → действия)
- 🧩 **Виджеты** на сайт (рассрочка, обратный звонок)
- 🍔 **Mega-menu builder** с drag-and-drop (dnd-kit)
- 👥 **Команда и роли** (RBAC)
- 🔌 **Интеграции** (amoCRM, Bitrix24, ЮKassa, Calltouch — моки + контракты)
- 📰 **CMS-страницы** (about, contacts, articles)
- 🔁 **Редиректы** старого сайта (SEO-preservation)
- 🔍 **SEO** (meta, sitemap, robots, OG, JSON-LD)
- 📣 **Подписчики** на рассылку + email-templates
- 🔐 **Security:** 2FA через TOTP (otpauth + QR-генерация)
- 📊 **Dashboard** на recharts (выручка, конверсии, средний чек)
- ✅ **Readiness** — чеклист готовности к запуску
- 📥 **XLSX-импорт** товаров и категорий
- 🌗 **Light/Dark тема** + Sonner toasts + Server Actions везде
- ⚙️ **Settings** — все тексты шапки/подвала/контактов из БД (zero hardcode)

**Для клиента:** ЛК покупателя с историей заказов, корзина, избранное, оформление в 1 клик.

---

### 🟢 [CDP Generation](https://github.com/akuznetsov33vl-droid/cdp-generation) `public`
AI-инструмент автогенерации индивидуальных коммерческих предложений по данным CDP-платформы Calltouch.

> ⚡ **Результат:** 3–5 часов вручную → минуты

**Стек:** Python · LLM · docxtemplater

---

### 🟢 Lumen Solution `live · founder project` · 🌐 [lumensolution.ru](https://lumensolution.ru)
Сервис подготовки документов для тендеров (44-ФЗ / 223-ФЗ), экспортных сделок и грантовых заявок.

**AI-конвейер:** tz-extractor + compliance-checker + risk-analyzer
**Бизнес-модель:** implementation fee 75–150 тыс ₽ + подписка от 40 тыс ₽/мес

---

### 🟢 persona.agency CMS `8 версий в проде`
Универсальная CMS+CRM-lite для лендингов малого бизнеса.

- 41 поле редактирования с live-preview
- 13 интеграций (Метрика, GA4, Calltouch, ЮKassa, amoCRM, Bitrix24...)
- Защита от дублей в 3 слоя, авто-бэкапы
- **Разворот клона у нового клиента — 1–1,5 часа**

**Стек:** Vanilla HTML/CSS/JS · Yandex Cloud Functions · Object Storage · самописный JWT + SigV4

---

### 🟢 Генератор курсовых и ВКР `3 клиента в проде`
Платформа подготовки студенческих работ от реферата до ВКР магистра.

- Команда из **8 субагентов** (writer'ы + style-keeper + antiplagiat-checker + ai-detector)
- Локальный антиплагиат (7-словные шинглы, ≥75–80%) + AI-детектор
- Соответствие **ГОСТ Р 7.0.5-2008** и требований ВлГУ

**Стек:** Python · python-docx · docxtemplater · Claude Code subagents

> ✅ Кейс: ВКР 80 стр., 90% оригинальности, успешно защищена

---

### 🟢 Эко Тело `live`
Telegram Mini App с воронкой Instagram DM → подписка → промокод.

- Проверка подписки через `getChatMember`
- iOS-friendly через `navigator.sendBeacon`

**Стек:** Yandex Cloud · Object Storage · YandexGPT · Vanilla JS

---

### 🟢 Ща Накормим `live`
B2B-кейтеринг во Владимире: лендинг + меню + приём заявок. 50–60 порций/день, ~600 тыс ₽/мес выручки.

> 💸 Хостинг **0 ₽/мес** (Yandex free tier)

---

### 🟢 Calltouch Emoji Extension v2.0 `published in Chrome Store + Yandex.Browser store`
Расширение, улучшающее UX панели Calltouch.

**Стек:** Vite · TypeScript · Manifest V3

---

## 📚 Методология AI-Архитектора

**Spec-First Pipeline** — дисциплина, не вайб-кодинг:

```
Бизнес-задача
    ↓ [discovery-call + problem-discovery]
ИДЕЯ (PROJECT_IDEA.md)
    ↓ [spec-writer]
СПЕЦИФИКАЦИЯ (SPEC.md)
    ↓ [claude-md + subagent-architecture]
КОНТРАКТ ИСПОЛНЕНИЯ (CLAUDE.md + .claude/agents/)
    ↓ [agent-build-checklist + deploy-checklist]
MVP → PRODUCTION → ПЕРЕДАЧА КЛИЕНТУ
```

**Ключевые принципы:**
- 📜 **Spec-First** — без спеки не пишем код
- 👥 **Multi-agent** — команда субагентов (database-architect Opus + backend-engineer Sonnet + frontend-developer + qa-reviewer)
- 🎯 **Quality Gates** на каждом этапе
- 🏭 **Production-ready, не MVP** — для платных проектов сразу боевая версия

---

## 📊 GitHub Stats

<div align="center">

![Alexander's GitHub stats](https://github-readme-stats.vercel.app/api?username=akuznetsov33vl-droid&show_icons=true&theme=dark&hide_border=true&bg_color=0a0e1a&title_color=d4af37&icon_color=d4af37&text_color=f4e8c1)

![Top Langs](https://github-readme-stats.vercel.app/api/top-langs/?username=akuznetsov33vl-droid&layout=compact&theme=dark&hide_border=true&bg_color=0a0e1a&title_color=d4af37&text_color=f4e8c1)

</div>

---

## 🪄 Хочешь работать вместе?

- 🌟 **Магическое портфолио:** [akuznetsov33vl-droid.github.io/portfolio](https://akuznetsov33vl-droid.github.io/portfolio/)
- 📧 **Email:** [enriquechandlerleoq@outlook.com](mailto:enriquechandlerleoq@outlook.com)
- 💼 **Готов к проектам:** AI-системы, ИИ-анализ и обзвон звонков (Speech AI), Telegram-боты, SaaS, лидогенерация B2B, CMS-конструкторы

---

<div align="center">

*✦ Lumen.studio · Spec-First Pipeline · Built with Claude Code ✦*

</div>
