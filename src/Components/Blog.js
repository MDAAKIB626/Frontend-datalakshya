import React, { useState } from "react";
import "./Blog.css";

/* ================= COURSE DATA ================= */

const courseData = {
  python: [
  {
    title: "Python Fundamentals",
    items: [
      {
        id: "intro",
        name: "Introduction to Python",
        content:
          "Python is a high-level, interpreted programming language known for its simple and readable syntax. High-level means it is easy for humans to understand. Interpreted means code runs line by line using an interpreter. Python supports multiple programming paradigms including procedural, object-oriented, and functional programming. It is widely used in web development, data science, artificial intelligence, automation, and software development because of its huge community support and rich libraries."
      },
      {
        id: "installation",
        name: "Installation & Setup",
        content:
          "Python can be downloaded from python.org. During installation, it is important to check 'Add Python to PATH'. After installation, you can verify it by typing 'python --version' in the terminal. You can write code using IDEs like VS Code or PyCharm. To run a simple program, create a file with .py extension and write: print('Hello World'). Then run it using the terminal or run button in the IDE."
      },
      {
        id: "variables",
        name: "Python Variables",
        content:
          "Variables are used to store data values in memory. Python is dynamically typed, meaning you do not need to declare the data type explicitly. Example: x = 10 (integer), name = 'John' (string), price = 99.99 (float). Variable names must start with a letter or underscore and cannot use reserved keywords. Python allows reassigning variables to different data types, which makes it flexible but requires careful coding."
      },
      {
        id: "loops",
        name: "Loops",
        content:
          "Loops are used to execute a block of code multiple times. Python mainly provides 'for' and 'while' loops. A 'for' loop is used when the number of iterations is known, such as iterating over a range or list. Example: for i in range(5): print(i). A 'while' loop runs as long as a condition is true. Example: while x < 5: x += 1. Loops can also use 'break' to stop execution and 'continue' to skip an iteration."
      }
    ]
  },

 {
  title: "Intermediate Python",
  items: [
    {
      id: "oops",
      name: "Object-Oriented Programming (OOP)",
      content:
        "Object-Oriented Programming (OOP) is a programming paradigm that organizes code using classes and objects. A class is a blueprint that defines properties (variables) and behaviors (methods), while an object is a real instance of that class.\n\nKey OOP Concepts:\n\n1. Encapsulation:\nEncapsulation means binding data (variables) and methods (functions) together inside a class and restricting direct access to some details. This helps protect data from accidental modification. In Python, this is done using private variables (e.g., _variable or __variable).\n\n2. Inheritance:\nInheritance allows one class (child class) to inherit properties and methods from another class (parent class). This promotes code reusability and reduces duplication.\nExample:\nclass Person:\n    def greet(self):\n        print('Hello')\n\nclass Student(Person):\n    pass\n\n3. Polymorphism:\nPolymorphism allows the same method name to behave differently for different objects. For example, different classes can define the same method with different implementations.\n\n4. Abstraction:\nAbstraction means hiding complex implementation details and showing only essential features. This makes code easier to use and understand.\n\nOOP makes programs scalable, reusable, and easier to maintain, especially in large applications."
    },
    {
      id: "file",
      name: "File Handling",
      content:
        "File handling is used to store, retrieve, and manipulate data permanently using files. Python provides the open() function to work with files.\n\nBasic Syntax:\nfile = open('filename.txt', 'mode')\n\nFile Modes:\n'r'  -> Read (default mode, file must exist)\n'w'  -> Write (creates new file or overwrites existing)\n'a'  -> Append (adds data without deleting old content)\n'b'  -> Binary mode (used for images, videos, etc.)\n\nReading Files:\nfile = open('data.txt', 'r')\ncontent = file.read()\nfile.close()\n\nWriting Files:\nfile = open('data.txt', 'w')\nfile.write('Hello World')\nfile.close()\n\nUsing with Statement (Recommended):\nwith open('data.txt', 'r') as file:\n    content = file.read()\n\nThe 'with' statement automatically closes the file after use, which prevents memory leaks and errors.\n\nFile handling is important for saving user data, logs, reports, configuration files, and database backups."
    }
  ]
},

  {
    title: "Advanced Python",
    items: [
      {
        id: "decorators",
        name: "Decorators",
        content:
          "Decorators are special functions that modify the behavior of another function without changing its actual code. They use the '@decorator_name' syntax. Internally, decorators wrap one function inside another. They are commonly used for logging, authentication, access control, and performance measurement. Example: @my_decorator def greet(): print('Hello')."
      },
      {
        id: "api",
        name: "Working with APIs",
        content:
          "APIs (Application Programming Interfaces) allow different software applications to communicate with each other. In Python, APIs are commonly accessed using the 'requests' library. Data is usually returned in JSON format. Example: import requests; response = requests.get('https://api.example.com/data'); data = response.json(). APIs are widely used in web applications, mobile apps, and real-time data systems."
      }
    ]
  }
],

 ml: [
  {
    title: "Beginner Machine Learning",
    items: [
      {
        id: "mlintro",
        name: "Introduction to Machine Learning",
        content:
          "Machine Learning (ML) is a branch of Artificial Intelligence that enables systems to learn patterns from data and make decisions without being explicitly programmed. Instead of writing fixed rules, we provide data and allow the model to learn relationships. ML is widely used in recommendation systems, spam detection, face recognition, and predictive analytics."
      },
      {
        id: "mlworkflow",
        name: "ML Workflow",
        content:
          "The basic ML workflow includes: 1) Collecting Data, 2) Cleaning & Preprocessing Data, 3) Splitting into Training and Testing Data, 4) Selecting a Model, 5) Training the Model, 6) Evaluating Performance, and 7) Making Predictions. Understanding this pipeline is essential before learning algorithms."
      },
      {
        id: "types",
        name: "Types of Machine Learning",
        content:
          "There are three main types of ML: 1) Supervised Learning (model learns from labeled data), 2) Unsupervised Learning (model finds patterns in unlabeled data), 3) Reinforcement Learning (model learns through rewards and penalties). Supervised learning is most common for beginners."
      }
    ]
  },

  {
    title: "Intermediate Machine Learning",
    items: [
      {
        id: "regression",
        name: "Regression",
        content:
          "Regression is a supervised learning algorithm used to predict continuous numerical values. Example: predicting house prices or sales revenue. Common algorithms include Linear Regression and Polynomial Regression. Model performance is evaluated using metrics like Mean Squared Error (MSE) and R-squared."
      },
      {
        id: "classification",
        name: "Classification",
        content:
          "Classification is used to predict categorical outcomes such as spam/not spam or disease/no disease. Common algorithms include Logistic Regression, K-Nearest Neighbors (KNN), Decision Trees, and Support Vector Machines (SVM). Performance is measured using Accuracy, Precision, Recall, and F1-score."
      },
      {
        id: "feature_engineering",
        name: "Feature Engineering",
        content:
          "Feature engineering involves selecting, modifying, or creating important input variables that improve model performance. This includes handling missing values, encoding categorical variables, scaling numerical features, and removing irrelevant data."
      }
    ]
  },

  {
    title: "Advanced Machine Learning",
    items: [
      {
        id: "ensemble",
        name: "Ensemble Methods",
        content:
          "Ensemble methods combine multiple models to improve prediction accuracy. Examples include Random Forest, Gradient Boosting, and XGBoost. These methods reduce overfitting and improve generalization."
      },
      {
        id: "neural_networks",
        name: "Neural Networks",
        content:
          "Neural Networks are inspired by the human brain and are the foundation of Deep Learning. They consist of layers (input, hidden, output) and use activation functions to learn complex patterns. Used in image recognition, NLP, and speech processing."
      },
      {
        id: "model_optimization",
        name: "Model Optimization",
        content:
          "Advanced ML includes hyperparameter tuning, cross-validation, regularization (L1/L2), and avoiding overfitting or underfitting. Techniques like Grid Search and Random Search are used to improve model performance."
      }
    ]
  }
],
dl: [
  {
    title: "Beginner Deep Learning",
    items: [
      {
        id: "dlintro",
        name: "Introduction to Deep Learning",
        content:
          "Deep Learning (DL) is a subset of Machine Learning that uses neural networks with multiple layers (deep neural networks) to model complex patterns in data. Unlike traditional ML, DL can automatically extract features from raw data, making it ideal for image, audio, and text analysis."
      },
      {
        id: "dlworkflow",
        name: "Deep Learning Workflow",
        content:
          "The Deep Learning workflow includes: 1) Collecting and preparing data, 2) Preprocessing (normalization, augmentation), 3) Designing neural network architecture, 4) Training the model using backpropagation and optimization algorithms, 5) Evaluating the model using validation/test data, 6) Making predictions and deployment."
      },
      {
        id: "dlapplications",
        name: "Applications of Deep Learning",
        content:
          "Deep Learning is used in: 1) Image recognition (e.g., facial recognition), 2) Natural Language Processing (NLP) like chatbots and translation, 3) Speech recognition, 4) Autonomous vehicles, 5) Medical diagnosis from scans."
      }
    ]
  },

  {
    title: "Intermediate Deep Learning",
    items: [
      {
        id: "nn_basics",
        name: "Neural Networks Basics",
        content:
          "A Neural Network consists of an input layer, hidden layers, and an output layer. Each layer contains neurons connected with weights. Inputs are multiplied by weights, passed through an activation function (like ReLU, Sigmoid), and produce outputs. Neural networks learn by adjusting weights using backpropagation."
      },
      {
        id: "activation",
        name: "Activation Functions",
        content:
          "Activation functions introduce non-linearity into the network. Common functions: ReLU (Rectified Linear Unit), Sigmoid (outputs 0-1), Tanh (-1 to 1), Softmax (for multi-class classification). Choosing the right activation function is important for learning complex patterns."
      },
      {
        id: "optimizers",
        name: "Optimizers",
        content:
          "Optimizers update the weights of the neural network to minimize loss. Common optimizers include Gradient Descent, SGD (Stochastic Gradient Descent), Adam, and RMSProp. Learning rate controls the step size in weight updates."
      },
      {
        id: "loss_functions",
        name: "Loss Functions",
        content:
          "Loss functions measure the difference between predicted and actual values. Common examples: Mean Squared Error (MSE) for regression, Cross-Entropy Loss for classification. The network trains by minimizing the loss function."
      }
    ]
  },

  {
    title: "Advanced Deep Learning",
    items: [
      {
        id: "cnn",
        name: "Convolutional Neural Networks (CNN)",
        content:
          "CNNs are specialized for image and spatial data. They use convolutional layers to extract features like edges, textures, and shapes. Pooling layers reduce dimensionality. CNNs are widely used in image recognition, object detection, and medical imaging."
      },
      {
        id: "rnn",
        name: "Recurrent Neural Networks (RNN)",
        content:
          "RNNs are designed for sequential data such as time series or text. They have loops allowing information to persist. Variants like LSTM (Long Short-Term Memory) and GRU (Gated Recurrent Unit) solve the problem of long-term dependencies."
      },
      {
        id: "gan",
        name: "Generative Adversarial Networks (GANs)",
        content:
          "GANs consist of two networks: Generator and Discriminator. The Generator creates fake data, while the Discriminator tries to detect real vs fake data. GANs are used in image generation, deepfakes, and data augmentation."
      },
      {
        id: "transfer_learning",
        name: "Transfer Learning",
        content:
          "Transfer Learning uses a pre-trained model on new tasks. This reduces training time and improves performance, especially when labeled data is limited. Common pre-trained models include VGG, ResNet, BERT, and GPT."
      },
      {
        id: "advanced_optimizations",
        name: "Advanced Optimizations",
        content:
          "Advanced techniques in deep learning include learning rate scheduling, dropout (to prevent overfitting), batch normalization (to stabilize learning), and hyperparameter tuning. These techniques improve model accuracy and generalization."
      }
    ]
  }
],
ai: [
  {
    title: "Beginner AI",
    items: [
      {
        id: "ai_intro",
        name: "Introduction to AI",
        content:
          "Artificial Intelligence (AI) is the field of computer science focused on creating systems that can perform tasks that typically require human intelligence. Examples include reasoning, problem-solving, understanding language, and perception. AI is used in chatbots, virtual assistants, recommendation systems, and autonomous vehicles."
      },
      {
        id: "ai_history",
        name: "History of AI",
        content:
          "AI started in the 1950s with the goal of simulating human intelligence. Early AI used symbolic reasoning and logic-based approaches. Over time, Machine Learning and Deep Learning became core parts of modern AI."
      },
      {
        id: "ai_applications",
        name: "Applications of AI",
        content:
          "AI is applied in: 1) Natural Language Processing (chatbots, translators), 2) Computer Vision (image and video recognition), 3) Robotics, 4) Predictive Analytics (finance, healthcare), 5) Recommendation Systems (Netflix, Amazon)."
      }
    ]
  },

  {
    title: "Intermediate AI",
    items: [
      {
        id: "ai_search",
        name: "Search and Optimization",
        content:
          "Search algorithms and optimization techniques help AI find solutions efficiently. Examples include Depth-First Search (DFS), Breadth-First Search (BFS), A* algorithm, and Genetic Algorithms for optimization problems."
      },
      {
        id: "knowledge_rep",
        name: "Knowledge Representation",
        content:
          "Knowledge Representation is how AI systems store information about the world to make intelligent decisions. Common methods include semantic networks, logic-based representation, and ontologies."
      },
      {
        id: "reasoning",
        name: "Reasoning and Inference",
        content:
          "Reasoning allows AI systems to draw conclusions from known facts. Techniques include Rule-Based Systems, Forward Chaining, Backward Chaining, and probabilistic reasoning using Bayesian Networks."
      },
      {
        id: "ml_in_ai",
        name: "Role of Machine Learning in AI",
        content:
          "Machine Learning is a key component of modern AI. It allows AI systems to learn patterns from data and improve decision-making over time without explicit programming."
      }
    ]
  },

  {
    title: "Advanced AI",
    items: [
      {
        id: "nlp",
        name: "Natural Language Processing (NLP)",
        content:
          "NLP enables machines to understand, interpret, and generate human language. Applications include chatbots, sentiment analysis, machine translation, and speech recognition. Techniques include tokenization, stemming, lemmatization, and transformer-based models like BERT and GPT."
      },
      {
        id: "computer_vision",
        name: "Computer Vision",
        content:
          "Computer Vision allows machines to interpret visual data such as images and videos. It involves tasks like image classification, object detection, segmentation, and facial recognition. CNNs (Convolutional Neural Networks) are commonly used for these tasks."
      },
      {
        id: "reinforcement_learning",
        name: "Reinforcement Learning",
        content:
          "Reinforcement Learning (RL) is a type of learning where an agent learns by interacting with an environment and receiving rewards or penalties. It is used in robotics, game playing (e.g., AlphaGo), and autonomous navigation."
      },
      {
        id: "ai_ethics",
        name: "AI Ethics and Safety",
        content:
          "AI ethics focuses on fairness, transparency, accountability, and avoiding bias in AI systems. It also involves safety concerns, ensuring AI behaves reliably and does not harm humans."
      },
      {
        id: "advanced_ai_techniques",
        name: "Advanced AI Techniques",
        content:
          "Advanced AI combines ML, Deep Learning, Reinforcement Learning, and Knowledge Representation to build intelligent systems. Examples include self-driving cars, AI medical diagnosis, and intelligent virtual assistants."
      }
    ]
  }
],
data_science: [
  {
    title: "Beginner Data Science",
    items: [
      {
        id: "ds_intro",
        name: "Introduction to Data Science",
        content:
          "Data Science is the field of extracting insights and knowledge from structured and unstructured data using programming, statistics, and domain knowledge. It combines techniques from Machine Learning, Statistics, and Data Visualization to solve real-world problems."
      },
      {
        id: "ds_workflow",
        name: "Data Science Workflow",
        content:
          "The basic workflow includes: 1) Data Collection (from databases, APIs, or files), 2) Data Cleaning & Preprocessing (handling missing values, duplicates, and formatting), 3) Exploratory Data Analysis (EDA) using visualization and statistics, 4) Feature Selection & Engineering, 5) Model Building, 6) Model Evaluation, 7) Deployment and Reporting."
      },
      {
        id: "ds_tools",
        name: "Data Science Tools",
        content:
          "Common tools and languages include Python, R, Jupyter Notebook, Pandas, NumPy, Matplotlib, Seaborn, SQL, and Excel. Python is preferred for beginners due to its simplicity and extensive library support."
      }
    ]
  },

  {
    title: "Intermediate Data Science",
    items: [
      {
        id: "data_manipulation",
        name: "Data Manipulation with Pandas",
        content:
          "Pandas library is used to manipulate and analyze data in Python. It provides DataFrames and Series for tabular data. Common operations include filtering, grouping, merging, pivoting, and handling missing data."
      },
      {
        id: "data_visualization",
        name: "Data Visualization",
        content:
          "Data visualization is essential to understand patterns and trends. Libraries like Matplotlib, Seaborn, and Plotly are used to create line charts, bar charts, scatter plots, heatmaps, and interactive dashboards."
      },
      {
        id: "statistics",
        name: "Statistics for Data Science",
        content:
          "Statistics forms the foundation of Data Science. Key concepts include descriptive statistics (mean, median, mode), probability distributions, hypothesis testing, correlation, and regression analysis. Understanding these helps interpret data and model results."
      },
      {
        id: "ml_in_ds",
        name: "Machine Learning in Data Science",
        content:
          "Data Scientists use ML algorithms to make predictions and detect patterns. Regression, classification, clustering, and recommendation systems are applied depending on the problem."
      }
    ]
  },

  {
    title: "Advanced Data Science",
    items: [
      {
        id: "big_data",
        name: "Big Data Technologies",
        content:
          "Big Data refers to datasets that are too large or complex for traditional tools. Tools like Hadoop, Spark, and Dask are used to process large-scale data efficiently."
      },
      {
        id: "deep_learning_ds",
        name: "Deep Learning in Data Science",
        content:
          "Deep Learning techniques are applied to analyze complex data like images, audio, and text. Neural Networks, CNNs, RNNs, and pre-trained models are commonly used in advanced Data Science projects."
      },
      {
        id: "feature_engineering_ds",
        name: "Feature Engineering & Selection",
        content:
          "Feature engineering is critical in improving model performance. Techniques include normalization, encoding categorical variables, handling missing data, and selecting the most important features using algorithms or statistical methods."
      },
      {
        id: "model_evaluation_ds",
        name: "Model Evaluation & Deployment",
        content:
          "Advanced evaluation includes metrics like ROC-AUC, Precision-Recall Curve, F1-score, and cross-validation. Deployment involves integrating models into production using Flask, FastAPI, or cloud platforms for real-world use."
      },
      {
        id: "data_ethics",
        name: "Data Ethics & Governance",
        content:
          "Data Science also focuses on ethical use of data, privacy, security, fairness, and compliance with regulations like GDPR. Responsible data usage ensures trust and reliability of insights."
      }
    ]
  }
],
};

const Blog = () => {
  const [activeCourse, setActiveCourse] = useState("python");
  const [openIndex, setOpenIndex] = useState(null);

  const [content, setContent] = useState({
    title: "Python Tutorial",
    text: "Python is one of the most popular programming languages."
  });

  const toggleMenu = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sidebarMenu = courseData[activeCourse];

  return (
    <div>

      {/* ======== TOP NAVBAR ======== */}
      <div className="top-navbar">

        <span onClick={() => setActiveCourse("python")}>
          Python
        </span>

        <span onClick={() => setActiveCourse("ml")}>
          Machine Learning
        </span>
         <span onClick={() => setActiveCourse("dl")}>
          Deep  Learning
        </span>
         <span onClick={() => setActiveCourse("ai")}>
          Artificial Intelligient  
        </span>
         <span onClick={() => setActiveCourse("data_science")}>
          Data Science
        </span>

      </div>

      <div className="page">

        {/* SIDEBAR */}
        <div className="sidebar">

          <h4>Technical Scripter 2026</h4>

          {sidebarMenu.map((menu, index) => (
            <div key={index}>

              <div
                className="menu-title"
                onClick={() => toggleMenu(index)}
              >
                {menu.title}
                <span>⌄</span>
              </div>

              {openIndex === index && (
                <div className="submenu">
                  {menu.items.map((item) => (
                    <div
                      key={item.id}
                      className="submenu-item"
                      onClick={() =>
                        setContent({
                          title: item.name,
                          text: item.content
                        })
                      }
                    >
                      {item.name}
                    </div>
                  ))}
                </div>
              )}

            </div>
          ))}

        </div>

        {/* CONTENT */}
        <div className="content">
          <h1>{content.title}</h1>
          <p>{content.text}</p>
        </div>

      </div>

    </div>
  );
};

export default Blog;