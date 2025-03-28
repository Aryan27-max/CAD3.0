# CAD3.0
oncolens
🧬 OncoLens – AI-Powered Cancer Mutation Analysis Platform

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![Tech Stack](https://img.shields.io/badge/stack-FastAPI%20%7C%20Next.js%20%7C%20HuggingFace%20%7C%20ClinVar%20%7C%20Ensembl-blue)

OncoLens is an AI-powered web platform designed to streamline the analysis of cancer-related gene mutations. It allows researchers and clinicians to upload genomic files (FASTA/VCF), analyze them for pathogenic variants using real-time public databases (ClinVar, Ensembl), and predict drug responses using AI models and APIs like CancerVar, CIViC, and Hugging Face.


 🚀 Features

- ✅ Tumor Detection AI using Hugging Face models
- 🧬 Gene Mutation Analysis from uploaded VCF/FASTA files
- 💊 Drug Response Prediction using CancerVar & CIViC
- 🌐 Real-time API integration with:
  - [Ensembl REST API](https://rest.ensembl.org/)
  - [ClinVar](https://www.ncbi.nlm.nih.gov/clinvar/)
  - [CancerVar](https://cancervar.readthedocs.io/)
  - [CIViC](https://civicdb.org/home)
- 📁 Upload and parse gene mutation files directly
- 📊 Simulated outputs when real API responses are unavailable
- 🛡️ Built for researchers, medtech devs, and biotech students


---

## 🧑‍💻 Getting Started

### Prerequisites

- Python 3.10+
- Node.js 16+
- Git

1. Clone the Repository

bash
git clone https://github.com/Aryan27-max/oncolens.git
cd oncolens

---
2. Backend
cd backend
pip install -r requirements.txt
uvicorn main:app --reload

3. Frontend Setup (Next.js)
bash
Copy
Edit
cd frontend
npm install
npm run dev

🔧 Tech Stack
Frontend: React.js + Next.js

Backend: FastAPI + Python

AI/ML: Hugging Face Models

Bioinformatics APIs: Ensembl, ClinVar, CancerVar, CIViC

File Formats Supported: .vcf, .fasta

🧪 Sample Use Case
Upload your gene mutation file (VCF or FASTA).

OncoLens parses and validates it.

AI scans for tumor presence.

Ensembl & ClinVar analyze mutation effects.

CancerVar/CIViC predict drug responses.

You get a detailed report!

🛠️ Contributing
We welcome contributions! To contribute:

bash
Copy
Edit
# Fork the repo
# Create your branch
git checkout -b feature/awesome-feature

# Commit changes
git commit -m "Added awesome feature"

# Push to branch and open a PR
git push origin feature/awesome-feature
📜 License
MIT License. See LICENSE for more info.

📬 Contact
Made with ❤️ by Aryan Raj Gupta
📧 For questions/collab: [gupta.raj.aryan.2005@gmail.com]
🌐 Project website: Coming soon




