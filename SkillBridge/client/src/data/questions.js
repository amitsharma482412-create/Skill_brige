const questions = {
  "Frontend Developer": [
    { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tool Multi Language", "Home Text Markup Language"], answer: "Hyper Text Markup Language" },
    { question: "Which CSS property changes text color?", options: ["font-style", "background", "color", "text-size"], answer: "color" },
    { question: "Which keyword declares a block-scoped variable that can be reassigned?", options: ["const", "let", "static", "fixed"], answer: "let" },
    { question: "Which React feature lets a component store changing data?", options: ["Props only", "State", "HTML", "Package.json"], answer: "State" },
    { question: "Which Git command creates a local copy of a repository?", options: ["git push", "git clone", "git status", "git add"], answer: "git clone" }
  ],
  "Backend Developer": [
    { question: "Which HTTP method is commonly used to retrieve data?", options: ["POST", "GET", "DELETE", "PATCH"], answer: "GET" },
    { question: "What does API stand for?", options: ["Application Programming Interface", "Applied Program Internet", "Application Process Integration", "Advanced Programming Input"], answer: "Application Programming Interface" },
    { question: "What format is commonly used to exchange data with REST APIs?", options: ["JSON", "MP3", "PNG", "EXE"], answer: "JSON" },
    { question: "What is middleware often used for in Express?", options: ["Processing requests", "Styling HTML", "Compiling CSS", "Creating images"], answer: "Processing requests" },
    { question: "Which status code commonly means a successful HTTP request?", options: ["404", "500", "200", "301"], answer: "200" }
  ],
  "Full Stack Developer": [
    { question: "Which technology is commonly used to build React interfaces?", options: ["Components", "SQL tables", "PHP sessions", "CSS variables only"], answer: "Components" },
    { question: "Which runtime is commonly used for a Node.js backend?", options: ["JVM", "Node.js", "Django", "Laravel"], answer: "Node.js" },
    { question: "Which language is used to query relational databases?", options: ["SQL", "CSS", "HTML", "SVG"], answer: "SQL" },
    { question: "What is the purpose of an API?", options: ["Let software systems communicate", "Only style a page", "Compress images", "Replace every database"], answer: "Let software systems communicate" },
    { question: "Which command usually installs project dependencies with npm?", options: ["npm install", "npm paint", "node style", "git install-all"], answer: "npm install" }
  ],
  "Data Analyst": [
    { question: "Which language is commonly used to query relational databases?", options: ["HTML", "SQL", "CSS", "XML"], answer: "SQL" },
    { question: "Which Python library is widely used for tabular data analysis?", options: ["Pandas", "Turtle", "Pygame", "Tkinter"], answer: "Pandas" },
    { question: "Which Power BI feature is used to create calculations?", options: ["DAX measures", "HTML tags", "Git branches", "CSS selectors"], answer: "DAX measures" },
    { question: "Which Excel feature summarizes data by categories?", options: ["PivotTable", "WordArt", "Mail Merge", "Slide Master"], answer: "PivotTable" },
    { question: "Which measure gives the arithmetic average?", options: ["Mean", "Range", "Mode only", "Variance"], answer: "Mean" }
  ],
  "AI/ML Engineer": [
    { question: "What does ML stand for?", options: ["Machine Learning", "Modern Language", "Manual Logic", "Multiple Linking"], answer: "Machine Learning" },
    { question: "Which Python library is commonly used for numerical arrays?", options: ["NumPy", "Flask", "BeautifulSoup", "Django"], answer: "NumPy" },
    { question: "What is a dataset used for in machine learning?", options: ["Providing examples for model learning/evaluation", "Styling buttons", "Installing a browser", "Creating CSS"], answer: "Providing examples for model learning/evaluation" },
    { question: "What is a model's prediction compared against during supervised training?", options: ["Known target label", "Page title", "File name", "Browser theme"], answer: "Known target label" },
    { question: "Why is a test set used?", options: ["To evaluate performance on unseen data", "To rename variables", "To install libraries", "To format a webpage"], answer: "To evaluate performance on unseen data" }
  ],
  "Java Developer": [
    { question: "Which keyword is used to inherit a class in Java?", options: ["implements", "extends", "inherits", "super"], answer: "extends" },
    { question: "Which method is the entry point of a standard Java program?", options: ["start()", "run()", "main()", "init()"], answer: "main()" },
    { question: "Which collection stores unique elements?", options: ["ArrayList", "LinkedList", "HashSet", "Vector"], answer: "HashSet" },
    { question: "Which keyword is used to create an object?", options: ["new", "class", "this", "void"], answer: "new" },
    { question: "Which block is commonly used to handle an exception?", options: ["try-catch", "if-else only", "for-loop", "switch-case only"], answer: "try-catch" },
    { question: "Which interface represents a collection that does not allow duplicate elements?", options: ["List", "Set", "Queue", "Map.Entry"], answer: "Set" }
  ]
};

export default questions;
