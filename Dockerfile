# use official Node image
FROM node:18-alpine

WORKDIR /app

# copy backend package files and install dependencies
COPY backend/package*.json ./backend/
WORKDIR /app/backend
RUN npm install

# copy everything
WORKDIR /app
COPY . .

# expose port
EXPOSE 5000

# start server
CMD ["node", "backend/server.js"]