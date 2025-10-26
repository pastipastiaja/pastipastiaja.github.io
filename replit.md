# HealthPlus Pharmacy

## Overview

HealthPlus Pharmacy is a modern e-commerce web application for a pharmacy business, built with React, TypeScript, and Vite. The application provides a comprehensive online platform for customers to browse pharmaceutical products, learn about services, locate physical stores, and manage their shopping cart. The site features a clean, accessible interface built with shadcn/ui components and Tailwind CSS, with full support for responsive design and theme customization.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build Tools**
- **React 18** with TypeScript for type-safe component development
- **Vite** as the build tool and development server, configured to run on port 5000
- **React Router** (BrowserRouter) for client-side routing with dedicated routes for shop, services, stores, about, contact, and product detail pages
- **Lovable Tagger** plugin integrated for development mode component tagging

**UI Component System**
- **shadcn/ui** component library built on Radix UI primitives for accessible, customizable components
- **Tailwind CSS** for utility-first styling with custom theme configuration
- **CSS Variables** pattern for dynamic theming support (light/dark mode via next-themes)
- Component path aliases configured (@/components, @/lib, @/hooks, @/ui) for cleaner imports

**State Management**
- **React Context API** (CartContext) for global shopping cart state management
- **TanStack Query** (React Query v5) for server state management and data fetching
- Local component state using React hooks

**Data Layer**
- Product catalog defined statically in `/src/data/products.ts` with TypeScript interfaces
- Product images stored in `/src/assets/` directory
- No external database or API integration - all product data is client-side

### Routing Strategy

**Multi-Page Application Structure**
- Index page (/) - Homepage with hero section and featured products
- Shop (/shop) - Product catalog with search functionality
- Product Category (/shop/category/:category) - Filtered product views
- Product Detail (/shop/product/:id) - Individual product pages
- Services (/services) - Service offerings information
- Stores (/stores) - Store locator functionality
- About (/about) - Company information
- Contact (/contact) - Contact forms and information
- 404 catch-all route for undefined paths

**Navigation Pattern**
- Sticky navigation bar component shared across all pages
- Mobile-responsive with hamburger menu for smaller screens
- Cart icon with item count badge in navigation

### Shopping Cart System

**Architecture Decision**: Context-based cart management
- **Rationale**: Provides global state access without prop drilling; suitable for small to medium-scale applications
- **Implementation**: CartContext with add, remove, update quantity, and clear operations
- **Persistence**: Cart state is session-based (lost on refresh) - no localStorage integration currently
- **UI Pattern**: Slide-out sheet component for cart display using shadcn Sheet component

### Component Architecture

**Design System Layers**
1. **Primitive Components** - Radix UI headless components (accordion, dialog, dropdown, etc.)
2. **UI Components** - Styled wrappers in `/src/components/ui/` following shadcn patterns
3. **Feature Components** - Business logic components (Navigation, Footer, Cart)
4. **Page Components** - Route-level components in `/src/pages/`

**Styling Approach**
- CSS-in-JS avoided in favor of utility classes
- Design tokens defined in `src/index.css` using HSL color values
- Responsive breakpoints and container queries via Tailwind config

### TypeScript Configuration

**Compilation Strategy**
- Strict mode **disabled** (`"strict": false`) for flexibility
- Unused variable checking **disabled** to reduce noise during development
- Module resolution set to "bundler" mode for modern module handling
- Path aliases configured for cleaner imports

### SEO & Marketing Integration

**Meta Tags**
- OpenGraph and Twitter Card meta tags configured in `index.html`
- Semantic HTML structure for accessibility and SEO

**Advertising**
- Google AdSense integration with publisher ID `ca-pub-2468195072207492`
- `ads.txt` file configured for ad verification
- Inline ad placement in HTML head

**Robots Configuration**
- Permissive robots.txt allowing all major crawlers (Googlebot, Bingbot, Twitterbot, Facebook)

## External Dependencies

### UI & Styling
- **@radix-ui/* packages** - Accessible headless UI primitives (accordion, alert-dialog, avatar, checkbox, dialog, dropdown-menu, etc.)
- **tailwindcss** with **autoprefixer** - Utility-first CSS framework
- **next-themes** - Theme management (light/dark mode)
- **class-variance-authority** - Type-safe variant styling
- **lucide-react** - Icon library
- **embla-carousel-react** - Carousel/slider functionality

### Forms & Validation
- **react-hook-form** (implied by @hookform/resolvers dependency)
- **@hookform/resolvers** - Schema validation resolver
- **react-day-picker** - Date picker component
- **input-otp** - OTP input fields

### Data Fetching
- **@tanstack/react-query** - Server state management and caching

### Development Tools
- **ESLint** with TypeScript support
- **lovable-tagger** - Component tagging for development
- **vite** build tool with React SWC plugin for fast refresh

### Routing
- **react-router-dom** - Client-side routing

### Utilities
- **date-fns** - Date manipulation library
- **clsx** & **tailwind-merge** - Utility class management
- **cmdk** - Command menu component

### Notifications
- **sonner** - Toast notifications
- Custom toast system via shadcn components

### Assets
- Product images stored locally in `/src/assets/products/` and `/src/assets/stock_images/`
- No CDN or external image hosting currently configured