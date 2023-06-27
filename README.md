## :open_file_folder: Файловая структура

```
gulp-scss-starter
├── dist
├── gulp-tasks
├── src
│   ├── blocks
│   ├── fonts
│   ├── img
│   ├── js
│   ├── styles
│   ├── views
│   └── .htaccess
├── gulpfile.babel.js
├── webpack.config.js
├── package.json
├── .yarnrc.yml
├── .babelrc.js
├── .bemrc.js
├── .eslintrc.json
├── .stylelintrc
├── .stylelintignore
└── .gitignore
```

- Корень папки:
  - `.babelrc.js` — настройки Babel
  - `.bemrc.js` — настройки БЭМ
  - `.eslintrc.json` — настройки ESLint
  - `.gitignore` – запрет на отслеживание файлов Git'ом
  - `.stylelintrc` — настройки Stylelint
  - `.stylelintignore` – запрет на отслеживание файлов Stylelint'ом
  - `.yarnrc.yml` – настройка Yarn
  - `gulpfile.babel.js` — настройки Gulp
  - `webpack.config.js` — настройки Webpack
  - `package.json` — список зависимостей
- Папка `src` - используется во время разработки:
  - БЭМ-блоки: `src/blocks`
  - шрифты: `src/fonts`
  - изображения: `src/img`
  - JS-файлы: `src/js`
  - страницы сайта: `src/views/pages`
  - SCSS-файлы: `src/styles`
  - HTML-файлы: `src/views`
  - конфигурационный файл веб-сервера Apache с настройками [gzip](https://habr.com/ru/post/221849/) (сжатие без потерь): `src/.htaccess`
- Папка `dist` - папка, из которой запускается локальный сервер для разработки (при запуске `yarn run dev`)
- Папка `gulp-tasks` - папка с Gulp-тасками

## :keyboard: Команды

- `yarn run lint:styles` - проверить SCSS-файлы. Для VSCode необходимо установить [плагин](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint). Для WebStorm
  или PHPStorm необходимо включить Stylelint в `Languages & Frameworks - Style Sheets - Stylelint`
- `yarn run dev` - запуск сервера для разработки проекта
- `yarn run build` - собрать проект с оптимизацией без запуска сервера
- `yarn run build:views` - собрать HTML-файлы
- `yarn run build:styles` - скомпилировать SCSS-файлы
- `yarn run build:scripts` - собрать JS-файлы
- `yarn run build:images` - собрать изображения
- `yarn run build:webp` - сконвертировать изображения в формат `.webp`
- `yarn run build:sprites`- собрать спрайты
- `yarn run build:fonts` - собрать шрифты
- `yarn run build:favicons` - собрать фавиконки
- `yarn run build:gzip` - собрать конфигурацию Apache
- `yarn run bem-m` - добавить БЭМ-блок
- `yarn run lint:styles --fix` - исправить ошибки в SCSS-файлах согласно настройкам Stylelint
- `yarn run lint:scripts` - проверить JS-файлы
- `yarn run lint:scripts --fix` - исправить ошибки в JS-файлах согласно настройкам ESLint

Чтобы вручную не создавать соответствующие папку и файлы, достаточно в консоли прописать следующую команду: `yarn run bem-m my-block` - для создания БЭМ-блока в `src/block/modules`, где `my-block` - имя БЭМ-блока (после создания нужно удалить содержимое js-файла БЭМ-блока).

### Страницы проекта

- страницы проекта находятся в папке `src/views/pages`
  - главная страница: `src/views/index.html`
