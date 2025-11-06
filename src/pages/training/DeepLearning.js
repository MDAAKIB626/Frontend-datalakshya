// src/pages/training/DeepLearning.js
import React from "react";
import "./DeepLearning.css";

const DeepLearning = () => {
  return (
    <div className="container py-5">
      <h1 className="text-center text-primary fw-bold mb-4">
        Deep Learning Training Program
      </h1>

      <p className="lead text-muted text-center mb-5">
        Step into the world of Artificial Intelligence!  
        This Deep Learning program is designed to teach you how neural networks learn,  
        build models for image, speech, and text recognition, and deploy them in real-world applications.
      </p>

      {/* About the Course */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📘 About the Program</h3>
        <p>
          Deep Learning is a subset of Machine Learning that uses multi-layered
          neural networks to simulate human brain functionality.  
          This course covers the theoretical foundations and practical implementation  
          of neural networks using TensorFlow and Keras, enabling you to build intelligent AI systems.
        </p>
      </div>

      {/* Skills Covered */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🧠 Key Skills You Will Learn</h3>
        <ul>
          <li>Understanding Neural Networks and Deep Learning Fundamentals</li>
          <li>Implementing Deep Neural Networks (DNNs)</li>
          <li>Convolutional Neural Networks (CNNs) for Image Processing</li>
          <li>Recurrent Neural Networks (RNNs) and LSTMs for Sequential Data</li>
          <li>Transfer Learning and Pre-trained Models</li>
          <li>Autoencoders and Generative Adversarial Networks (GANs)</li>
          <li>Model Evaluation, Optimization & Deployment</li>
        </ul>
      </div>

      {/* Course Modules */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">📚 Course Curriculum Overview</h3>
        <ul>
          <li>Module 1: Introduction to Deep Learning & Neural Networks</li>
          <li>Module 2: Python and TensorFlow Basics</li>
          <li>Module 3: Building Deep Neural Networks</li>
          <li>Module 4: CNNs for Image Recognition</li>
          <li>Module 5: RNNs, LSTMs, and GRUs for Time Series & NLP</li>
          <li>Module 6: Advanced Architectures – GANs, Autoencoders</li>
          <li>Module 7: Model Deployment with TensorFlow Serving</li>
          <li>Module 8: Capstone Project – AI Model on Real Dataset</li>
        </ul>
      </div>

      {/* Tools & Technologies */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🛠️ Tools & Technologies Covered</h3>
        <ul>
          <li>TensorFlow, Keras, and PyTorch</li>
          <li>OpenCV for Image Processing</li>
          <li>NumPy, Pandas for Data Handling</li>
          <li>Matplotlib, Seaborn for Visualization</li>
          <li>Google Colab & Jupyter Notebook</li>
          <li>Hugging Face Transformers for NLP</li>
        </ul>
      </div>

      {/* Career Opportunities */}
      <div className="mb-5">
        <h3 className="text-secondary fw-semibold">🎯 Career Opportunities After Training</h3>
        <ul>
          <li>Deep Learning Engineer</li>
          <li>AI / Computer Vision Engineer</li>
          <li>Natural Language Processing (NLP) Engineer</li>
          <li>Research Scientist – Artificial Intelligence</li>
          <li>Data Scientist with Deep Learning Expertise</li>
        </ul>
      </div>

      {/* Preparation Tips */}
      <div className="text-center">
        <h4 className="fw-bold text-success">🚀 Preparation & Learning Tips</h4>
        <ul className="list-unstyled">
          <li>• Revise core Machine Learning concepts before starting.</li>
          <li>• Learn Linear Algebra & Calculus basics for neural networks.</li>
          <li>• Experiment with CNN and RNN architectures in small projects.</li>
          <li>• Study top architectures like ResNet, BERT, GPT, etc.</li>
          <li>• Work on open datasets (ImageNet, CIFAR-10, IMDB Sentiment).</li>
          <li>• Contribute to open-source Deep Learning projects on GitHub.</li>
        </ul>
      </div>
    </div>
  );
};

export default DeepLearning;
