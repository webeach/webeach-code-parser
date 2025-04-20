// language=css
export const cssCodeButton = `
/* Button styles */
.button {
  background-color: var(--color-primary);
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button:hover {
  background-color: var(--color-primary-hover);
}`;

// language=css
export const cssCodeGrid = `
/* Responsive grid layout */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 16px;
}`;

// language=css
export const cssCodeVariables = `
:root {
  --color-primary: #4e7cf2;
  --color-primary-hover: #345fd1;
  --radius-sm: 4px;
  --radius-md: 8px;
}`;

// language=css
export const cssCodeTypography = `
/* Typography scale */
h1 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

p {
  font-size: 1rem;
  line-height: 1.6;
}`;

// language=css
export const cssCodeFlex = `
/* Flex layout */
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}`;

// language=css
export const cssCodeMediaQuery = `
/* Responsive styles */
@media (max-width: 768px) {
  .sidebar {
    display: none;
  }
}`;

// language=css
export const cssCodeAnimation = `
/* Fade-in animation */
.fade-in {
  animation: fadeIn 0.3s ease-in-out;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}`;

// language=css
export const cssCodeDarkTheme = `
[data-theme='dark'] {
  --color-background: #1e1e1e;
  --color-text: #f0f0f0;
}`;

// language=css
export const cssCodeScrollbar = `
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-thumb {
  background: var(--color-primary);
  border-radius: 4px;
}`;

// language=css
export const cssCodeInput = `
/* Input field styles */
input[type="text"] {
  padding: 0.5rem;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  outline: none;
}

input[type="text"]:focus {
  border-color: var(--color-primary);
}`;
