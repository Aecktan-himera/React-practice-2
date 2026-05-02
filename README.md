# Структура компонентов

```text
App
 └─ Container  (state: pageType, cart)
      │
      ├─ Header  (props: pageType, setPageType, cart)
      │    ├─ использует cart для вычисления cartItemCount (бейдж)
      │    └─ кнопки вызывают setPageType('tv'|'phone'|'laptop'|'cart')
      │
      ├─ Content  (props: pageType, setPageType, cart, onCartChange)
      │    │
      │    └─ рендерит одну из страниц по значению pageType:
      │         ├─ TvListing    (props: cart, onCartChange)
      │         ├─ PhoneListing (props: cart, onCartChange)
      │         ├─ LaptopListing(props: cart, onCartChange)
      │         └─ Cart         (props: cart, onCartChange, setPageType)
      │
      │    Внутри каждого ***Listing (локальные состояния фильтров и сортировки):
      │         state: appliedFilters { brand, minPrice, maxPrice }, sortOrder
      │         │
      │         ├─ Sidebar  (props: brands, onApplyFilters)
      │         │    └─ локальные состояния brand, minPrice, maxPrice до нажатия Apply
      │         │
      │         └─ ProductList (props: products (отфильтрованные), cart, onCartChange)
      │               └─ ProductCard (props: product, cartQuantity, onCartChange)
      │                    └─ локальные состояния: currentImage, isFavorite
      │
      │    Внутри Cart:
      │         └─ CartItem (props: product, quantity, onCartChange)
      │
      └─ Footer  (статический, без пропсов состояния)
```

## Глобальное состояние в Container

- **pageType** – определяет текущую страницу (`'tv'`, `'phone'`, `'laptop'`, `'cart'`).
- **cart** – объект вида `{ [productId]: quantity }`.

Функция изменения корзины `handleCartChange` определена в `Container` и передаётся через `onCartChange` в `Content`, а оттуда – в листинги и корзину. Она напрямую обновляет глобальный `cart`.

## Локальные состояния страниц-листингов

(TvListing, PhoneListing, LaptopListing)

- **appliedFilters** – применяются только по клику «Apply Filters».
- **sortOrder** – сразу влияет на отображаемый список.

Эти состояния сбрасываются при переходе между категориями, потому что компоненты страниц полностью пересоздаются (в `Content` используется условный рендеринг `{pageType === 'tv' && <TvListing .../>}`).

## Поток данных корзины

```
Container → Content → страница → ProductList → ProductCard → кнопка "Add to Cart" / счётчик
   ↑                                                                                    |
   └────────────────────── onCartChange(id, newQuantity) ───────────────────────────────┘
```

В корзине аналогично: `Cart → CartItem → кнопки +/−/удалить → onCartChange`.

## Поток данных фильтрации

1. `Sidebar` хранит временные значения `brand`/`minPrice`/`maxPrice` (локально).
2. При клике на «Apply Filters» вызывает `onApplyFilters` (полученный из листинга), который обновляет `appliedFilters` на уровне листинга.
3. `useMemo` в листинге пересчитывает `filteredProducts` на основе исходного списка, фильтров и сортировки, после чего передаёт итоговый массив в `ProductList`.
