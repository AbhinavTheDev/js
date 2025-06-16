export const componentProjects = [
  {
    id: 'button',
    title: 'Interactive Button',
    description: 'Customizable button with hover effects and animations',
    features: [
      'Multiple button styles',
      'Hover animations',
      'Click effects',
      'Customizable colors'
    ],
    code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Button Component</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            margin: 0;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
        
        .container {
            background: white;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            text-align: center;
        }
        
        h1 {
            color: #333;
            margin-bottom: 30px;
        }
        
        .button-group {
            display: flex;
            flex-wrap: wrap;
            gap: 20px;
            justify-content: center;
        }
        
        .btn {
            padding: 12px 24px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            position: relative;
            overflow: hidden;
        }
        
        .btn-primary {
            background: #3b82f6;
            color: white;
        }
        
        .btn-primary:hover {
            background: #2563eb;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(59, 130, 246, 0.3);
        }
        
        .btn-success {
            background: #10b981;
            color: white;
        }
        
        .btn-success:hover {
            background: #059669;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(16, 185, 129, 0.3);
        }
        
        .btn-danger {
            background: #ef4444;
            color: white;
        }
        
        .btn-danger:hover {
            background: #dc2626;
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(239, 68, 68, 0.3);
        }
        
        .btn-outline {
            background: transparent;
            color: #3b82f6;
            border: 2px solid #3b82f6;
        }
        
        .btn-outline:hover {
            background: #3b82f6;
            color: white;
            transform: translateY(-2px);
        }
        
        .btn:active {
            transform: translateY(0);
        }
        
        .btn::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
        }
        
        .btn:active::before {
            width: 300px;
            height: 300px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Interactive Button Component</h1>
        <div class="button-group">
            <button class="btn btn-primary" onclick="handleClick('Primary')">Primary Button</button>
            <button class="btn btn-success" onclick="handleClick('Success')">Success Button</button>
            <button class="btn btn-danger" onclick="handleClick('Danger')">Danger Button</button>
            <button class="btn btn-outline" onclick="handleClick('Outline')">Outline Button</button>
        </div>
        <div id="message" style="margin-top: 20px; font-weight: bold; color: #333;"></div>
    </div>

    <script>
        function handleClick(type) {
            const messageEl = document.getElementById('message');
            messageEl.textContent = type + ' button clicked!';
            messageEl.style.color = getButtonColor(type);
            
            setTimeout(() => {
                messageEl.textContent = '';
            }, 2000);
        }
        
        function getButtonColor(type) {
            switch(type) {
                case 'Primary': return '#3b82f6';
                case 'Success': return '#10b981';
                case 'Danger': return '#ef4444';
                case 'Outline': return '#3b82f6';
                default: return '#333';
            }
        }
    </script>
</body>
</html>
    `
  },
  {
    id: 'terminal',
    title: 'Interactive Terminal',
    description: 'Command-line interface with editable commands',
    features: [
      'Command input/output',
      'Command history',
      'Multiple built-in commands',
      'Typing animation'
    ],
    code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Terminal</title>
    <style>
        body {
            margin: 0;
            padding: 20px;
            background: #1a1a1a;
            font-family: 'Courier New', monospace;
            color: #00ff00;
            min-height: 100vh;
        }
        
        .terminal {
            background: #000;
            border-radius: 10px;
            padding: 20px;
            max-width: 800px;
            margin: 0 auto;
            box-shadow: 0 0 30px rgba(0, 255, 0, 0.2);
            border: 1px solid #333;
        }
        
        .terminal-header {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid #333;
        }
        
        .terminal-button {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }
        
        .close { background: #ff5f56; }
        .minimize { background: #ffbd2e; }
        .maximize { background: #27ca3f; }
        
        .terminal-content {
            min-height: 400px;
            font-size: 14px;
            line-height: 1.5;
        }
        
        .prompt {
            color: #00ff00;
        }
        
        .command {
            color: #ffffff;
        }
        
        .output {
            color: #cccccc;
            margin-bottom: 10px;
        }
        
        .input-line {
            display: flex;
            align-items: center;
        }
        
        #commandInput {
            background: transparent;
            border: none;
            color: #ffffff;
            font-family: inherit;
            font-size: inherit;
            outline: none;
            flex: 1;
            margin-left: 5px;
        }
        
        .cursor {
            animation: blink 1s infinite;
        }
        
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        
        .error {
            color: #ff6b6b;
        }
        
        .success {
            color: #51cf66;
        }
    </style>
</head>
<body>
    <div class="terminal">
        <div class="terminal-header">
            <div class="terminal-button close"></div>
            <div class="terminal-button minimize"></div>
            <div class="terminal-button maximize"></div>
        </div>
        <div class="terminal-content">
            <div class="output">Welcome to Interactive Terminal v1.0</div>
            <div class="output">Type 'help' for available commands</div>
            <div class="output">─────────────────────────────────────</div>
            <div id="history"></div>
            <div class="input-line">
                <span class="prompt">user@terminal:~$</span>
                <input type="text" id="commandInput" autofocus>
                <span class="cursor">|</span>
            </div>
        </div>
    </div>

    <script>
        const commandInput = document.getElementById('commandInput');
        const history = document.getElementById('history');
        let commandHistory = [];
        let historyIndex = -1;

        const commands = {
            help: () => {
                return \`Available commands:
  help      - Show this help message
  clear     - Clear the terminal
  date      - Show current date and time
  echo      - Echo back the message
  whoami    - Show current user
  ls        - List directory contents
  pwd       - Show current directory
  history   - Show command history\`;
            },
            clear: () => {
                history.innerHTML = '';
                return '';
            },
            date: () => {
                return new Date().toString();
            },
            echo: (args) => {
                return args.join(' ');
            },
            whoami: () => {
                return 'user';
            },
            ls: () => {
                return 'Documents  Downloads  Pictures  Videos  terminal.html';
            },
            pwd: () => {
                return '/home/user';
            },
            history: () => {
                return commandHistory.map((cmd, i) => \`\${i + 1}  \${cmd}\`).join('\\n');
            }
        };

        commandInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const command = commandInput.value.trim();
                if (command) {
                    executeCommand(command);
                    commandHistory.push(command);
                    historyIndex = commandHistory.length;
                }
                commandInput.value = '';
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                if (historyIndex > 0) {
                    historyIndex--;
                    commandInput.value = commandHistory[historyIndex];
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                if (historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                    commandInput.value = commandHistory[historyIndex];
                } else {
                    historyIndex = commandHistory.length;
                    commandInput.value = '';
                }
            }
        });

        function executeCommand(input) {
            const parts = input.split(' ');
            const command = parts[0].toLowerCase();
            const args = parts.slice(1);

            // Add command to history display
            const commandLine = document.createElement('div');
            commandLine.innerHTML = \`<span class="prompt">user@terminal:~$</span> <span class="command">\${input}</span>\`;
            history.appendChild(commandLine);

            // Execute command
            let output = '';
            if (commands[command]) {
                try {
                    output = commands[command](args);
                } catch (error) {
                    output = \`Error: \${error.message}\`;
                }
            } else {
                output = \`Command not found: \${command}. Type 'help' for available commands.\`;
            }

            if (output) {
                const outputDiv = document.createElement('div');
                outputDiv.className = 'output';
                outputDiv.style.whiteSpace = 'pre-line';
                if (output.includes('Error:') || output.includes('Command not found:')) {
                    outputDiv.className += ' error';
                }
                outputDiv.textContent = output;
                history.appendChild(outputDiv);
            }

            // Scroll to bottom
            history.scrollTop = history.scrollHeight;
        }

        // Keep input focused
        document.addEventListener('click', () => {
            commandInput.focus();
        });
    </script>
</body>
</html>
    `
  },
  {
    id: 'navbar',
    title: 'Responsive Navbar',
    description: 'Modern navigation bar with responsive design',
    features: [
      'Responsive design',
      'Mobile menu toggle',
      'Smooth animations',
      'Active state indicators'
    ],
    code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Responsive Navbar</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
        }

        .navbar {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
        }

        .nav-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 2rem;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .nav-logo {
            font-size: 1.5rem;
            font-weight: bold;
            color: #333;
            text-decoration: none;
        }

        .nav-menu {
            display: flex;
            list-style: none;
            gap: 2rem;
        }

        .nav-link {
            text-decoration: none;
            color: #333;
            font-weight: 500;
            transition: all 0.3s ease;
            position: relative;
            padding: 0.5rem 1rem;
            border-radius: 8px;
        }

        .nav-link:hover {
            color: #667eea;
            background: rgba(102, 126, 234, 0.1);
            transform: translateY(-2px);
        }

        .nav-link.active {
            color: #667eea;
            background: rgba(102, 126, 234, 0.15);
        }

        .hamburger {
            display: none;
            flex-direction: column;
            cursor: pointer;
            padding: 0.5rem;
        }

        .bar {
            width: 25px;
            height: 3px;
            background: #333;
            margin: 3px 0;
            transition: 0.3s;
            border-radius: 3px;
        }

        @media (max-width: 768px) {
            .nav-menu {
                position: fixed;
                left: -100%;
                top: 70px;
                flex-direction: column;
                background: rgba(255, 255, 255, 0.95);
                backdrop-filter: blur(10px);
                width: 100%;
                text-align: center;
                transition: 0.3s;
                box-shadow: 0 10px 27px rgba(0, 0, 0, 0.05);
                padding: 2rem 0;
                gap: 0;
            }

            .nav-menu.active {
                left: 0;
            }

            .nav-menu li {
                margin: 1rem 0;
            }

            .hamburger {
                display: flex;
            }

            .hamburger.active .bar:nth-child(2) {
                opacity: 0;
            }

            .hamburger.active .bar:nth-child(1) {
                transform: translateY(8px) rotate(45deg);
            }

            .hamburger.active .bar:nth-child(3) {
                transform: translateY(-8px) rotate(-45deg);
            }
        }

        .content {
            max-width: 1200px;
            margin: 4rem auto;
            padding: 0 2rem;
            text-align: center;
            color: white;
        }

        .content h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
        }

        .content p {
            font-size: 1.2rem;
            opacity: 0.9;
            max-width: 600px;
            margin: 0 auto;
            line-height: 1.6;
        }

        .demo-section {
            background: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            margin: 2rem auto;
            padding: 2rem;
            border-radius: 15px;
            max-width: 800px;
        }
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="nav-container">
            <a href="#" class="nav-logo">Brand</a>
            <ul class="nav-menu">
                <li><a href="#" class="nav-link active" data-page="home">Home</a></li>
                <li><a href="#" class="nav-link" data-page="about">About</a></li>
                <li><a href="#" class="nav-link" data-page="services">Services</a></li>
                <li><a href="#" class="nav-link" data-page="portfolio">Portfolio</a></li>
                <li><a href="#" class="nav-link" data-page="contact">Contact</a></li>
            </ul>
            <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </div>
        </div>
    </nav>

    <div class="content">
        <h1>Responsive Navbar</h1>
        <div class="demo-section">
            <p>This is a fully responsive navigation bar with smooth animations and mobile menu functionality. Try resizing your browser window or clicking the menu items to see it in action!</p>
        </div>
        <div id="current-page" style="margin-top: 2rem; font-size: 1.1rem; font-weight: bold;">
            Current Page: Home
        </div>
    </div>

    <script>
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');
        const currentPageDisplay = document.getElementById('current-page');

        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                // Remove active class from all links
                navLinks.forEach(l => l.classList.remove('active'));
                
                // Add active class to clicked link
                link.classList.add('active');
                
                // Update current page display
                const pageName = link.getAttribute('data-page');
                currentPageDisplay.textContent = \`Current Page: \${pageName.charAt(0).toUpperCase() + pageName.slice(1)}\`;
                
                // Close mobile menu if open
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    </script>
</body>
</html>
    `
  },
  {
    id: 'hamburger-menu',
    title: 'Hamburger Menu',
    description: 'Smooth hamburger menus',
    features: [
      'Multiple animation styles',
      'Smooth transitions',
      'Customizable design',
      'Mobile-friendly'
    ],
    code: `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Animated Hamburger Menu</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(45deg, #667eea, #764ba2);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: 2rem;
        }

        .container {
            background: white;
            padding: 3rem;
            border-radius: 20px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
            text-align: center;
            max-width: 600px;
            width: 100%;
        }

        h1 {
            color: #333;
            margin-bottom: 2rem;
            font-size: 2rem;
        }

        .menu-showcase {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 2rem;
            margin: 2rem 0;
        }

        .menu-item {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
        }

        .menu-label {
            font-weight: 600;
            color: #555;
            font-size: 0.9rem;
        }

        /* Basic Hamburger */
        .hamburger {
            cursor: pointer;
            padding: 15px;
            display: inline-block;
            background: #667eea;
            border-radius: 10px;
            transition: background 0.3s ease;
        }

        .hamburger:hover {
            background: #5a67d8;
        }

        .hamburger-line {
            width: 30px;
            height: 3px;
            background: white;
            margin: 6px 0;
            transition: 0.4s;
            border-radius: 3px;
        }

        /* Style 1: Basic Cross */
        .hamburger1.active .hamburger-line:nth-child(1) {
            transform: rotate(-45deg) translate(-9px, 6px);
        }

        .hamburger1.active .hamburger-line:nth-child(2) {
            opacity: 0;
        }

        .hamburger1.active .hamburger-line:nth-child(3) {
            transform: rotate(45deg) translate(-8px, -8px);
        }

        /* Style 2: Arrow */
        .hamburger2.active .hamburger-line:nth-child(1) {
            transform: rotate(-135deg) translate(-3px, -3px);
        }

        .hamburger2.active .hamburger-line:nth-child(2) {
            transform: rotate(135deg) translate(-3px, 3px);
        }

        .hamburger2.active .hamburger-line:nth-child(3) {
            transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Style 3: Spin */
        .hamburger3 {
            transition: transform 0.4s ease;
        }

        .hamburger3.active {
            transform: rotate(180deg);
        }

        .hamburger3.active .hamburger-line:nth-child(1) {
            transform: rotate(-45deg) translate(-9px, 6px);
        }

        .hamburger3.active .hamburger-line:nth-child(2) {
            opacity: 0;
        }

        .hamburger3.active .hamburger-line:nth-child(3) {
            transform: rotate(45deg) translate(-8px, -8px);
        }

        /* Style 4: Elastic */
        .hamburger4 .hamburger-line {
            transition: all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }

        .hamburger4.active .hamburger-line:nth-child(1) {
            transform: rotate(-45deg) translate(-9px, 6px);
        }

        .hamburger4.active .hamburger-line:nth-child(2) {
            opacity: 0;
            transform: scale(0);
        }

        .hamburger4.active .hamburger-line:nth-child(3) {
            transform: rotate(45deg) translate(-8px, -8px);
        }

        /* Demo Menu */
        .demo-menu {
            position: fixed;
            top: 0;
            right: -300px;
            width: 300px;
            height: 100vh;
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            transition: right 0.3s ease;
            padding: 2rem;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
            z-index: 1000;
        }

        .demo-menu.active {
            right: 0;
        }

        .demo-menu h3 {
            color: #333;
            margin-bottom: 1rem;
            padding-bottom: 1rem;
            border-bottom: 2px solid #667eea;
        }

        .demo-menu ul {
            list-style: none;
        }

        .demo-menu li {
            margin: 1rem 0;
        }

        .demo-menu a {
            color: #555;
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s ease;
        }

        .demo-menu a:hover {
            color: #667eea;
        }

        .close-menu {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: none;
            border: none;
            font-size: 1.5rem;
            cursor: pointer;
            color: #666;
        }

        .demo-hamburger {
            position: fixed;
            top: 2rem;
            right: 2rem;
            z-index: 1001;
        }

        .instructions {
            margin-top: 2rem;
            padding: 1rem;
            background: #f8f9fa;
            border-radius: 10px;
            color: #666;
            font-size: 0.9rem;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Hamburger Menus</h1>
        <p>Click on each hamburger to see different animation styles:</p>
        
        <div class="menu-showcase">
            <div class="menu-item">
                <div class="menu-label">Basic Cross</div>
                <div class="hamburger hamburger1" onclick="toggleMenu(1)">
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                </div>
            </div>
            
            <div class="menu-item">
                <div class="menu-label">Arrow Style</div>
                <div class="hamburger hamburger2" onclick="toggleMenu(2)">
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                </div>
            </div>
            
            <div class="menu-item">
                <div class="menu-label">Spin Effect</div>
                <div class="hamburger hamburger3" onclick="toggleMenu(3)">
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                </div>
            </div>
            
            <div class="menu-item">
                <div class="menu-label">Elastic</div>
                <div class="hamburger hamburger4" onclick="toggleMenu(4)">
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                    <div class="hamburger-line"></div>
                </div>
            </div>
        </div>
    </div>

    <!-- Demo Menu -->
    <div class="hamburger demo-hamburger hamburger1" onclick="toggleDemoMenu()">
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
        <div class="hamburger-line"></div>
    </div>

    <div class="demo-menu" id="demoMenu">
        <button class="close-menu" onclick="toggleDemoMenu()">&times;</button>
        <h3>Navigation</h3>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Portfolio</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
    </div>

    <script>
        function toggleMenu(style) {
            const hamburger = document.querySelector(\`.hamburger\${style}\`);
            hamburger.classList.toggle('active');
            
            // Reset after 2 seconds for demo
            setTimeout(() => {
                hamburger.classList.remove('active');
            }, 2000);
        }

        function toggleDemoMenu() {
            const demoHamburger = document.querySelector('.demo-hamburger');
            const demoMenu = document.getElementById('demoMenu');
            
            demoHamburger.classList.toggle('active');
            demoMenu.classList.toggle('active');
        }

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            const demoMenu = document.getElementById('demoMenu');
            const demoHamburger = document.querySelector('.demo-hamburger');
            
            if (!demoMenu.contains(e.target) && !demoHamburger.contains(e.target)) {
                demoMenu.classList.remove('active');
                demoHamburger.classList.remove('active');
            }
        });
    </script>
</body>
</html>
    `
  }
];