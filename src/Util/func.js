export const findSharedComponents = (list) => {
  const componentCounts = {};

  for (let i = 0; i < list.length; i++) {
    const components = list[i].components;

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

export const getComponentsByIds = (ids, components) => {
  const idSet = new Set(ids);
  const result = [];

  for (let i = 0; i < components.length; i++) {
    if (idSet.has(components[i].id)) {
      result.push(components[i]);
    }
  }

  return result;
};