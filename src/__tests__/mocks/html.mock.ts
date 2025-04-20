// language=html
export const htmlCodeBasic = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Example</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a basic HTML page.</p>
</body>
</html>`;

// language=html
export const htmlCodeForm = `
<form action="/submit" method="POST">
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required>
  <button type="submit">Send</button>
</form>`;

// language=html
export const htmlCodeList = `
<ul class="features">
  <li>Fast</li>
  <li>Reliable</li>
  <li>Themeable</li>
</ul>`;

// language=html
export const htmlCodeTable = `
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>30</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>25</td>
    </tr>
  </tbody>
</table>`;

// language=html
export const htmlCodeSemantic = `
<header>
  <h2>Site Header</h2>
</header>

<main>
  <article>
    <h3>Post title</h3>
    <p>Post content here.</p>
  </article>
</main>

<footer>
  <p>&copy; 2025 WebEach</p>
</footer>`;

// language=html
export const htmlCodeScript = `
<script>
  document.addEventListener('DOMContentLoaded', () => {
    console.log('Ready!');
  });
</script>`;

// language=html
export const htmlCodeInlineStyle = `
<div style="background: #f5f5f5; padding: 1rem;">
  Inline styled block
</div>`;

// language=html
export const htmlCodeCustomElement = `
<webeach-card title="Hello" theme="light">
  <p>Custom element content</p>
</webeach-card>`;

// language=html
export const htmlCodeMetaViewport = `
<meta name="viewport" content="width=device-width, initial-scale=1.0">`;

// language=html
export const htmlCodeWithEntities = `
<p>Tom &amp; Jerry &copy; Warner Bros.</p>`;
