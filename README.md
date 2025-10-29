# Minimalist Bold Portfolio

A clean, minimalist portfolio template featuring bold typography, ample white space, and a focus on content. Perfect for designers, architects, and creative professionals who value simplicity and clarity.

## Features

- **Bold Typography**: Large, striking headlines with Playfair Display and Inter fonts
- **Minimalist Design**: Clean white background with strategic use of black and a single accent color
- **JSON-Driven Content**: Easy content management through simple JSON files
- **Responsive Layout**: Mobile-first design that works on all devices
- **No Framework**: Built with vanilla HTML, CSS, and JavaScript
- **Swiss Design Inspired**: Grid-based layout with emphasis on typography and white space

## Design Characteristics

- Clean white/off-white backgrounds
- Bold black typography
- Electric blue accent color (#0066FF)
- Large headlines and ample spacing
- Grid-based layouts
- Subtle hover effects
- Professional and modern aesthetic

## Quick Start

1. Clone or download this repository
2. Open `index.html` in your browser
3. Customize the JSON files in the `data/` folder with your information
4. Modify colors in `assets/css/styles.css` if desired

## File Structure

```
minimalist-bold-portfolio/
├── index.html
├── assets/
│   ├── css/
│   │   └── styles.css
│   └── js/
│       └── main.js
└── data/
    ├── site-config.json
    ├── navigation.json
    ├── hero.json
    ├── about.json
    ├── work.json
    ├── skills.json
    ├── projects.json
    ├── contact.json
    └── footer.json
```

## Customization

### Colors
Edit the CSS variables in `assets/css/styles.css`:
```css
:root {
    --accent: #0066FF;  /* Change accent color */
    --black: #0A0A0A;   /* Adjust black tone */
    --white: #FFFFFF;   /* Background color */
}
```

### Content
All content is managed through JSON files in the `data/` folder. Simply edit these files to update your portfolio content.

### Typography
Fonts can be changed by updating the Google Fonts link in `index.html` and the CSS variables in `styles.css`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Free to use for personal and commercial projects.

## Credits

Sample data features Elena Torres (fictional product designer)
Images from Unsplash
