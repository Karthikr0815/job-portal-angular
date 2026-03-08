# Job Portal Application \uD83D\uDCBC

A modern, responsive, and fully functional Job Portal application built using **Angular 21** and **Angular Material**. This project features a mock REST API backend powered by **json-server** to simulate real-world data interactions like job browsing, applying for positions, and a protected company dashboard for posting new jobs.

---

## \u2728 Features

- **\uD83D\uDD0D Job Browsing:** View a comprehensive list of all available job postings with filtering capabilities.
- **\uD83D\uDCC4 Job Details:** Click into individual jobs to view in-depth details, descriptions, and requirements. Automatically tracks view counts.
- **\uD83D\uDCE4 Apply for Jobs:** Candidates can submit applications directly through the platform.
- **\uD83D\uDD12 Company Dashboard:** A protected route requiring authentication, allowing companies to manage their job listings.
- **\u2795 Post New Jobs:** Authorized companies can create and publish new job opportunities.
- **\uD83C\uDFA8 Modern UI/UX:** Styled comprehensively with Angular Material components and custom SCSS for a clean, responsive design.

---

## \uD83D\uDEE0\uFE0F Technology Stack

- **Frontend Framework:** [Angular](https://angular.dev/) (v21.1.0)
- **UI Component Library:** [Angular Material](https://material.angular.io/)
- **Mock Backend Server:** [json-server](https://github.com/typicode/json-server)
- **Styling:** SCSS
- **Testing:** [Vitest](https://vitest.dev/)

---

## \uD83D\uDE80 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure you have the following installed on your system:
- **Node.js** (v18.x or higher)
- **npm** (Node Package Manager)
- **Angular CLI** (`npm install -g @angular/cli`)

### Installation

1. **Clone the repository** (or download the project folder):
   ```bash
   git clone <your-repo-url>
   cd job-portal
   ```

2. **Install frontend dependencies:**
   ```bash
   npm install
   ```

---

## \uD83D\uDCBB How to Run the Project Local\u2B50

To run this project fully, you need to start **both** the mock backend server and the Angular frontend development server simultaneously.

### Step 1: Start the Mock Database Server
Open a terminal in the project root directory (`job-portal`) and run the following command to start the `json-server`. This will serve the data from `db.json` on `http://localhost:3000`.

```bash
npm run server
```

### Step 2: Start the Angular Frontend
Open a **new, second terminal window** in the same project root directory and run the Angular development server:

```bash
npm start
```
*(Alternatively, you can run `ng serve` directly)*

### Step 3: View the Application
Once both servers are running, open your web browser and navigate to:
```
http://localhost:4200/
```
The application will automatically reload if you change any of the source files.

---

## \uD83D\uDCC2 Project Structure Highlights

- `src/app/components/`: Contains all the UI views (`job-list`, `job-detail`, `apply-job`, `company-dashboard`, `post-job`, `login`).
- `src/app/services/`: Contains the services (`job.service`, `applicant.service`, `company.service`) responsible for HTTP calls to the `json-server`.
- `db.json`: The mock database containing seeded jobs, companies, and applications.
- `app.routes.ts`: Defines the application's routing map and guards.

---

## \uD83D\uDEE0\uFE0F Additional Commands

- **Build for Production:** `npm run build` (Outputs to the `dist/` directory)
- **Run Unit Tests:** `npm run test` (Executes tests using Vitest)
