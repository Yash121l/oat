+++
title = "Customizing"
description = "Customize and theme lmui by overriding CSS variables"
+++

Pretty much all properties of lmui are defined as CSS variables that can be overridden. See [theme.css](#) to see all variables. To override, redefine them in a CSS file in your project and include after the lib's CSS files.

## Theming

The following color variables from theme.css control the theme (colour profile). Override them to create your own theme.

```css
:root {

  /* Page background */
  --lm-background: rgb(255 255 255);

  /* Primary text color */
  --lm-foreground: rgb(9 9 11);

  /* Card background */
  --lm-card: rgb(255 255 255);

  /* Card text color */
  --lm-card-foreground: rgb(9 9 11);

  /* Primary buttons and links */
  --lm-primary: rgb(24 24 27);

  /* Text color on primary buttons */
  --lm-primary-foreground: rgb(250 250 250);

  /* Secondary button background */
  --lm-secondary: rgb(244 244 245);

  /* Text colour on secondary buttons */
  --lm-secondary-foreground: rgb(24 24 27);

  /* Muted (lighter) background */
  --lm-muted: rgb(244 244 245);

  /* Muted (lighter) text colour */
  --lm-muted-foreground: rgb(113 113 122);

  /* Subtler than muted background */
  --lm-faint: rgb(250 250 250);

  /* Subtler than muted text color */
  --lm-faint-foreground: rgb(161 161 170);

  /* Accent background */
  --lm-accent: rgb(244 244 245);

  /* Accent text color */
  --lm-accent-foreground: rgb(24 24 27);

  /* Error/danger color */
  --lm-danger: rgb(223 81 76);

  /* Text color on danger background */
  --lm-danger-foreground: rgb(250 250 250);

  /* Success color */
  --lm-success: rgb(76 175 80);

  /* Text colour on success background */
  --lm-success-foreground: rgb(250 250 250);

  /* Warning color */
  --lm-warning: rgb(255 140 0);

  /* Text colour on warning background */
  --lm-warning-foreground: rgb(9 9 11);

  /* Border color (boxes) */
  --lm-border: rgb(212 212 216);

  /* Input borders */
  --lm-input: rgb(212 212 216);

  /* Focus ring color */
  --lm-ring: rgb(24 24 27);
}
```

## Dark mode

Adding `data-theme="dark"` to `<body>` applies the dark theme. Customize the dark theme by redefining the aforementioned theme variables and scoping them inside `[data-theme="dark"] { }`

# Picking and choosing

While it is quite okay to bundle all of lmui given how tiny it is (CSS %KB, JS %KB), it is possible to include components selectively.

#### Must include
- `01-reset.css`
- `02-theme.css`
- `03-base.css`
- `base.js`

After these, include CSS and JS files the respective components.
