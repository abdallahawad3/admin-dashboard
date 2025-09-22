# Admin Dashboard

A modern, responsive admin dashboard built with React, TypeScript, and Material-UI featuring dark/light mode themes, RTL support, and interactive data visualizations.

## 🚀 Features

- **Modern UI/UX**: Clean and intuitive interface built with Material-UI
- **Theme Support**: Toggle between dark and light modes
- **RTL/LTR Support**: Full right-to-left language support
- **Responsive Design**: Works seamlessly across all device sizes
- **Data Visualization**: Interactive charts using popular charting libraries
- **Team Management**: Comprehensive team and contact management
- **Calendar Integration**: Built-in calendar functionality
- **Form Handling**: Professional form components with validation
- **Geography Charts**: Interactive map visualizations

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **UI Library**: Material-UI (MUI) v5
- **Routing**: React Router DOM
- **Styling**: Emotion CSS-in-JS
- **Charts**: Chart.js / Recharts / Nivo
- **Icons**: Material-UI Icons
- **State Management**: React Context API

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Dashboard/      # Dashboard-specific components
│   └── ui/            # Generic UI components
├── data/              # Mock data and constants
├── pages/             # Page components
│   ├── bar/          # Bar chart page
│   ├── calendar/     # Calendar page
│   ├── contact/      # Contact management
│   ├── dashboard/    # Main dashboard
│   ├── faq/          # FAQ page
│   ├── form/         # Form page
│   ├── Geography/    # Geography chart
│   ├── global/       # Global layout components
│   ├── invoices/     # Invoice management
│   ├── line/         # Line chart page
│   ├── pie/          # Pie chart page
│   └── team/         # Team management
├── App.tsx           # Main application component
├── main.tsx          # Application entry point
├── theme.tsx         # Theme configuration and context
└── index.css         # Global styles
```

## 🎨 Theme System

The application features a comprehensive theme system with:

- **Color Tokens**: Predefined color palettes for consistency
- **Dark/Light Mode**: Toggle between themes
- **RTL Support**: Right-to-left language support
- **Custom Components**: Themed Material-UI components

### Available Color Tokens
- **Primary**: Main brand colors
- **Grey**: Neutral colors for backgrounds and text
- **Green Accent**: Success states and positive actions
- **Red Accent**: Error states and warnings
- **Blue Accent**: Information and links

## 📊 Available Pages

1. **Dashboard** - Main overview with key metrics and charts
2. **Team Management** - Employee directory and management
3. **Contacts** - Contact information management
4. **Invoices** - Invoice tracking and management
5. **Profile Form** - User profile creation and editing
6. **Calendar** - Event scheduling and management
7. **FAQ** - Frequently asked questions
8. **Charts**:
   - Bar Chart - Data comparison visualization
   - Pie Chart - Proportion representation
   - Line Chart - Trend analysis
   - Geography Chart - Location-based data

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd admin-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

## 🎛️ Configuration

### Theme Customization

Edit `src/theme.tsx` to customize:
- Color palettes
- Typography settings
- Component overrides
- Breakpoints

### Adding New Pages

1. Create a new folder in `src/pages/`
2. Add your component file
3. Update routing in `src/App.tsx`
4. Add navigation link in `src/pages/global/Sidebar.tsx`

## 🔧 Run Project

- `npm run dev` - Start development server



## 📱 Responsive Breakpoints

- **Mobile**: 0px - 599px
- **Tablet**: 600px - 959px
- **Desktop**: 960px - 1279px
- **Large Desktop**: 1280px+

## 🎨 Design System

The dashboard follows Material Design principles with custom enhancements:

- **Spacing**: 8px grid system
- **Typography**: Source Sans 3 font family
- **Shadows**: Consistent elevation system
- **Border Radius**: Rounded corners for modern feel

## 🔮 Future Enhancements

- [ ] User authentication and authorization
- [ ] Real-time data updates
- [ ] Advanced filtering and search
- [ ] Export functionality for charts and data
- [ ] Mobile app version
- [ ] API integration
- [ ] Unit and integration tests
- [ ] Internationalization (i18n)

---

Built with ❤️ using React and Material-UI