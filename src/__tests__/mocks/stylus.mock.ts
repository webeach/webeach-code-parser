// language=stylus
export const stylusBasic = `
body
  font-family: Arial, sans-serif
  color: #333
`;

// language=stylus
export const stylusVariables = `
$primary = #4e7cf2
$padding = 1rem

.button
  background-color: $primary
  padding: $padding
`;

// language=stylus
export const stylusNested = `
.card
  padding: 1rem

  .title
    font-weight: bold

  &:hover
    background: #f0f0f0
`;

// language=stylus
export const stylusMixin = `
center()
  display: flex
  justify-content: center
  align-items: center

.box
  center()
`;

// language=stylus
export const stylusCondition = `
$theme = 'dark'

body
  if $theme == 'dark'
    background: #000
    color: #fff
  else
    background: #fff
    color: #000
`;

// language=stylus
export const stylusLoop = `
for i in 1..3
  .m-{i}
    margin: i * 5px
`;

// language=stylus
export const stylusFunction = `
rem(px)
  return px / 16rem

.title
  font-size: rem(24)
`;

// language=stylus
export const stylusImport = `
@import 'variables'
@import 'mixins/flex'
`;

// language=stylus
export const stylusInterpolation = `
$prefix = 'btn'

.{prefix}-primary
  background: blue
`;

// language=stylus
export const stylusMediaQuery = `
@media (max-width: 768px)
  .nav
    display: none
`;
