// language=less
export const lessCodeVariables = `
@primary-color: #4e7cf2;
@padding: 1rem;

.button {
  background-color: @primary-color;
  padding: @padding;
}`;

// language=less
export const lessCodeMixin = `
.center() {
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  .center();
}`;

// language=less
export const lessCodeNesting = `
.card {
  padding: 1rem;

  .title {
    font-size: 1.25rem;
  }

  &:hover {
    background-color: #f5f5f5;
  }
}`;

// language=less
export const lessCodeFunction = `
@base-size: 16px;

.rem(@px) {
  @result: (@px / @base-size) * 1rem;
}`;

// language=less
export const lessCodeLoop = `
.loop (@i) when (@i > 0) {
  .m-@{i} {
    margin: (@i * 5px);
  }
  .loop(@i - 1);
}

.loop(3);
`;

// language=less
export const lessCodeImport = `
@import "colors.less";
@import "mixins/flex";
@import (optional) "themes/dark.less";`;

// language=less
export const lessCodeConditional = `
@theme: dark;

body {
  .when (@theme = dark) {
    background: #000;
    color: #fff;
  }
}
`;

// language=less
export const lessCodeExtend = `
.btn-base {
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.button {
  &:extend(.btn-base all);
  background-color: blue;
}`;

// language=less
export const lessCodeMedia = `
@mobile: ~"(max-width: 768px)";

@media @mobile {
  .nav {
    display: none;
  }
}`;

// language=less
export const lessCodeDynamic = `
@prefix: card;

.@{prefix}-container {
  padding: 1rem;
  border: 1px solid #ccc;
}`;
