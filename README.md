# Locals.vn - E-commerce Platform

A modern e-commerce platform built with Next.js, Express, and PostgreSQL.

## Project Structure

```
Locals.vn/
├── apps/
│   ├── frontend/          # Next.js frontend application
│   └── backend/           # Express backend API
├── prisma/
│   └── schema.prisma      # Database schema
├── package.json           # Root package.json (monorepo)
├── docker-compose.yml     # PostgreSQL database
└── README.md
```

## Quick Start

### 1. Install Dependencies

```bash
yarn install
```

### 2. Setup Database

Copy environment variables:
```bash
cp env.example .env
```

Start PostgreSQL with Docker:
```bash
docker-compose up -d
```

### 3. Setup Database Schema

```bash
npx prisma generate
npx prisma migrate dev --name init
```

### 4. Start Development Servers

```bash
yarn dev
```

This will start:
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## Database Models

### User
- `id`: UUID primary key
- `email`: Unique email address
- `passwordHash`: Hashed password
- `role`: ADMIN or EDITOR
- `createdAt`, `updatedAt`: Timestamps

### Product
- `id`: UUID primary key
- `name`: Product name
- `description`: Optional description
- `price`: Decimal price
- `category`: Product category
- `tags`: Array of tags
- `imageUrls`: Array of image URLs
- `createdAt`, `updatedAt`: Timestamps

### Lead
- `id`: UUID primary key
- `name`: Lead name
- `email`: Contact email
- `phone`: Optional phone number
- `message`: Optional message
- `status`: NEW, CONTACTED, QUALIFIED, or LOST
- `notes`: Optional notes
- `createdAt`, `updatedAt`: Timestamps

## Available Scripts

- `yarn dev`: Start both frontend and backend in development mode
- `yarn lint`: Run ESLint across all packages
- `yarn format`: Format code with Prettier

## Next Steps

1. Implement authentication system
2. Create product management API
3. Build product listing and detail pages
4. Add lead management functionality
5. Implement payment integration
