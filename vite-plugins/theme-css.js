import path from 'path';
import fs from 'fs';

const round = (value, decimals = 2) => {
  const multiplier = Math.pow(10, decimals);
  return Math.round((value + Number.EPSILON) * multiplier) / multiplier;
};

const pickTextColorBasedOnBgColorSimple = (bgColor, lightColor, darkColor) => {
  const color = bgColor.charAt(0) === '#' ? bgColor.substring(1, 7) : bgColor;
  const r = parseInt(color.substring(0, 2), 16); // hexToR
  const g = parseInt(color.substring(2, 4), 16); // hexToG
  const b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? darkColor : lightColor;
};

const hexToRgb = (hex) => {
  return {
    r: parseInt(hex.slice(0, 2), 16),
    g: parseInt(hex.slice(2, 4), 16),
    b: parseInt(hex.slice(4, 6), 16),
  };
};

const rgb2hue = ({ r, g, b }) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const l = Math.max(r, g, b);
  const s = l - Math.min(r, g, b);
  const h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0;
  return {
    h: round(60 * h < 0 ? 60 * h + 360 : 60 * h, 0),
    s: round(
      100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)
    ),
    l: round((100 * (2 * l - s)) / 2),
  };
};

export const themeCSS = ({
  entryFile = 'src/main.js',
  config = 'theme.config.json',
} = {}) => {
  return {
    name: 'theme-css',
    async buildStart() {
      return new Promise((resolve, reject) => {
        fs.readFile(path.resolve(process.cwd(), config), (err, data) => {
          if (err) {
            reject(err);
            return;
          }

          let out = '';
          const theme = JSON.parse(data.toString());
          const colorRanges = theme.color?.ranges || {
            lighter: 35,
            light: 10,
            dark: -10,
            darker: -35,
          };

          const colorMin = theme.color?.min || 5;
          const colorMax = theme.color?.max || 98;

          for (const [name, rgb] of Object.entries(theme.colors)) {
            const hsl = rgb2hue(hexToRgb(rgb.slice(1)));

            // output base color
            out += `\t--${name}: hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%);\n`;

            // output font with correct contrast to base color.
            const fontColor = pickTextColorBasedOnBgColorSimple(
              rgb,
              '#ffffff',
              'var(--type-primary)'
            );
            out += `\t--${name}-type: ${fontColor};\n`;

            // output color ranges
            let l = hsl.l;
            for (const [range, value] of Object.entries(colorRanges)) {
              l =
                value >= 0
                  ? Math.min(hsl.l + value, colorMax)
                  : Math.max(hsl.l + value, colorMin);

              out += `\t--${name}-${range}: hsl(${hsl.h}, ${hsl.s}%, ${l}%);\n`;
            }
          }

          for (const i of [1, 2, 3, 4, 5, 6]) {
            out += `\t--s${i}: calc(${theme.spacing} * ${i});\n`;
          }

          fs.writeFile(
            path.resolve(process.cwd(), 'src', 'generated.css'),
            `:root{\n${out}}`,
            (err) => {
              if (err) {
                reject(err);
                return;
              }
              resolve();
            }
          );
        });
      });
    },
    async transform(src, filename) {
      if (path.resolve(process.cwd(), entryFile) !== filename) {
        return;
      }

      return {
        code: 'import "./generated.css"\n' + src,
        dependencies: [path.resolve(process.cwd(), config)],
      };
    },
  };
};
