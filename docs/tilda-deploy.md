# Деплой главной страницы на Tilda

## Обзор

Главная страница (`MainPage`) собирается как отдельный React-бандл и встраивается в Tilda через блок T123 (HTML-код). Ассеты хостятся на Yandex Cloud S3.

---

## 1. Сборка

```bash
npm run build:main-page
```

Результат: `dist-landing/main-page/assets/` — JS, CSS, шрифты, картинки, видео.

Конфиг: `vite.main-page.config.js`
- `base`: `https://storage.yandexcloud.net/jvo-sites/main-page/`
- Entry: `main-page.html` → `src/main-page-entry.jsx`
- JS/CSS имена **без хэшей** (`main-page.js`, `main-page.css`) — чтобы не менять embed-код после каждого билда
- Картинки, шрифты, видео — **с хэшами** (кэш-буст автоматический)

---

## 2. Загрузка в S3

Залить **всё содержимое** папки `dist-landing/main-page/assets/` в бакет:

```
s3://jvo-sites/main-page/assets/
```

Путь к локальной папке:
```
/Users/sergey/jvo_storybook/dist-landing/main-page/assets/
```

Загрузка через консоль: `console.yandex.cloud` → Object Storage → бакет `jvo-sites` → папка `main-page/assets/`.

> **Важно:** при обновлении обязательно перезаписать `main-page.js` и `main-page.css` — это основные файлы без хэшей. Браузер может закэшировать старые версии. Если кэш не сбрасывается — добавить `?v=N` к URL в embed-коде.

---

## 3. Embed-код для Tilda

В Tilda: добавить блок **T123** (Другое → Вставка HTML-кода) и вставить:

```html
<link rel="stylesheet" href="https://storage.yandexcloud.net/jvo-sites/main-page/assets/main-page.css" />

<style>
  /* Прячем блоки Tilda и блокируем скролл пока React не загрузится */
  body.jvo-loading { overflow: hidden !important; }
  body.jvo-loading .t-records > div:not(:has(#jvo-main-page-root)) { display: none !important; }
</style>

<div id="jvo-main-page-root" style="min-height: 100vh; background: #fff;"></div>

<script>document.body.classList.add('jvo-loading');</script>
<script type="module" src="https://storage.yandexcloud.net/jvo-sites/main-page/assets/main-page.js"></script>
<script type="module">
  // Разблокируем когда React отрендерится
  const check = setInterval(() => {
    if (document.querySelector('#jvo-main-page-root main')) {
      document.body.classList.remove('jvo-loading');
      clearInterval(check);
    }
  }, 100);
</script>
```

Как это работает:
- `body.jvo-loading` — добавляется сразу, блокирует скролл и прячет все блоки Tilda кроме нашего
- `min-height: 100vh; background: #fff` — белый экран пока React грузится
- После рендера React (появление `<main>`) — класс убирается, скролл и блоки восстанавливаются

---

## 4. Tilda CSS Overrides (`src/tilda-overrides.css`)

Tilda глобальные стили (`.tn-atom`, CSS-переменные, button resets) конфликтуют с нашими компонентами. Файл `tilda-overrides.css` защищает наши стили.

### Принципы:
- Селекторы через `[id^="jvo-"]` для высокой специфичности
- `all: initial !important` на root-элементе — полная изоляция от наследования Tilda
- `[id^="jvo-"] .tn-atom { all: unset !important }` — сброс Tilda атомов внутри нашего root
- Защищаем только: `display`, `background`, `border`, `color`, `font-family`, `cursor`, `text-decoration`

### Чего НЕ делать:
- **Не ставить `font-size`, `padding`, `gap` с `!important`** — они перебьют наши responsive media queries и сломают мобильную верстку
- Если нужна адаптивность — использовать `clamp()` в CSS modules вместо фиксированных значений + media queries

### Что защищено:
- Hero CTA кнопка (`hero__button`)
- Кнопки карточек агентов (`cardButton`)
- Теги-саджесты (`commandTag`)
- Бейджи результатов (`resultValue`, `resultLabel`)
- Текст статусов (`doneText`, `loaderText`)
- Баббл пользователя (`userBubble`)
- Табы витрины агентов (`tabs`, `tab`, `tabLabel`, `tabIndicator`)
- Ссылки (убираем underline)

---

## 5. Адаптивность в Tilda

Media queries `@media (max-width: ...)` могут **не срабатывать** внутри Tilda, если блок обёрнут в контейнер с фиксированной шириной.

**Решение:** использовать `clamp()` вместо media queries для размерных свойств в иллюстрациях:

```css
/* Вместо: */
font-size: 16px;
@media (max-width: 640px) { font-size: 12px; }

/* Использовать: */
font-size: clamp(12px, 2.2vw, 16px);
```

Это уже сделано для `IllustrationHero` — все font-size, padding, gap, размеры иконок через `clamp()`.

---

## 6. Оптимизация видео

Hero-видео оптимизируется через ffmpeg перед сборкой:

```bash
ffmpeg -i src/assets/hero-video-original.mp4 \
  -c:v libx264 -crf 28 -preset slow \
  -vf "scale=1280:-2" \
  -an -movflags +faststart \
  src/assets/hero-video.mp4
```

Параметры:
- `scale=1280:-2` — уменьшаем до 1280px ширины (достаточно для фона)
- `crf 28` — хорошее качество при малом размере
- `-an` — убираем аудио-дорожку
- `+faststart` — moov atom в начале файла, видео начинает играть до полной загрузки

Результат: 4.3 MB → 205 KB.

---

## 7. Entry point (`src/main-page-entry.jsx`)

```jsx
import { MainPage } from './pages/MainPage';
import './index.css';
import './tilda-overrides.css';
```

- `index.css` подключает токены (`tokens/tokens.css`), шрифты, базовые стили
- `tilda-overrides.css` — защита от Tilda (загружается после `index.css`)
- Ищет `#jvo-main-page-root` (полная страница) или `#jvo-main-page-main` (одна секция)

---

## 8. Чеклист деплоя

1. [ ] Убрать debug-элементы (debug dots и т.п.)
2. [ ] Оптимизировать видео если обновилось
3. [ ] `npm run build:main-page`
4. [ ] Проверить что `main-page.js` содержит все секции: `grep "Результаты" dist-landing/main-page/assets/main-page.js`
5. [ ] Загрузить `dist-landing/main-page/assets/` в S3
6. [ ] Обновить embed-код в Tilda если менялась структура
7. [ ] Опубликовать страницу в Tilda
8. [ ] Проверить на десктопе и мобильном
9. [ ] Если кэш — добавить `?v=N` к URL в embed-коде или попросить пользователя Ctrl+Shift+R
