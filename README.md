# Stache Code Block Plugin

[![npm](https://img.shields.io/npm/v/@blackbaud/skyux-builder-plugin-stache-code-block.svg)](https://www.npmjs.com/package/@blackbaud/skyux-builder-plugin-stache-code-block)
[![status](https://travis-ci.org/blackbaud/skyux-builder-plugin-stache-code-block.svg?branch=master)](https://travis-ci.org/blackbaud/skyux-builder-plugin-stache-code-block)

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

## Found an issue?

Please log all issues related to Stache (and its plugins) at [blackbaud/stache2](https://github.com/blackbaud/stache2/issues).
