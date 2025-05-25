const fs = require('fs');
const readline = require('readline-sync');
const { fileURLToPath } = require('url');

const filepath = './tasks.json';

// load tasks from file
function loadTasks() {
    if(!fs.existsSync(filepath)) return [];
    const data = fs.readFileSync(filepath, 'utf8');
    return JSON.parse(data || '[]');
}

// Save tasks to file
function saveTasks(tasks) {
    fs.writeFileSync(filepath, JSON.stringify(tasks, null, 2));
}

// Show menu
function showMenu() {
  console.log('\nTODO App');
  console.log('1. View Tasks');
  console.log('2. Add Task');
  console.log('3. Delete Task');
  console.log('4. Mark Task as Done');
  console.log('5. Exit');
}

// Main function
function main() {
  let tasks = loadTasks();

  while (true) {
    showMenu();
    const choice = readline.question('Choose an option: ');

    if (choice === '1') {
      console.log('\nTasks:');
      tasks.forEach((task, index) => {
        console.log(`${index + 1}. ${task}`);
      });
    } else if (choice === '2') {
      const newTask = readline.question('Enter new task: ');
      tasks.push(newTask);
      saveTasks(tasks);
      console.log('Task added.');
    } else if (choice === '3') {
      const index = readline.questionInt('Enter task number to delete: ');
      if (index > 0 && index <= tasks.length) {
        tasks.splice(index - 1, 1);
        saveTasks(tasks);
        console.log('Task deleted.');
      } else {
        console.log('Invalid task number.');
      }
    } else if (choice === '4') {
        const index = readline.questionInt('Enter task number to mark done: ');
        if (index > 0 && index <= tasks.length) {
            tasks[index - 1] += ' ✔️';
            saveTasks(tasks);
            console.log('Task marked as done.');
        }
    } else if(choice === '5') {
        console.log("Goodbye");
        break;
    }
  }
}

main();