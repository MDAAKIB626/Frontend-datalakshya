const blogData = {
  pythonML: {
    topTitle: "Python for ML",
    sidebar: [
      { id: "intro", label: "Introduction" },
      { id: "libs", label: "Python ML Libraries" },
      { id: "workflow", label: "ML Workflow" }
    ],
    content: {
      intro: {
        title: "Introduction to Python for Machine Learning",
        desc:
          "Python is widely used in ML because of its simplicity and large ecosystem."
      },
      libs: {
        title: "Python Libraries for Machine Learning",
        desc:
          "NumPy, Pandas, Matplotlib, Seaborn, Scikit-learn, TensorFlow and PyTorch."
      },
      workflow: {
        title: "Machine Learning Workflow",
        desc:
          "Steps include data collection, preprocessing, EDA, feature engineering, training and deployment."
      }
    }
  },

  eda: {
    topTitle: "EDA",
    sidebar: [
      { id: "meaning", label: "What is EDA?" },
      { id: "process", label: "EDA Process" }
    ],
    content: {
      meaning: {
        title: "Exploratory Data Analysis",
        desc:
          "EDA is used to analyze datasets visually and statistically to find patterns."
      },
      process: {
        title: "EDA Process",
        desc:
          "Data cleaning, visualization, summary statistics and correlation analysis."
      }
    }
  },

  unsupervised: {
    topTitle: "Unsupervised Learning",
    sidebar: [
      { id: "intro", label: "Introduction" },
      { id: "algos", label: "Algorithms" }
    ],
    content: {
      intro: {
        title: "Unsupervised Learning",
        desc:
          "Works on unlabeled data, mainly used for clustering and dimensionality reduction."
      },
      algos: {
        title: "Unsupervised Algorithms",
        desc:
          "K-Means, Hierarchical Clustering, DBSCAN and PCA."
      }
    }
  }
};

export default blogData;
