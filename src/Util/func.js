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
      sharedComponents.push(component);
    }
  }

  return sharedComponents;
}