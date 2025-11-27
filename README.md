
# Sprint Log & Analytics App (SLAA)

## Project Description
A web application for athletes and coaches to log workouts, track performance, and receive AI-generated summaries and recommendations.

## Problem It Solves
Athletes and coaches struggle to track progress and analyze trends over time. This app simplifies logging, analytics, and AI insight generation.

## Target Users
- College and professional athletes
- Coaches managing multiple athletes

## Core Features
- Log sprint workouts and training sessions
- Visual dashboard with graphs and stats
- AI-generated weekly summaries
- Coach leaderboard

## Technology Stack
- **Frontend:** React + Tailwind CSS
- **Backend:** Python (Flask/FastAPI)
- **Database:** PostgreSQL
- **AI Integration:** OpenAI API
- **Deployment:** Docker + docker-compose, Google Cloud Platform

## Getting Started
1. Clone the repository: `git clone https://github.com/trevonhouston03/sprint-log-analytics-app.git`
2. Install dependencies: `pip install -r requirements.txt` (backend), `npm install` (frontend)
3. Set up environment variables: `cp .env.example .env`
4. Start the app: `docker-compose up`

## AI Integration
The app uses OpenAI GPT to generate weekly summaries of athlete performance and drill recommendations based on logged workouts.