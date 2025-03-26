# SensAI-Career-Coach

**AI Career Coach is a powerful Next.js web application designed to supercharge your job search journey. It offers an AI-powered resume builder with customizable templates and a download button for easy access. Generate tailored cover letters with AI-suggested improvements based on your skills and industry.**

🎮 Live Demo - [Website Link](https://career-sensai.vercel.app/)

# ⚡️ Key Features:

✅ AI-Powered Resume Builder : 
- Create professional resumes with industry-standard formatting. 
- Download your resume with a one-click PDF download button.  
- AI-enhanced content to optimize wording and readability.  

📝 Cover Letter Generator
- Generate personalized cover letters based on your resume and job 
  description.
- AI improvements for better tone, structure, and impact.  
  
📊 Industry Insights
- **Market Outlook**: Get a comprehensive view of your industry's current 
and future job landscape.
- **Demand Level**: Understand the demand for your role and expertise in the market.  
- **Salary Ranges**:View average and competitive salary ranges for your skills and experience level through chart.
- **Key Industry Trends**: Stay updated with the latest trends and innovations shaping your industry.
- **Recommended Skills**: AI-suggested in-demand skills to improve your employability. 

🎯 Interview Preparation with Quizzes
- Get customized quizzes based on your selected skills and job role.
- Improve your technical and behavioral interview performance.
- **Recent Quizzes Average Score**: Track your average performance across all recent quizzes, helping you identify strengths and areas for improvement.

🔒 Authentication & Security
- **Clerk authentication** for secure and seamless sign-in/sign-up.
- User profiles and quiz results stored securely in **NeonDB**.

 # 🛠️ Tech Stack:
 - Frontend: Next.js, Tailwind CSS
 - Backend: Inngest for background jobs, NeonDB for database storage
 - AI Integration: Gemini API for smart content enhancements
 - Authentication: Clerk for user management.

##  🚀 How to Run the Project

### 🛠️ 1. Clone the Repository
```bash
git clone https://github.com/Riya-Sharma12/AI-Career-Coach.git
cd ai-career-coach
```
### 📦 2. Install Dependencies
```bash
npm install
```
### 🔑 3.  Set Up Environment Variables
Create a .env file in the root directory and add the following : 
```bash
NEXT_PUBLIC_CLERK_FRONTEND_API=<YOUR_CLERK_FRONTEND_KEY>
CLERK_API_KEY=<YOUR_CLERK_API_KEY>
DATABASE_URL=<YOUR_NEON_DB_CONNECTION_STRING>
NEXT_PUBLIC_GEMINI_API_KEY=<YOUR_GEMINI_API_KEY> 
```
### 🚀 4.  Start the Development Server
Create a .env file and add your Supabase credentials:
```bash
npm run dev 
```
