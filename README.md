# HealthCare Web Application

It is a Next.js web application that simulates the process of patients booking their doctor in the hospital, In addition to managing these reservations

## Demo

[HealthCare App](https://healthcare-app-three.vercel.app/)

## Important Note

Please make sure to create database in [appwrite.io](https://appwrite.io/docs/) and make two collection for (patient, appointmment)
and (storage) for images

## Enviroment Variables

```javascript
PROJECT_ID=''
API_KEY=''
DB_ID=''
PATIENTS_COLLECTION=''
DOCTORS_COLLECTION=''
APPOINTMENT_COLLECTION=''
NEXT_PUBLIC_STORAGE_ID=''
NEXT_PUBLIC_ENDPOINT=''
NEXT_PUBLIC_ADMIN_PASSKEY=''
}
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/Hossam-alahmad/healthcare-app.git
```

Go to the project directory

```bash
  cd healthcare-app
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## Tech Stack

**Client:** Next js, Tailwindcss, shadcn/ui

**Server:** Next js

**Database:** appwrite.io
