# Express Task Manager

A RESTful API for managing tasks built with Express.js, TypeScript, Prisma, and PostgreSQL.

## Features

- ✅ Express.js web framework with TypeScript
- ✅ Security middleware (Helmet, CORS)
- ✅ Environment variable management (dotenv)
- ✅ PostgreSQL database with Prisma ORM
- ✅ JWT-based authentication
- ✅ Password hashing with bcryptjs
- ✅ Request validation with Zod
- ✅ Standardized error handling
- ✅ Development server with auto-reload (nodemon)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Database (PostgreSQL, MySQL, or SQLite for Prisma)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Sondos-Al-alami/express-task-manager.git
cd express-task-manager
```

2. Install dependencies:
```bash
npm install
```

3. Set up the database and create a `.env` file in the root directory:
```bash
# Run Prisma migrations
npx prisma migrate dev

# Create .env file
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@localhost:5432/mydb"
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
CORS_ORIGIN=http://localhost:3000,http://localhost:5173
```

4. Start the development server:
```bash
npm run dev
```

5. Or start in production mode:
```bash
npm start
```

The server will be running at `http://localhost:3000`


## Technology Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: PostgreSQL
- **ORM**: Prisma
- **Validation**: Zod
- **Authentication**: JWT (jsonwebtoken)
- **Password Hashing**: bcryptjs


## Development

### Database Migrations

```bash
# Create a new migration
npx prisma migrate dev --name migration_name

# Apply migrations
npx prisma migrate deploy

# Generate Prisma Client
npx prisma generate
```

### Prisma Studio

View and edit your database with Prisma Studio:

```bash
npx prisma studio
```

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-reload

## Security

This app includes:
- Helmet for HTTP security headers
- CORS configuration
- Environment variables for sensitive data
- Password hashing with bcryptjs
- JWT authentication with secure token validation
- Request validation to prevent invalid data
- Standardized error handling to avoid information leakage

## License

MIT

