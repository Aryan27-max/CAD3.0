![image](https://github.com/user-attachments/assets/c0d49bea-2668-4194-ba41-b4dc900afdeb)
# 🧬 OncoLens – AI-Powered Cancer Mutation Analysis Platform

**CAD 3.0 Project | Built with ❤️ by Aryan Raj Gupta, Aarambh Maan Shreshta, and Nehit Pahuja**

---

### 🔍 Overview

**OncoLens** is an advanced AI-powered platform designed to simplify and accelerate the analysis of cancer-related gene mutations. Built for researchers, clinicians, medtech developers, and biotech students, OncoLens allows users to upload genomic files (VCF/FASTA), detect tumors using deep learning, identify pathogenic variants with real-time public databases, and predict drug responses using state-of-the-art AI and biomedical APIs.

---

### 🚀 Key Features

- ✅ **Tumor Detection** powered by Hugging Face AI models  
- 🧬 **Gene Mutation Analysis** from uploaded `.vcf` or `.fasta` files  
- 💊 **Drug Response Prediction** using CancerVar and CIViC databases  
- 🌐 **Live API Integration** with:
  - [Ensembl REST API](https://rest.ensembl.org)
  - [ClinVar](https://www.ncbi.nlm.nih.gov/clinvar/)
  - [CancerVar](https://cancervar.wglab.org/)
  - [CIViC](https://civicdb.org/)
- 📁 **Drag-and-Drop File Upload** + smart parsing & validation  
- 📊 **Simulated Outputs** when API results are unavailable  
- 🛡️ **Built for real-world utility** in genomics, precision oncology, and bioinformatics education  

---

### 🔧 Tech Stack

| Layer       | Stack                                      |
|-------------|---------------------------------------------|
| **Frontend**  | React.js + Next.js                         |
| **Backend**   | FastAPI + Python 3.10+                     |
| **AI/ML**     | Hugging Face Transformers                  |
| **APIs**      | Ensembl, ClinVar, CancerVar, CIViC         |
| **File Types**| `.vcf`, `.fasta`                           |

---

### 🧑‍💻 Getting Started

#### 🔄 Prerequisites

- Python 3.10+
- Node.js 16+
- Git

#### 🛠️ Clone & Run

```bash
git clone https://github.com/Aryan27-max/oncolens.git
cd oncolens
```

##### Backend Setup

```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

##### Frontend Setup (Next.js)

```bash
cd frontend
npm install
npm run dev
```

---

### 🧪 Sample Use Case

1. Upload your **VCF or FASTA** gene mutation file.
2. OncoLens parses and validates the input.
3. AI model detects tumor presence.
4. Ensembl & ClinVar analyze gene mutations.
5. CancerVar or CIViC predicts drug responses.
6. 🎯 You receive a comprehensive, research-grade report!

---

### 🤝 Contributing

We welcome contributions from the community! Here’s how you can help:

```bash
# Fork the repository
git checkout -b feature/your-feature-name

# Make your changes
git commit -m "Added a cool feature"

# Push and create a Pull Request
git push origin feature/your-feature-name
```

---

### 📜 License

This project is licensed under the **MIT License**.  
See the [LICENSE](./LICENSE) file for details.

---

### 📬 Contact & Collaboration

Want to collaborate, contribute, or just say hi?  
Reach out to us at **[gupta.raj.aryan.2005@gmail.com](mailto:gupta.raj.aryan.2005@gmail.com)**

🌐 **Project Website:** Coming soon  
💡 *Let’s build something that saves lives.*

---

here are the some pics of the prototype

![image](https://github.com/user-attachments/assets/9ca749d3-2569-43a4-b79d-df7e441ffa5a)

![image](https://github.com/user-attachments/assets/6f877171-914b-413f-a1cd-d6f65e4354c6)

![image](https://github.com/user-attachments/assets/36d36843-5155-4724-bd4e-a60085714c54)

![image](https://github.com/user-attachments/assets/b61b9c39-b6d5-487a-b1ae-d6ee9c5451f7)

fork the OncoLens now to experience the prototype




