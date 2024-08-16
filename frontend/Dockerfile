# Use the official Nginx image
FROM nginx:alpine

# Copy static files to the Nginx HTML directory
COPY static-files/ /usr/share/nginx/html

# Copy custom Nginx configuration if needed
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80
