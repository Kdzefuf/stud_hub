// Сортировка по названию (name)
export function sortByName(query, ascending = true) {
  return query.slice().sort((a, b) => {
    const comparison = a.name.localeCompare(b.name);
    return ascending ? comparison : -comparison;
  });
}

// Сортировка по просмотрам (views_count)
export function sortByViews(query, ascending = true) {
  return query.slice().sort((a, b) => {
    const comparison = a.views_count - b.views_count;
    return ascending ? -comparison : comparison;
  });
}

// Сортировка по рейтингу (rating)
export function sortByRating(query, ascending = true) {
  return query.slice().sort((a, b) => {
    const comparison = a.rating - b.rating;
    return ascending ? -comparison : comparison;
  });
}

// Сортировка по количеству отзывов (reviews)
export function sortByReviews(query, ascending = true) {
  return query.slice().sort((a, b) => {
    const comparison = a.reviews - b.reviews;
    return ascending ? -comparison : comparison;
  });
}

// Общая функция, которая принимает тип сортировки и вызывает нужную функцию
export function sort(query, type, ascending = true) {
  switch (type) {
    case 'name':
      return sortByName(query, ascending);
    case 'views_count':
      return sortByViews(query, ascending);
    case 'rating':
      return sortByRating(query, ascending);
    case 'reviews':
      return sortByReviews(query, ascending);
    default:
      return query;
  }
}
