const SIZE = {
  font_24: '24px',
  font_20: '20px',
  font_14: '14px',
  font_12: '12px',
  font_10: '10px',
  card_lg: '161px',
  card_md: '118px',
  card_sm: '106px',
  card_radius: '6px',
} as const

const FONT_SIZE = {
  h1: SIZE.font_24,
  h2: SIZE.font_20,
  h3: SIZE.font_14,
  h4: SIZE.font_12,
  p1: SIZE.font_14,
  p2: SIZE.font_12,
  p3: SIZE.font_10,
}
const FONT_WEIGHT = {}
const HEIGHT = {
  'card-lg': SIZE.card_lg,
  'card-md': SIZE.card_md,
  'card-sm': SIZE.card_sm,
}
const BORDER_RADIUS = {
  card: SIZE.card_radius,
}

export default SIZE
export { FONT_SIZE, FONT_WEIGHT, HEIGHT, BORDER_RADIUS }
