# 📘 PageCraft – AI-Powered Textbook Quality Analyzer

PageCraft is a web-based application designed to enhance textbook and educational content quality using **AI-driven content analysis**. By leveraging **Natural Language Processing (NLP)** techniques with **NLTK**, the platform evaluates readability, clarity, and engagement to help educators and students improve learning materials.

---

## 📖 About the Project

Educational content often lacks consistency in readability and student engagement. **PageCraft** addresses this challenge by analyzing textbook content using NLP techniques to identify areas for improvement.

The application processes textual data to assess factors such as sentence complexity, vocabulary usage, and overall readability. Based on this analysis, PageCraft provides insights that help educators refine content and make it more accessible and engaging for learners.

Built with a simple and responsive interface, PageCraft supports both academic and practical use cases in educational institutions.

---

## ✨ Features

* 📊 **AI-Based Content Quality Analysis**
* 🧠 **NLP Processing using NLTK**
* 📖 **Readability & Complexity Evaluation**
* 🎯 **Content Improvement Insights**
* 🧑‍🏫 **Student & Educator Friendly Interface**
* 🗂️ **Text Storage & Analysis History** (MongoDB)
* 🌐 **Web-Based Application**

---

## 🛠️ Tech Stack

| Layer           | Technology           |
| --------------- | -------------------- |
| Frontend        | HTML, CSS, Bootstrap |
| Backend         | Node.js, Express.js  |
| NLP             | NLTK                 |
| Database        | MongoDB              |
| Version Control | Git, GitHub          |

---

## 📂 Project Structure

```
PageCraft/
├── public/          # Static assets (CSS, JS)
├── views/           # UI templates
├── server/          # Backend logic
├── .env             # Environment variables
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Bavanetha27/PageCraft.git
cd PageCraft
```

---

### 2️⃣ Backend Setup

```bash
npm install
```

Create a `.env` file in the root directory:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
```

---

### 3️⃣ NLTK Setup

Make sure Python and NLTK are installed:

```bash
pip install nltk
```

Download required NLTK datasets:

```python
import nltk
nltk.download('punkt')
nltk.download('stopwords')
```

---

### 4️⃣ Run the Application

```bash
npm start
```

Access the app at:
📍 `http://localhost:5000`

---

## 🧪 Future Enhancements

* Grammar and plagiarism detection
* AI-generated content improvement suggestions
* Support for multiple languages
* PDF and document upload analysis
* Advanced readability metrics

---

## 🧑‍💻 Use Cases

* Educational institutions
* Teachers and professors
* Students creating study material
* EdTech platforms
* Content reviewers and publishers

---

## 📄 License

This project is licensed under the **MIT License**.

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create a new branch (`feature/your-feature`)
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

## 📬 Contact

**Bavanetha M R**
GitHub: [https://github.com/Bavanetha27](https://github.com/Bavanetha27)


Just tell me 🚀
