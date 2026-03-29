# Vendor Management with Quotation & Invoice Generation

## Project Overview
This is a full-stack style backend project for managing vendors, RFQs, quotations, purchase orders, and invoices.

## Features
- Vendor Management
- RFQ Management
- Quotation Management
- Purchase Order Management
- Invoice Management
- REST API using Node.js and Express

## Tech Stack
- Node.js
- Express.js
- JavaScript
- Postman for API testing

## Project Structure
vendor-management-system/
└── server/
    ├── package.json
    └── src/
        └── server.js

## API Endpoints

### Base Routes
- GET `/`
- GET `/api/test`

### Vendor Routes
- GET `/api/vendors`
- GET `/api/vendors/:id`
- POST `/api/vendors`
- PUT `/api/vendors/:id`

### RFQ Routes
- GET `/api/rfqs`
- GET `/api/rfqs/:id`
- POST `/api/rfqs`
- PUT `/api/rfqs/:id`

### Quotation Routes
- GET `/api/quotations`
- GET `/api/quotations/:id`
- POST `/api/quotations`
- PUT `/api/quotations/:id`

### Purchase Order Routes
- GET `/api/po`
- GET `/api/po/:id`
- POST `/api/po`
- PUT `/api/po/:id`

### Invoice Routes
- GET `/api/invoices`
- GET `/api/invoices/:id`
- POST `/api/invoices`
- PUT `/api/invoices/:id`

## How to Run
1. Open terminal
2. Go to server folder
   ```bash
   cd server