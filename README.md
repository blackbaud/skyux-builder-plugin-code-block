# Stache Code Block
### SKY UX Builder Plugin

This [SKY UX Builder](https://github.com/blackbaud/skyux-builder) plugin converts the `innerHTML` of all `<stache-code-block>` elements to HTML entities. This is done to prevent Angular from resolving bindings, and to display HTML elements as text. This plugin is intended to be used with [Stache 2 Components](https://github.com/blackbaud/stache2).

## Installation

```
npm install --save @blackbaud/skyux-builder-plugin-stache-code-block
```

## Usage

Open **skyuxconfig.json** and add the following:

```
{
  "plugins": [
    "@blackbaud/skyux-builder-plugin-stache-code-block"
  ]
}
```
