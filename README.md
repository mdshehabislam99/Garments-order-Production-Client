# Garments Order Production Client
Role-based garment order management platform for buyers, managers, and admins with tracking and payment support.

---

## About the Project
Garments Order Production Client is a frontend application for managing garment production workflows. It supports product browsing, order placement, approval pipelines, order tracking, and role-based dashboard operations for buyer, manager, and admin users.


## Project Overview
- Built to digitize garment order and production flow in a single dashboard ecosystem.
- Supports three user roles with dedicated routes and features.
- Includes secure authentication, protected APIs, and payment workflow integration.
- Live deployment available for portfolio and demonstration use.

Optional visual assets you can add here:
- System flow diagram
- Dashboard screenshots (Buyer / Manager / Admin)

---

## Key Features
- Buyer flow: browse products, place/cancel orders, view order history, and track production progress.
- Manager flow: add/update/manage products and process pending/approved orders.
- Admin flow: manage users/roles, manage all products, and monitor all orders.
- Secure authentication with Firebase and protected route guards.
- Stripe payment status flow (`success` / `canceled`) with booking integration.
- Order tracking with timeline/location support and dashboard analytics charts.

---

## Tech Stack
**Frontend:** React 19, Vite, React Router, Tailwind CSS 4, DaisyUI  
**Authentication:** Firebase Auth  
**State/Data:** Axios, TanStack React Query, React Hook Form  
**UI/UX:** Framer Motion, AOS, Swiper, Slick Carousel, Chart.js, Recharts  
**Payment:** Stripe  
**Tools:** ESLint, Git, VS Code, Firebase Hosting

---

## Dependencies
Major libraries used in this client:

```json
{
  "react": "^19.2.3",
  "react-dom": "^19.2.3",
  "react-router-dom": "^7.10.1",
  "@tanstack/react-query": "^5.90.12",
  "axios": "^1.13.2",
  "firebase": "^12.7.0",
  "tailwindcss": "^4.1.17",
  "daisyui": "^5.5.11",
  "stripe": "^20.1.0"
}
```

---

## Installation & Setup
1. Clone the repo and install dependencies:

```bash
git clone https://github.com/<your-username>/Garments-order-Production-Client.git
cd Garments-order-Production-Client
npm install
```

2. Create a `.env` file in the project root with the following variables:

```env
VITE_API_URL=your_server_base_url
VITE_apiKey=your_firebase_api_key
VITE_authDomain=your_firebase_auth_domain
VITE_projectId=your_firebase_project_id
VITE_storageBucket=your_firebase_storage_bucket
VITE_messagingSenderId=your_firebase_messaging_sender_id
VITE_appId=your_firebase_app_id
VITE_IMGBB_API_KEY=your_imgbb_api_key
```

3. Run the application:

```bash
npm run dev
```

4. Build for production:

```bash
npm run build
```

---

## Folder Structure

```plaintext
Garments-order-Production-Client/
|-- public/
|-- src/
|   |-- Components/
|   |-- Firebase/
|   |-- Hooks/
|   |-- Layout/
|   |-- Pages/
|   |-- Provider/
|   |-- Route/
|   |-- assets/
|   |-- index.css
|   `-- main.jsx
|-- .env
|-- package.json
`-- vite.config.js
```

---


## License
This project currently does not include a license file.  
If you want open-source usage, add an MIT `LICENSE` file and update this section.

---

## Contact
**Live URL:**[Live Link](https://garments-production-tracker.web.app)  
**Email:** shihabkhanahab@gmail.com  
**Portfolio:**[Portfolio Link](https://personal-portfolio-website-weld-five.vercel.app/)
