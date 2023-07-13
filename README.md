# Poke-angular

Angular project for end-of-course exam

- EMANUELE MONCADA
- MIRKO AMATO
- SAMUEL SAMPERISI











  

# SERVER

## Installation

1. Clone the repository from your terminal:

   ```
   git clone https://github.com/ZeroWk-EM/Poke-Angular.git
   ```

2. Move into the server folder with `cd server`

3. Install the dependencies:

   ```
   npm install
   ```

4. Create `.env` file and set the required environment variables.

   ```
    // DEFAULT VAR
    PORT= // Port on which the application will be started
    MONGO_URL= // Mongo DB URL
    SECRET_KEY= // Secret key to sign the JWT toker
    // FOR SEND EMAIL
    SMPT_HOST= // Your hosting url
    SMPT_PORT= 465 // Is default in most client
    SMPT_USER= // Email of the account that will send the emails to the recipients
    SMPT_PASS= // Password of the account that will send the emails to the recipients
   ```

**NB.REMEMBER TO DELETE ALL COMMENTS INSIDE THE .ENV FILE**

5. Start the server:

- `npm run start` ==> start the server (set env variable for windows system) using the production database
- `npm run start:macos` ==> start the server (set env variable for unix system) using the production database
- `npm run dev` ==> start the server (set env variable for windows system) using the dev database
- `npm run dev:macos` ==> start the server (set env variable for unix system) using the dev database
