
export const getNextId = () => generateId.next().value

export const sortByIndex = (o1, o2) => o1.index - o2.index

export const sortByDesc = propName => (o1, o2) => {
  if (o1[propName] === o2[propName]) return 0
  if (o1[propName] > o2[propName]) return 1
  return -1
}

function* idGenerator() {
  let i = 1000
  while (true) {
    i = i + 1
    yield `id-${i}`;
  }
}

const generateId = idGenerator()