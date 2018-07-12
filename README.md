## Реализовал
- Переключатель для единицы измерения
- CSS анимация при hover эффекте
– Сохранение выбранной единицы измерения в `localStorage`
– Добавил новый компонент `UnitSelector` в папке `components`
– Добавил `action creator` в папке `containers/ComparePanel/actions.js`
– Переписал `reducer` в папке `containers/ComparePanel/reducer.js`
- Добавил `action` в `constants/actions.js`
– Переписал метод `measures` в `core/ui/measures.js`
- Добавить константы в `constants/ui.js`
  - `MEASURE_DEFAULT_UNIT` – Единица измерения по умолчанию
  - `MEASURE_UNIT_ITEMS` – Массив единиц измерения для отображения в переключателе
  - `MEASURE_LOCALSTORAGE_KEY` – Ключ для хранения выбранной единицы измерения в `localStorage` 