# Use the official Bun image
FROM oven/bun:latest

# Set the working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy the rest of your source code
COPY . .

# Build the Docusaurus site for production
RUN bun run build

# Expose the port Docusaurus serve runs on
EXPOSE 3000

# Command to serve the built site
# The --host 0.0.0.0 is crucial to make it accessible outside the container
CMD ["bun", "run", "serve", "--host", "0.0.0.0"]