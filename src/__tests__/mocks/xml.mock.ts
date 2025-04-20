// language=xml
export const xmlCodeBasic = `
<?xml version="1.0" encoding="UTF-8"?>
<note>
  <to>Tove</to>
  <from>Jani</from>
  <heading>Reminder</heading>
  <body>Don't forget me this weekend!</body>
</note>`;

// language=xml
export const xmlCodeWithAttributes = `
<user id="42" active="true">
  <name>Maxim</name>
  <role>admin</role>
</user>`;

// language=xml
export const xmlCodeNested = `
<library>
  <book>
    <title>1984</title>
    <author>George Orwell</author>
  </book>
  <book>
    <title>Brave New World</title>
    <author>Aldous Huxley</author>
  </book>
</library>`;

// language=xml
export const xmlCodeEmptyTags = `
<images>
  <image src="cover.jpg" />
  <image src="thumbnail.jpg" />
</images>`;

// language=xml
export const xmlCodeNamespaces = `
<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
</svg>`;

// language=xml
export const xmlCodeCDATA = `
<script><![CDATA[
  var a = 5 < 10 && 3 > 1;
]]></script>`;

// language=xml
export const xmlCodeComment = `
<!-- This is a comment -->
<config>
  <mode>production</mode>
</config>`;

// language=xml
export const xmlCodeDoctype = `
<!DOCTYPE note [
  <!ELEMENT note (to,from,heading,body)>
  <!ELEMENT to (#PCDATA)>
  <!ELEMENT from (#PCDATA)>
  <!ELEMENT heading (#PCDATA)>
  <!ELEMENT body (#PCDATA)>
]>
<note>
  <to>Ivan</to>
  <from>Maria</from>
  <heading>Hello</heading>
  <body>Hello World!</body>
</note>
`;

// language=xml
export const xmlCodeWithEntities = `
<message>
  Good &amp; Evil coexist.
</message>`;

// language=xml
export const xmlCodeCustom = `
<webeach-ui>
  <card title="Hello">Welcome</card>
</webeach-ui>`;
