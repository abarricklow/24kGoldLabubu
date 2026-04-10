# AGGIE TIMEBANK!


Requirements: 

npm  
    https://nodejs.org/en/download
mysql workbench 
    https://dev.mysql.com/downloads/installer/


How to run and install dependencies:

expo 
    npx expo install 

create a 'timebank' schema db in mysql


mysql connector 
    pip install mysql-connector-python

run database script 
    COMMAND

run 
    npx expo start



# Aggie TimeBank Setup

## Requirements

* Install Docker Desktop

## Setup Instructions

1. Clone the repo:

```
git clone <repo-url>
cd AggieTimeBank
```

2. Start the system:

```
docker compose up --build
```

3. Done ✅

The database will:

* Start automatically
* Be seeded with test data

## Reset Database

To wipe and reseed:

```
docker compose down -v
docker compose up --build
```
