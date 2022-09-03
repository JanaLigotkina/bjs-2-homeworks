function cachingDecoratorNew(func) {
  let cache = {};
  let cacheKeys = Object.keys(cache);

  return (...args) => {
    const hash = args.join(',');
    if (hash in cache) {
      console.log(`Из кэша: ${cache[hash]}`);
      return "Из кэша: " + cache[hash];
    }

    const result = func(...args);
    cache[hash] = result;
    if (cacheKeys.length > 5) {
      delete cache[cacheKeys[0]];
    }

    console.log(`Вычисляем: ${result}`);
    return "Вычисляем: " + result; ;
  }
}


function debounceDecoratorNew(func, delay) {
  let timeoutId = null;
  wrapper.count = 0;
  wrapper.allCount = 0;

  function wrapper(...args) {
    wrapper.allCount++;

    if(timeoutId) {
      clearTimeout(timeoutId);
    } else {
      console.log(func(...args));
      wrapper.count++;
    }

    timeoutId = setTimeout(() => {
      console.log(func(...args));
      wrapper.count++;
    }, delay);
  }
  return wrapper;
}
