# 🚀 MERN App with CI/CD on AWS

![Build Status](https://img.shields.io/github/actions/workflow/status//mern-devops-app/ci.yml?branch=main)
![Docker](https://img.shields.io/badge/Docker-Containerized-blue)
![AWS](https://img.shields.io/badge/AWS-EC2-orange)
![CI/CD](https://img.shields.io/badge/CI%2FCD-GitHub%20Actions-success)
![License](https://img.shields.io/github/license/DevOpswithDevik/mern-devops-app)

A **production-ready end-to-end MERN application** deployed on **AWS EC2** using **Docker**, **GitHub Actions CI/CD**, and **Nginx reverse proxy**.

This project demonstrates **real-world DevOps practices** including containerization, CI pipelines, cloud deployment, and production hardening.

## Project Structure

mern-devops-app/
│
├── backend/
├── frontend/
├── docker-compose.yml
├── .github/workflows/ci.yml
└── README.md

---


## ✨ Key Features
- Full-stack **MERN** application
- Dockerized frontend & backend
- Automated **CI pipeline using GitHub Actions**
- Deployed on **AWS EC2**
- **Nginx reverse proxy** (no exposed ports)
- Secure environment variable management
- Health check API for monitoring

---

## 🛠️ Tech Stack

### Frontend
- React
- Axios

### Backend
- Node.js
- Express
- MongoDB (Atlas)

### DevOps & Cloud
- Docker & Docker Compose
- GitHub Actions (CI)
- AWS EC2 (Ubuntu)
- Nginx
- Linux

---

## 🏗️ Architecture Overview

User
↓
Nginx (EC2)
↓
React Frontend (Docker)
↓
Node.js API (Docker)
↓
MongoDB Atlas

---

## ⚙️ CI/CD Workflow

Git Push
↓
GitHub Actions
↓
Build Frontend & Backend
↓
Docker Image Build
↓
Ready for Deployment

---

## 🚀 Deployment

### 1️⃣ Clone Repository
```bash
git clone https://github.com/DevOpswithDevik/mern-devops-app.git
cd mern-devops-app

2️⃣ Configure Environment Variables

Create .env inside backend/

PORT=5000
MONGO_URI=your_mongodb_atlas_uri
NODE_ENV=production

3️⃣ Run with Docker
docker compose up -d --build

4️⃣ Access Application
http://<EC2_PUBLIC_IP>

🧪 Health Check
GET /api/health


Response:

{ "status": "API is running fine" }

🔐 Security Practices

Secrets managed via .env

No hard-coded credentials

Only ports 22 & 80 exposed

Backend protected behind Nginx