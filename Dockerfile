# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install backend dependencies
RUN npm install

# Copy the entire backend codebase to the working directory
COPY . .

# Expose the backend server port (replace 5000 with your actual backend port)
EXPOSE 4000

# Start the backend server
CMD ["npm", "start"]
