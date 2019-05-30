# Pixel borders
### A Sass mixin to add pixelated borders to HTML elements, which can be customized for different sizes, styles and colour coding.

### [View demo](http://nigelotoole.github.io/pixel-borders/)


## Installation
```javascript
$ npm install pixel-borders --save-dev
```

## Usage

### Import

After installation you can import it into your Sass files with the statement below.

```scss
@import "node_modules/pixel-borders/src/styles/pixel-borders.scss";
```

You can also just import the mixins without the demo styles.

```scss
@import "node_modules/pixel-borders/src/styles/pixel-borders/pixel-borders-mixins";
```

#### Pixel borders mixin options

```scss
// Add pixel borders with default options
@include pixel-borders();

// Available options
@include pixel-borders(
  $corner-size: 1,                 
  $border-size: 4px,              
  $border-color: #000,            
  $border-inset-color: false
);

// Helper method to create custom styles e.g. colour themes, inset border, highlight
@include pixel-box(
  $corner-size,
  $border-size, 
  $background-color,              
  $border-color: false,           
  $border-inset: true,            
  $border-inset-size: false,      
  $border-inset-color: false,     
  $border-inset-sides: false,     // Sides to apply inset border: 'all', 'top-left' or 'bottom-right'
  $border-inset-color-br: false,  // Bottom right inset border colour
  $border-inset-color-tl: false   // Top left inset border colour
);
```

### pixel-borders

| Property              | Default | Type                    | Description                                            |
| --------------------- | ------- | ----------------------- | ------------------------------------------------------ |
| `$corner-size`        | 1       | Number                  | Number of pixels taken out of the corner.              |
| `$border-size`        | 4px     | Number(px)              | Border size.                                           |
| `$border-color`       | \#000   | Hexadecimal color       | Border colour.                                         |
| `$border-inset-color` | false   | False/Hexadecimal color | Add a inset border to the bottom right in this colour. |

### pixel-box

| Property                 | Default                       | Type                     | Description                                                              |
| ------------------------ | ----------------------------- | ------------------------ | ------------------------------------------------------------------------ |
| `$corner-size`           |                               | Number                  | Number of pixels taken out of the corner.                                 |
| `$border-size`           |                               | Number(px)              | Border size.                                                              |
| `$background-color`      |                               | Hexadecimal color        | Background colour for the box, this is used as a base for colour theme.  |
| `$border-color`          | Darkened `$background-color`  | False/Hexadecimal colour | Border colour.                                                           |
| `$border-inset`          | true                          | Boolean                  | Add a inset border.                                                      |
| `$border-inset-size`     | `$border-size`                | False/Number(px)         | Inset border size.                                                       |
| `$border-inset-color`    | Darkened `$background-color`  | False/Hexadecimal color  | Inset border colour.                                                     |
| `$border-inset-sides`    | 'bottom-right'                | String                   | Which sides to add inset border to, 'all', 'top-left' or 'bottom-right'. |
| `$border-inset-sides-br` | `$border-inset-color`         | False/Hexadecimal color  | Bottom right inset border colour.                                        |
| `$border-inset-sides-tl` | Lightened `$background-color` | False/Hexadecimal color  | Top left inset border colour.                                            |

### Classes

A class of .pixel-borders is applied all elements with a pixel border for demo purposes only, you should be able to add pixel borders to any elements.

The pixel borders mixin comes with a number of classes defined to demonstrate how it can be used. These can be used as is but I would encourage users to create their own customized classes.

### Demo site

Clone or download from Github.

```javascript
    $ npm install
    $ gulp serve
```

### Credits

Inspired by the excellent [NES.css](https://nostalgic-css.github.io/NES.css/) which is a full NES-style CSS framework. Pixel borders is intended to be used where only the borders are required.


### License
MIT © Nigel O Toole
