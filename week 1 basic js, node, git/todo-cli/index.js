const readline = require("readline");
const { Client } = require("pg");
require("dotenv").config();

const dbPassword = process.env.DB_PASSWORD;

const con = new Client({
  host: "localhost",
  user: "postgres",
  database: "todo-db",
  port: 5432,
  password: dbPassword,
});

function showMenu() {
  console.log("\nTODO App");
  console.log("1. View Tasks");
  console.log("2. Add Task");
  console.log("3. Delete Task");
  console.log("4. Mark Task as Done");
  console.log("5. Exit");
}

function askQuestion(query) {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise(resolve =>
    rl.question(query, ans => {
      rl.close();
      resolve(ans);
    })
  );
}

async function main() {
  try {
    await con.connect();
    console.log("Connected to PostgreSQL");

    while (true) {
      showMenu();
      const choice = await askQuestion("Choose an option: ");

      if (choice === "1") {
        try {
          const res = await con.query("SELECT * FROM todo_table");
          if (res.rows.length === 0) {
            console.log("No tasks found.");
          } else {
            console.log("\nTasks:");
            res.rows.forEach((row, index) => {
              console.log(`${index + 1}. ${row.task}`);
            });
          }
        } catch (err) {
          console.error("Error fetching tasks:", err.message);
        }

      } else if (choice === "2") {
        const newTask = await askQuestion("Enter new task: ");
        try {
          await con.query("INSERT INTO todo_table (task) VALUES ($1)", [newTask]);
          console.log("Task inserted into database.");
        } catch (err) {
          console.error("Insert error:", err.message);
        }

      } else if (choice === "3") {
        try {
          const res = await con.query("SELECT * FROM todo_table");
          if (res.rows.length === 0) {
            console.log("No tasks to delete.");
            continue;
          }

          console.log("\nTasks:");
          res.rows.forEach((row, index) => {
            console.log(`${index + 1}. ${row.task}`);
          });

          const index = parseInt(await askQuestion("Enter task number to delete: "), 10);
          if (index > 0 && index <= res.rows.length) {
            const taskToDelete = res.rows[index - 1].task;
            await con.query("DELETE FROM todo_table WHERE task = $1", [taskToDelete]);
            console.log("Task deleted from database.");
          } else {
            console.log("Invalid task number.");
          }
        } catch (err) {
          console.error("Delete error:", err.message);
        }

      } else if (choice === "4") {
        try {
          const res = await con.query("SELECT * FROM todo_table");
          if (res.rows.length === 0) {
            console.log("No tasks to mark as done.");
            continue;
          }

          console.log("\nTasks:");
          res.rows.forEach((row, index) => {
            console.log(`${index + 1}. ${row.task}`);
          });

          const index = parseInt(await askQuestion("Enter task number to mark as done: "), 10);
          if (index > 0 && index <= res.rows.length) {
            let updatedTask = res.rows[index - 1].task;
            if (!updatedTask.includes("✔️")) {
              updatedTask += " ✔️";
              await con.query("UPDATE todo_table SET task = $1 WHERE task = $2", [updatedTask, res.rows[index - 1].task]);
              console.log("Task marked as done.");
            } else {
              console.log("Task already marked as done.");
            }
          } else {
            console.log("Invalid task number.");
          }
        } catch (err) {
          console.error("Update error:", err.message);
        }

      } else if (choice === "5") {
        console.log("Goodbye");
        break;
      } else {
        console.log("Invalid choice.");
      }
    }
  } catch (err) {
    console.error("Connection error:", err.message);
  } finally {
    await con.end();
    console.log("Database connection closed.");
  }
}

main();
