# Исторические даты - React приложение

Интерактивное приложение для отображения исторических событий по категориям с временной шкалой.

## 🚀 Технологии

- **React 19** с TypeScript
- **Framer Motion** для анимаций
- **Swiper** для слайдеров
- **SCSS** для стилизации
- **ESLint + Prettier** для качества кода

## 📁 Структура проекта

```
src/
├── components/          # Переиспользуемые компоненты
│   ├── Categories/     # Компонент выбора категорий
│   ├── HistoricalDates/ # Главный компонент
│   ├── Slider/         # Круговой слайдер
│   └── Timeline/       # Компоненты временной шкалы
├── constants/          # Константы и данные
├── pages/              # Страницы приложения
├── styles/             # SCSS стили
├── types/              # TypeScript типы
└── assets/             # Статические ресурсы
```

## 🛠️ Установка и запуск

1. Установите зависимости:
```bash
npm install
```

2. Запустите проект в режиме разработки:
```bash
npm start
```

3. Соберите проект для продакшена:
```bash
npm run build
```

## 📝 Доступные скрипты

- `npm start` - Запуск в режиме разработки
- `npm run build` - Сборка для продакшена
- `npm test` - Запуск тестов
- `npm run lint` - Проверка кода ESLint
- `npm run lint:fix` - Автоматическое исправление ошибок ESLint
- `npm run format` - Форматирование кода Prettier
- `npm run type-check` - Проверка типов TypeScript

## 🎯 Принципы разработки

Проект следует принципам:
- **KISS** - Keep It Simple, Stupid
- **DRY** - Don't Repeat Yourself
- **SOLID** - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion

## 🔧 Конфигурация

- **TypeScript** - строгая типизация с `strict: true`
- **ESLint** - правила для React и TypeScript
- **Prettier** - единообразное форматирование
- **Path mapping** - алиасы для импортов (`@/`, `@components/`, etc.)

## 📊 Типы данных

Основные интерфейсы:
- `TimelineEvent` - отдельное событие
- `Category` - категория событий
- `TimelineData` - полная структура данных

## 🎨 Стилизация

Проект использует SCSS с:
- Переменными и миксинами
- БЭМ методологией
- Адаптивным дизайном
- Анимациями и переходами
