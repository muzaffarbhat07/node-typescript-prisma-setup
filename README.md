1. npm init

2. npm i express

3. npm i typescript ts-node @types/node @types/express -D

4. npx tsc --init

5. create nodemon.json
  ```
  {
    "watch": ["src"],
    "ext": ".ts,.js",
    "exec": "ts-node src/server.ts"
  }
  ```

6. add start and dev scripts
  ```
  "start": "npx ts-node src/server.ts",
  "dev": "npx nodemon"
  ```

7. npm install prisma -D

8. npx prisma init

9. update the DATABASE_URL

10. define a schema

11. npx prisma migrate dev --name <migration_name>

12. npx prisma studio // to visualize

13. create prisma client
