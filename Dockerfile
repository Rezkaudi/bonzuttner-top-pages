# Use official Node.js image
FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all files
COPY . .

# Build Next.js app
RUN npm run build

# Tell Cloud Run which port to listen on
ENV PORT 8080
# Start Next.js server
CMD ["npm", "run", "start"]
