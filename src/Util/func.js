export const findSharedElements = (list, prop) => {
  const componentCounts = {};

  for (let i = 0; i < list.length; i++) {
    const components = list[i][prop];

    for (let j = 0; j < components.length; j++) {
      const component = components[j];
      if (!componentCounts[component]) {
        componentCounts[component] = 1;
      }
      else {
        componentCounts[component]++;
      }
    }
  }

  const sharedComponents = [];

  for (const component in componentCounts) {
    if (componentCounts[component] === list.length) {
      sharedComponents.push(parseInt(component));
    }
  }

  return sharedComponents;
};

export const getElementsByIds = (ids, list) => {
  const idSet = new Set(ids);
  const result = [];

  for (let i = 0; i < list.length; i++) {
    if (idSet.has(list[i].id)) {
      result.push(list[i]);
    }
  }

  return result;
};