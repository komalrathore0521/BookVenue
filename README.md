# 🏨 BookVenue – Venue Reservation & Management Platform

<div align="center">
  <a href="https://bookspacewebapp.netlify.app/" target="_blank">
    <img src="https://img.shields.io/badge/🚀_Live_Demo-FF69B4?style=for-the-badge&logo=netlify&logoColor=white" alt="Live Demo">
  </a>
  <a href="https://hub.docker.com/r/komalrathore22032001/bookvenue-backend" target="_blank"> <img src="https://img.shields.io/badge/View_on-DockerHub-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Hub"> </a>
</div>

<br>

## 📖 Project Overview
**BookVenue** is a full-stack web application to **discover venues, check availability, and make bookings**.  
It provides a smooth **customer experience** for browsing & booking, and a powerful **admin panel** for managing venues, blocked dates, and reservations — built with **Spring Boot + PostgreSQL** on the backend and **React + Tailwind** on the frontend.

---

## ✨ Key Features

- **🧭 Venue Discovery:** Browse venues with details, photos, pricing, and availability.
- **📅 Smart Availability:** Date-wise availability checks and conflict-free slot booking.
- **🧑‍💼 Admin Dashboard:** Add/edit venues, manage blocked dates, view & manage bookings.
- **🧩 Clean Architecture:** Controller → Service → Repository (backend), modular components (frontend).
- **🔐 Validation & Error Handling:** Robust request validation and meaningful error responses.

---

## 🛠️ Technologies Used

### 🧠 Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwindcss&logoColor=white)

### ⚙️ Backend
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
![Spring Data JPA](https://img.shields.io/badge/Spring_Data_JPA-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)

---

## 🚀 Local Development Setup

### ✅ Prerequisites
- **Java 17+**, **Maven 3.9+**
- **Node.js 18+** and **npm**/**yarn**
- **PostgreSQL 14+**

> The project has **separate `backend/` and `frontend/`** folders.

---

### 🔧 1) Clone the Repository
```bash
git clone https://github.com/komalrathore0521/BookVenue.git
cd BookVenue
```
### 🗄️ 2) Backend (Spring Boot)

**Create the database:**
```sql
CREATE DATABASE bookvenue;
```

**Configure `backend/src/main/resources/application.properties`:**

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/bookvenue
spring.datasource.username=postgres
spring.datasource.password=postgres
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
server.port=8081
```
### 🖥️ 3) Frontend (React + Vite)

**Install & run:**
```bash
cd frontend
npm install
npm run dev
```
**Run backend:**
```bash
cd backend
mvn spring-boot:run
```
##### Backend will start at: http://localhost:8081

##### Create frontend/.env (API base URL):

 **VITE_REACT_APP_API_URL=http://localhost:8081/api**


##### Frontend dev server: http://localhost:5173
## 🔗 Environment Variables (Quick Ref)

**Backend**
- `spring.datasource.url` – JDBC URL for Postgres  
- `spring.datasource.username` / `spring.datasource.password`  
- `server.port` – default `8081`

**Frontend**
- `VITE_REACT_APP_API_URL` – e.g. `http://localhost:8081/api`

## 📚 API Overview

Below is the complete list of API endpoints for **BookVenue**, grouped by modules.  
All endpoints are RESTful and accessible under the base path `/api`.

---

### 🏨 Venue APIs

| Method | Endpoint | Description | Auth Required |
|:-------|:----------|:-------------|:---------------|
| **GET** | `/api/venues` | Get all venues | ❌ |
| **GET** | `/api/venues/{id}` | Get details of a specific venue by ID | ❌ |
| **POST** | `/api/venues` | Create a new venue | ✅ (Admin) |
| **PUT** | `/api/venues/{id}` | Update venue details | ✅ (Admin) |
| **DELETE** | `/api/venues/{id}` | Delete a venue | ✅ (Admin) |
| **PUT** | `/api/venues/{id}/availability` | Update blocked/unblocked dates for a venue | ✅ (Admin) |

---

### 📅 Booking APIs

| Method | Endpoint | Description | Auth Required |
|:-------|:----------|:-------------|:---------------|
| **GET** | `/api/bookings` | Get all bookings | ✅ (Admin) |
| **GET** | `/api/bookings/{id}` | Get booking by ID | ✅ |
| **GET** | `/api/bookings/recent` | Get recent bookings | ✅ |
| **POST** | `/api/bookings` | Create a new booking | ❌ (User) |
| **PUT** | `/api/bookings/{id}` | Update a booking | ✅ |
| **DELETE** | `/api/bookings/{id}` | Delete a booking | ✅ |

---

### 🧩 Example JSON Payloads

**Create Venue**
```json
{
  "name": "Royal Palace Banquet Hall",
  "location": "Raipur",
  "capacity": 300,
  "pricePerHour": 2500,
  "description": "Spacious hall ideal for weddings and corporate events."
}
```
**Create Booking**
```json
{
  "userName": "Komal Rathore",
  "userEmail": "komalrathore0521@gmail.com",
  "venueId": 1,
  "bookingDate": "2025-11-08",
  "hoursBooked": 5
}
```
**Update Availability**
```json
{
  "blockDates": ["2025-11-10", "2025-11-12"],
  "unblockDates": ["2025-11-05"]
}
```
## 📸 Screenshots

<p align="center">
  <img src="./screenshots/customer.gif" alt="Customer Browsing" width="80%">
</p>

<p align="center">
  <img src="./screenshots/admin.gif" alt="Admin Dashboard" width="80%">
</p>

## 🤝 Contributing

1. Fork the repository  
2. Create a new branch:  
   ```bash
   git checkout -b feat/your-feature
   ```
3. Commit Your Changes
   ```bash   
   git commit -m "feat: add your feature"
   ```
4. Push to your branch:
   ```bash   
   git push origin feat/your-feature
   ```
5. Open a Pull Request
         
   ## 👩‍💻 Author

**Kumari Komal**  
🔗 [LinkedIn](https://linkedin.com/in/kumari-komal-6b08191a0) · [GitHub](https://github.com/komalrathore0521) · ✉️ [komalrathore0521@gmail.com](mailto:komalrathore0521@gmail.com)



