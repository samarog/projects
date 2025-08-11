# CSV.ix

**CSV.ix** is a lightweight web app for visualizing CSV data using customizable charts.  
Upload your CSV file, choose a chart type, select a color theme, and download your visualization as a PNG.

---

## Preview
The UI features a dark, modern look with an accent color, smooth controls, and live chart rendering.

---

## Features
- **CSV Upload:** Parse CSV files to extract labels and numerical data. For now it only supports two-column CSV files.
- **Chart Customization:** Choose between bar, line, pie, and doughnut charts.
- **Color Picker:** Change chart colors dynamically.
- **Download as PNG:** Export the generated chart instantly.
- **Responsive Design:** Works on desktop and mobile screens.

---

## Tech Stack
- **HTML5** – structure
- **CSS3** – styling, theming, responsive layout
- **JavaScript (Vanilla)** – CSV parsing, Chart.js integration, download functionality
- **Chart.js** – rendering charts
- **Google Fonts** – Fira Code

---

## Project Structure
```
├── app.html       # Main UI structure
├── logic.js       # Core JavaScript logic
├── styles.css     # Styling and theme
└── samples/
    └── assets/
        └── product.sales.csv

```

---

## How It Works

1. **File Upload:**  
   - The user selects a `.csv` file.  
   - The file is read and parsed into labels (x-axis) and values (y-axis).

2. **Chart Rendering:**  
   - User chooses chart type and color.  
   - Chart.js renders the chart with provided settings.

3. **Dynamic Updates:**  
   - Color picker changes the chart color instantly.  
   - Chart type changes re-render the chart without page reload.

4. **Download Option:**  
   - Clicking "Save as PNG" downloads the current chart as an image.

---

## ⌨️ Controls
| Control         | Action                                    |
|-----------------|-------------------------------------------|
| File Input      | Upload CSV file                           |
| Chart Type      | Select visualization type                 |
| Color Picker    | Change chart color                        |
| Save as PNG     | Download chart image                      |

---

## Setup & Usage
1. Clone or download the project:
   ```bash
   git clone https://github.com/samarog/projects.git
   ```
2. Open `app.html` in your browser.
3. Use the sample in '.assets/sample' or upload your CSV file and customize your chart.

---

## Future Improvements
- CSV drag-and-drop support
- Multiple datasets visualization
- Data cleaning and formatting tools
- Cloud save / share chart feature

---

## Author

Built by **Gonçalo Amaro**  
Twitter/X: [@gonsamaro](https://twitter.com/gonsamaro)  
GitHub: [samarog](https://github.com/samarog)

## License

This project is open source and free to use.