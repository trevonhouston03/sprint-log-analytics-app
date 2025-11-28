# Backend image
FROM node:18-alpine

WORKDIR /app

# Copy backend package.json first and install
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm install

# Copy full project
WORKDIR /app
COPY . .


EXPOSE 5000

# start server
CMD ["node", "backend/server.js"]