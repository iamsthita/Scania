# Build stage
FROM python:3.9-slim AS builder

# Set the working directory in the container
WORKDIR /app

# Copy the application code into the container
COPY . /app

# Install any necessary dependencies for building the application
RUN apt-get update \
    && apt-get install -y --no-install-recommends \
        gcc \
    && rm -rf /var/lib/apt/lists/* \
    && python3 -m venv venv \
    && . venv/bin/activate \
    && pip install --no-cache-dir flask \
    && apt-get purge -y --auto-remove gcc

# Runtime stage
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /app

# Copy only the built artifacts from the previous stage
COPY --from=builder /app /app

# Expose the port on which the application will run
EXPOSE 5000

# Command to run the application
CMD ["venv/bin/python", "scania.py"]
