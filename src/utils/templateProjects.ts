const templateContent = { 
  counter: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Counter App</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            text-align: center; 
            padding: 50px;
            background: linear-gradient(135deg, #74b9ff, #0984e3);
            min-height: 100vh;
            margin: 0;
            color: white;
        }
        .container {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            padding: 40px;
            border-radius: 20px;
            display: inline-block;
            border: 1px solid rgba(255,255,255,0.2);
            box-shadow: 0 8px 32px rgba(0,0,0,0.3);
        }
        .counter { 
            font-size: 4em; 
            margin: 30px; 
            font-weight: bold;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }
        button { 
            font-size: 1.5em; 
            margin: 15px; 
            padding: 15px 30px;
            border: none;
            border-radius: 50px;
            background: rgba(255,255,255,0.2);
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            backdrop-filter: blur(5px);
            border: 1px solid rgba(255,255,255,0.3);
        }
        button:hover { 
            transform: translateY(-3px);
            box-shadow: 0 10px 25px rgba(0,0,0,0.3);
            background: rgba(255,255,255,0.3);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🔢 Counter App</h1>
        <div class="counter" id="counter">0</div>
        <div>
            <button onclick="increment()">➕ Add</button>
            <button onclick="decrement()">➖ Subtract</button>
            <button onclick="reset()">🔄 Reset</button>
        </div>
    </div>
    
    <script>
        let count = 0;
        function increment() { 
            count++;
            updateCounter();
            celebrate();
        }
        function decrement() { 
            count--;
            updateCounter();
        }
        function reset() { 
            count = 0; 
            updateCounter();
        }
        function updateCounter() {
            const counter = document.getElementById('counter');
            counter.textContent = count;
            counter.style.color = count > 0 ? '#00ff88' : count < 0 ? '#ff4757' : 'white';
        }
        function celebrate() {
            if (count % 10 === 0 && count > 0) {
                document.body.style.animation = 'pulse 0.5s ease-in-out';
                setTimeout(() => document.body.style.animation = '', 500);
            }
        }
    </script>
</body>
</html>`,
  
  todo: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Todo List</title>
    <style>
        body { 
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            max-width: 800px; 
            margin: 0 auto; 
            padding: 20px;
            background: linear-gradient(135deg, #a8edea, #fed6e3);
            min-height: 100vh;
        }
        .container {
            background: white;
            padding: 30px;
            border-radius: 20px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }
        h1 {
            color: #2d3436;
            text-align: center;
            margin-bottom: 30px;
        }
        .input-group {
            display: flex;
            gap: 10px;
            margin-bottom: 30px;
        }
        input[type="text"] { 
            flex: 1;
            padding: 15px; 
            border: 2px solid #ddd;
            border-radius: 10px;
            font-size: 16px;
        }
        input[type="text"]:focus {
            outline: none;
            border-color: #74b9ff;
        }
        button { 
            padding: 15px 25px;
            background: linear-gradient(45deg, #74b9ff, #0984e3);
            color: white;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            font-weight: bold;
            transition: transform 0.2s;
        }
        button:hover {
            transform: translateY(-2px);
        }
        ul { 
            list-style: none; 
            padding: 0; 
        }
        li { 
            padding: 15px; 
            margin: 10px 0; 
            background: #f8f9fa;
            border-radius: 10px;
            border-left: 4px solid #74b9ff;
            display: flex;
            justify-content: space-between;
            align-items: center;
            transition: all 0.3s ease;
        }
        li:hover {
            transform: translateX(5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        .delete-btn {
            background: #ff7675;
            padding: 5px 10px;
            font-size: 12px;
            border-radius: 5px;
        }
        .completed {
            text-decoration: line-through;
            opacity: 0.6;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>📝 Todo List</h1>
        <div class="input-group">
            <input type="text" id="todoInput" placeholder="What needs to be done?">
            <button onclick="addTodo()">✅ Add Task</button>
        </div>
        <ul id="todoList"></ul>
        <div style="text-align: center; margin-top: 20px; color: #636e72;">
            <span id="taskCount">0 tasks remaining</span>
        </div>
    </div>
    
    <script>
        let todos = [];
        let todoId = 0;
        
        function addTodo() {
            const input = document.getElementById('todoInput');
            const list = document.getElementById('todoList');
            if (input.value.trim()) {
                const todo = {
                    id: todoId++,
                    text: input.value.trim(),
                    completed: false
                };
                todos.push(todo);
                renderTodos();
                input.value = '';
                updateTaskCount();
            }
        }
        
        function toggleTodo(id) {
            todos = todos.map(todo => 
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            );
            renderTodos();
            updateTaskCount();
        }
        
        function deleteTodo(id) {
            todos = todos.filter(todo => todo.id !== id);
            renderTodos();
            updateTaskCount();
        }
        
        function renderTodos() {
            const list = document.getElementById('todoList');
            list.innerHTML = todos.map(todo => \`
                <li class="\${todo.completed ? 'completed' : ''}">
                    <span onclick="toggleTodo(\${todo.id})" style="cursor: pointer; flex: 1;">
                        \${todo.completed ? '✅' : '⭕'} \${todo.text}
                    </span>
                    <button class="delete-btn" onclick="deleteTodo(\${todo.id})">🗑️ Delete</button>
                </li>
            \`).join('');
        }
        
        function updateTaskCount() {
            const count = todos.filter(todo => !todo.completed).length;
            document.getElementById('taskCount').textContent = \`\${count} task\${count !== 1 ? 's' : ''} remaining\`;
        }
        
        document.getElementById('todoInput').addEventListener('keypress', function(e) {
            if (e.key === 'Enter') addTodo();
        });
    </script>
</body>
</html>`,
  
  calculator: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculator</title>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: linear-gradient(135deg, #667eea, #764ba2);
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            margin: 0;
        }
        .calculator {
            background: rgba(255,255,255,0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
            border: 1px solid rgba(255,255,255,0.2);
        }
        .display {
            width: 100%;
            height: 80px;
            font-size: 2em;
            text-align: right;
            padding: 20px;
            margin-bottom: 20px;
            border: none;
            border-radius: 10px;
            background: rgba(0,0,0,0.2);
            color: white;
            box-sizing: border-box;
        }
        .buttons {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 15px;
        }
        button {
            height: 60px;
            font-size: 1.2em;
            border: none;
            border-radius: 10px;
            cursor: pointer;
            transition: all 0.2s;
            font-weight: bold;
        }
        .number, .decimal {
            background: rgba(255,255,255,0.2);
            color: white;
        }
        .operator {
            background: linear-gradient(45deg, #ff6b6b, #ee5a52);
            color: white;
        }
        .equals {
            background: linear-gradient(45deg, #00b894, #00a085);
            color: white;
        }
        .clear {
            background: linear-gradient(45deg, #fdcb6e, #e17055);
            color: white;
        }
        button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        }
    </style>
</head>
<body>
    <div class="calculator">
        <input type="text" class="display" id="display" readonly>
        <div class="buttons">
            <button class="clear" onclick="clearDisplay()">C</button>
            <button class="clear" onclick="clearEntry()">CE</button>
            <button class="operator" onclick="appendToDisplay('/')">/</button>
            <button class="operator" onclick="appendToDisplay('*')">×</button>
            
            <button class="number" onclick="appendToDisplay('7')">7</button>
            <button class="number" onclick="appendToDisplay('8')">8</button>
            <button class="number" onclick="appendToDisplay('9')">9</button>
            <button class="operator" onclick="appendToDisplay('-')">-</button>
            
            <button class="number" onclick="appendToDisplay('4')">4</button>
            <button class="number" onclick="appendToDisplay('5')">5</button>
            <button class="number" onclick="appendToDisplay('6')">6</button>
            <button class="operator" onclick="appendToDisplay('+')">+</button>
            
            <button class="number" onclick="appendToDisplay('1')">1</button>
            <button class="number" onclick="appendToDisplay('2')">2</button>
            <button class="number" onclick="appendToDisplay('3')">3</button>
            <button class="equals" onclick="calculate()" rowspan="2">=</button>
            
            <button class="number" onclick="appendToDisplay('0')" style="grid-column: span 2;">0</button>
            <button class="decimal" onclick="appendToDisplay('.')">.</button>
        </div>
    </div>
    
    <script>
        let display = document.getElementById('display');
        let currentInput = '';
        
        function appendToDisplay(value) {
            if (display.value === '0' && value !== '.') {
                display.value = value;
            } else {
                display.value += value;
            }
            currentInput = display.value;
        }
        
        function clearDisplay() {
            display.value = '0';
            currentInput = '';
        }
        
        function clearEntry() {
            display.value = display.value.slice(0, -1) || '0';
            currentInput = display.value;
        }
        
        function calculate() {
            try {
                let result = eval(display.value.replace('×', '*'));
                display.value = result;
                currentInput = result.toString();
            } catch (error) {
                display.value = 'Error';
                setTimeout(() => {
                    display.value = '0';
                    currentInput = '';
                }, 1500);
            }
        }
        
        // Keyboard support
        document.addEventListener('keydown', function(event) {
            const key = event.key;
            if (/[0-9.]/.test(key)) {
                appendToDisplay(key);
            } else if (['+', '-', '*', '/'].includes(key)) {
                appendToDisplay(key === '*' ? '×' : key);
            } else if (key === 'Enter' || key === '=') {
                calculate();
            } else if (key === 'Escape') {
                clearDisplay();
            } else if (key === 'Backspace') {
                clearEntry();
            }
        });
    </script>
</body>
</html>`
};

export const templates = [
  {
    id: 'counter',
    title: 'Counter Application',
    description: 'Simple counter with increment, decrement, and reset functionality',
    features: [
      'Increment and decrement buttons',
      'Visual feedback with color changes',
      'Celebration effects on milestones',
      'Clean, responsive design'
    ],
    content: templateContent.counter
  },
  {
    id: 'todo',
    title: 'Todo List',
    description: 'Task management app with add, complete, and delete functionality',
    features: [
      'Add new tasks with enter key support',
      'Mark tasks as complete',
      'Delete unwanted tasks',
      'Task counter with remaining items'
    ],
    content: templateContent.todo
  },
  {
    id: 'calculator',
    title: 'Interactive Calculator',
    description: 'Fully functional calculator with keyboard support',
    features: [
      'Basic arithmetic operations',
      'Clear and clear entry functions',
      'Keyboard input support',
      'Error handling for invalid calculations'
    ],
    content: templateContent.calculator
  }
];

export const getTemplate = (template: string): string => {
  const found = templates.find(t => t.id === template);
  return found ? found.content : templateContent.calculator;
};
