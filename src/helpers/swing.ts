export const applySwing = (beats, beatSize, swingStyle) => {
  if (beatSize % (swingStyle.length + 1) !== 0) {
    console.error(
      `GroovyPlayer: Cannot apply '${swingStyle}' swing to the beat of size ${beatSize}.`
    )
    return beats
  }

  if (!Object.keys(swingFns).includes(swingStyle)) {
    console.error(`GroovyPlayer: Swing style '${swingStyle}' not found.`)
    return beats
  }

  return swingFns[swingStyle](beats)
}

const swing = (notes, emptys) => [
  [notes, []],
  ...[...Array(emptys)].map(() => [[], []]),
]

const swingLikeSoli = beats => {
  const swingedBeats: number[][][] = []
  beats.forEach(([notes], noteIndex) => {
    if (noteIndex % 3 === 0) swingedBeats.push(...swing(notes, 4))
    else if (noteIndex % 3 === 1) swingedBeats.push(...swing(notes, 6))
    else if (noteIndex % 3 === 2) swingedBeats.push(...swing(notes, 5))
  })
  return swingedBeats
}

const swingLikeTiriba = beats => {
  const swingedBeats: number[][][] = []
  beats.forEach(([notes], noteIndex) => {
    if (noteIndex % 3 === 0) swingedBeats.push(...swing(notes, 6))
    else if (noteIndex % 3 === 1) swingedBeats.push(...swing(notes, 5))
    else if (noteIndex % 3 === 2) swingedBeats.push(...swing(notes, 4))
  })
  return swingedBeats
}

const swingLikeMadan = beats => {
  const swingedBeats: number[][][] = []
  beats.forEach(([notes], noteIndex) => {
    if (noteIndex % 2 === 0) swingedBeats.push(...swing(notes, 6))
    else if (noteIndex % 2 === 1) swingedBeats.push(...swing(notes, 4))
  })
  return swingedBeats
}

const swingLikeSoboninkun = beats => {
  const swingedBeats: number[][][] = []
  beats.forEach(([notes], noteIndex) => {
    if (noteIndex % 4 === 0) swingedBeats.push(...swing(notes, 5))
    else if (noteIndex % 4 === 1) swingedBeats.push(...swing(notes, 5))
    else if (noteIndex % 4 === 2) swingedBeats.push(...swing(notes, 4))
    else if (noteIndex % 4 === 3) swingedBeats.push(...swing(notes, 6))
  })
  return swingedBeats
}

const swingLikeGnawa = beats => {
  const swingedBeats: number[][][] = []
  beats.forEach(([notes], noteIndex) => {
    if (noteIndex % 4 === 0) swingedBeats.push(...swing(notes, 5))
    else if (noteIndex % 4 === 1) swingedBeats.push(...swing(notes, 5))
    else if (noteIndex % 4 === 2) swingedBeats.push(...swing(notes, 6))
    else if (noteIndex % 4 === 3) swingedBeats.push(...swing(notes, 4))
  })
  return swingedBeats
}

const swingFns = {
  '<<': swingLikeSoli,
  '>>': swingLikeTiriba,
  '>': swingLikeMadan,
  '--<': swingLikeSoboninkun,
  '-->': swingLikeGnawa,
}
