# ---------- Build stage ----------
FROM maven:3.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN mvn -q -e -DskipTests dependency:go-offline

# Copy source code and build jar
COPY src ./src
RUN mvn -q -DskipTests package

# ---------- Runtime stage ----------
FROM eclipse-temurin:21-jre-alpine
WORKDIR /app

# Create non-root user for security
RUN addgroup -S app && adduser -S app -G app
USER app

# Copy the built jar from the build stage
COPY --from=build /app/target/Backend-0.0.1-SNAPSHOT.jar app.jar

# Environment setup
ENV JAVA_OPTS="-XX:+UseContainerSupport -XX:MaxRAMPercentage=75.0"
ENV PORT=8080

# Expose the port (Render uses this)
EXPOSE 8080

# Run Spring Boot, respecting Render's dynamic port
ENTRYPOINT ["sh", "-c", "java $JAVA_OPTS -jar app.jar --server.port=${PORT}"]
