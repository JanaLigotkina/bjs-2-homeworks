function cachingDecoratorNew(func) {
  let cache = {};

  return (...args) => {
    const hash = args.join(',');
    if (hash in cache) {
      console.log(`Из кэша: ${cache[hash]}`);
      return "Из кэша: " + cache[hash];
    }

    const result = func(...args);
    cache[hash] = result;
    if (Object.keys(cache).length > 5) {
      delete cache[Object.keys(cache)[0]];
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
      func(...args);
      wrapper.count++;
    }

    timeoutId = setTimeout(() => {
      func(...args);
      wrapper.count++;
    }, delay);
  }
  return wrapper;
}
