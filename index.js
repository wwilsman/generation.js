import Query from './src/query';

export function map(iterable, fn) {
  return new Query(iterable).map(fn);
}

export function filter(iterable, fn) {
  return new Query(iterable).filter(fn);
}

export function concat(...iterables) {
  return iterables.reduce((query, iterable) => {
    return query.concat(iterable);
  }, new Query());
}

export function union(...iterables) {
  return iterables.reduce((query, iterable) => {
    return query.union(iterable);
  }, new Query());
}

export function intersect(first, ...iterables) {
  if (first) {
    return new Query(first).intersect(union(...iterables));
  } else {
    return new Query();
  }
}

export function disjunct(...iterables) {
  return iterables.reduce((query, iterable) => {
    return query.disjunct(iterable);
  }, new Query())
}

export { Query };
