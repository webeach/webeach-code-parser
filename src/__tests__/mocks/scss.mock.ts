// language=scss
export const scssCodeMixins = `
@mixin center-flex {
  display: flex;
  justify-content: center;
  align-items: center;
}`;

// language=scss
export const scssCodeThemeMap = `
$light-theme: (
  background: #ffffff,
  text: #000000,
  primary: #4e7cf2
);

$dark-theme: (
  background: #1e1e1e,
  text: #f0f0f0,
  primary: #3a5bdc
);`;

// language=scss
export const scssCodeFunction = `
@function rem($px) {
  @return #{$px / 16}rem;
}`;

// language=scss
export const scssCodeNested = `
.card {
  padding: 1rem;
  border-radius: 8px;

  &__title {
    font-size: 1.25rem;
    font-weight: bold;
  }

  &:hover {
    background-color: #f5f5f5;
  }
}`;

// language=scss
export const scssCodeIfElse = `
$theme: 'dark';

body {
  @if $theme == 'dark' {
    background-color: #000;
    color: #fff;
  } @else {
    background-color: #fff;
    color: #000;
  }
}`;

// language=scss
export const scssCodeLoop = `
@for $i from 1 through 3 {
  .m-#{$i} {
    margin: #{$i}rem;
  }
}`;

// language=scss
export const scssCodeEach = `
$colors: primary, secondary, accent;

@each $color in $colors {
  .text-#{$color} {
    color: var(--color-#{$color});
  }
}`;

// language=scss
export const scssCodeExtends = `
%btn-base {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 6px;
}

.button {
  @extend %btn-base;
  background-color: blue;
  color: white;
}`;

// language=scss
export const scssCodeVariables = `
$spacing-sm: 0.5rem;
$spacing-md: 1rem;
$radius: 8px;

.container {
  padding: $spacing-md;
  border-radius: $radius;
}`;

// language=scss
export const scssCodeImport = `
@import 'reset';
@import 'variables/colors';
@import 'mixins/flex';`;
