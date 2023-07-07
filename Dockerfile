# Base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json
COPY package.json .
COPY package-lock.json .

# Install dependencies
RUN npm ci --production --ignore-scripts

# Copy the Next.js application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose the port on which the Next.js application runs (default is 3000)
EXPOSE 3000

# Set the command to start the Next.js application in production mode
CMD ["npm", "run","dev"]
