# HR Data Engine (Backend)
Bridging the gap between HRMS UI/UX Design and Relational Data Architecture.

## 🚀 Background & Inspiration
Drawing from my extensive experience as a UI/UX Designer at FlexSystem, where I worked on the BridgeBuilder HRMS , 
I realized that a great user experience starts with a robust data foundation. This project is a full-stack implementation of a scalable HR data engine, 
transitioning from designing responsive HR modules to architecting the underlying database logic.

## 🛠 Tech Stack
- Runtime: Node.js 
- Web Framework: Express.js 
- Database: MySQL (Relational Database Management) 
- Tools: MySQL Workbench, Postman

 <img width="1700" height="610" alt="back_1" src="https://github.com/user-attachments/assets/712d7aa1-55d9-402e-b4d9-8cf26371c23d" />

## 📊 Database Architecture (ERD)
To ensure data integrity and scalability—key requirements for enterprise HR systems—I designed a normalized relational schema:

One-to-Many Relationship: Each department can host multiple employees, linked via dept_id as a Foreign Key.

Data Integrity: Implemented constraints to ensure unique emails and mandatory fields, mirroring real-world HR data validation rules.

## 🔌 API Documentation
The backend provides RESTful endpoints to interact with the HR data:

<img width="1110" height="140" alt="table" src="https://github.com/user-attachments/assets/f40cb589-e4e4-461b-ba4a-af914d726c49" />

## Key Technical Highlights

SQL Queries: Optimized data retrieval by crafting multi-table JOINs, reducing the need for multiple frontend requests.

Environment Security: Secured sensitive database credentials using dotenv and .env files (not tracked in Git).

Design-Centric Logic: Structured API responses to align with the UI components I previously designed for HR dashboards.




