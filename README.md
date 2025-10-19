# Mocha API Automation Testing

## Overview

Automated testing framework for ReqRes API using Mocha, Chai, and Mochawesome reporting.

## Technology Stack

- **Mocha** - JavaScript test framework for Node.js applications
- **Chai** - Behavior-driven development (BDD) assertion library
- **Mochawesome** - Professional HTML and JSON reporting solution
- **Node.js** - JavaScript runtime environment
- **ReqRes API** - RESTful API service for testing purposes (https://reqres.in)

## Project Structure

```
tests/
├── createUser.js
├── getUser.js
├── updateUser.js
└── deleteUser.js
images/
└── test-report.png
```

## System Requirements

### Prerequisites

- Node.js version 14.0 or higher
- npm (Node Package Manager)
- Internet connectivity for API endpoint access

### Installation Instructions

1. Clone the repository to your local environment:

```bash
git clone <repository-url>
cd mocha_api_automation
```

2. Install project dependencies:

```bash
npm install
```

## Test Execution

### Complete Test Suite Execution

```bash
npm run tests
```

### Individual Test Module Execution

```bash
# User creation functionality tests
npm run tests:createUser

# User retrieval functionality tests
npm run tests:getUser

# User modification functionality tests
npm run tests:updateUser

# User deletion functionality tests
npm run tests:deleteUser
```

## Test Results

**7 tests passed - 100% success rate**

| Method | Test Case          | Endpoint            | Status |
| ------ | ------------------ | ------------------- | ------ |
| POST   | Create User        | `/api/users`        | PASS   |
| GET    | Get Multiple Users | `/api/users?page=2` | PASS   |
| GET    | Get Single User    | `/api/users/2`      | PASS   |
| GET    | Invalid User ID    | `/api/users/elsa`   | PASS   |
| PATCH  | Update User        | `/api/users/2`      | PASS   |
| DELETE | Delete User        | `/api/users/2`      | PASS   |
| DELETE | Invalid API Key    | `/api/users/`       | PASS   |

## Reports

Open `mochawesome-report/mochawesome.html` in browser for detailed results.

## Screenshots

![HTML Test Results](./images/test-report.png)
