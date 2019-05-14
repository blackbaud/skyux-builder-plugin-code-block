# @blackbaud/skyux-builder-plugin-code-block

[![npm](https://img.shields.io/npm/v/@blackbaud/skyux-builder-plugin-code-block.svg)](https://www.npmjs.com/package/@blackbaud/skyux-builder-plugin-code-block)
[![status](https://travis-ci.org/blackbaud/skyux-builder-plugin-code-block.svg?branch=master)](https://travis-ci.org/blackbaud/skyux-builder-plugin-code-block)

This [SKY UX Builder](https://github.com/blackbaud/skyux-builder) plugin converts the `innerHTML` of all `<sky-code-block>` elements to HTML entities. This is done to prevent Angular from resolving bindings, and to display HTML elements as text. This plugin is intended to be used with [Stache Components](https://github.com/blackbaud/skyux-lib-stache).

## Installation

```
npm install --save @blackbaud/skyux-builder-plugin-code-block
```

## Usage

Open **skyuxconfig.json** and add the following:

```
{
  "plugins": [
    "@blackbaud/skyux-builder-plugin-code-block"
  ]
}
```
