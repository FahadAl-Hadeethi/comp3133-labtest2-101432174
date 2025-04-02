# COMP3133 – Lab Test 2: SpaceX Mission Launch

## ✅ Overview

This Angular application displays SpaceX mission data using the public REST API.  
It includes:

- Mission list with cards showing full mission info
- Filter component to search by launch year, launch success, and landing success
- Dedicated mission details page
- Angular Material for UI styling
- Modular component structure (filter, list, details, dashboard)

## 🔧 Tech Stack

- Angular 17 (Standalone Components)
- Angular Material
- TypeScript
- HTML/CSS
- REST API (https://api.spacexdata.com/v3/launches)
- Git + GitHub
- Render (deployment)

## 🚀 Features

### 🔹 Mission List Component
Displays each mission with:
- Patch image
- Mission name & flight number
- Launch year, details
- Rocket name & type
- External links (article, Wikipedia, video)

### 🔹 Mission Filter Component
- Filter missions by launch year (live typing)
- Filter by launch success (successful/failed)
- Filter by landing success (successful/failed)
- Reset filters button

### 🔹 Mission Details Page
- Complete mission information
- Includes launch site, rocket info, and links
- Accessible via "View Details" button