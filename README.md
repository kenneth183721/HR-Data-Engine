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
  

## 📊 Database Architecture (ERD)
To ensure data integrity and scalability—key requirements for enterprise HR systems—I designed a normalized relational schema:

One-to-Many Relationship: Each department can host multiple employees, linked via dept_id as a Foreign Key.

Data Integrity: Implemented constraints to ensure unique emails and mandatory fields, mirroring real-world HR data validation rules.

## 🔌 API Documentation
The backend provides RESTful endpoints to interact with the HR data:



