# Project Express

An Express.js API application created with the Express generator.

## Features

- ✅ Express.js web framework
- ✅ Security middleware (Helmet, CORS)
- ✅ Environment variable management (dotenv)
- ✅ Database-ready with Prisma
- ✅ Authentication packages installed (bcrypt, JWT)
- ✅ Development server with auto-reload (nodemon)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Database (PostgreSQL, MySQL, or SQLite for Prisma)

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd project-express
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```bash
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

## API Endpoints

- `GET /` - API welcome message
- `GET /users` - Users resource

## Project Structure

```
project-express/
├── bin/
│   └── www                 # Server entry point
├── routes/
│   ├── index.js           # Home route
│   └── users.js           # Users routes
├── public/                # Static files
├── app.js                 # Express app configuration
├── package.json           # Dependencies and scripts
└── .env                   # Environment variables (create this)
```

## Next Steps

1. **Database Setup**: Initialize Prisma with `npx prisma init`
2. **Create Models**: Define your database schema in `prisma/schema.prisma`
3. **Add Authentication**: Implement JWT-based auth using the installed packages
4. **Create API Routes**: Add more routes in the `routes/` directory
5. **Add Validation**: Consider using `express-validator` for request validation
6. **Error Handling**: Add global error handling middleware
7. **Testing**: Set up testing with Jest or Mocha

## Available Scripts

- `npm start` - Start the production server
- `npm run dev` - Start the development server with auto-reload

## Security

This app includes:
- Helmet for HTTP security headers
- CORS configuration
- Environment variables for sensitive data
- Ready for bcrypt password hashing
- JWT authentication support

## License

MIT

