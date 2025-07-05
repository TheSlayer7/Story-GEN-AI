This project is created for educational purposes only. It generates AI-based stories using a pre-trained GPT-2 model.

📜 Credits & Licenses  
- **GPT-2 (gpt2-medium)** – Developed by OpenAI, available via HuggingFace, licensed under the **MIT License** 
- **Transformers Library** – by Hugging Face, licensed under the **Apache 2.0 License**  
- **Flask** – Licensed under the **BSD 3-Clause License**  
- **PyTorch** – Developed by Meta AI, licensed under the **BSD 3-Clause License**  
  - GitHub: [https://github.com/pytorch/pytorch](https://github.com/pytorch/pytorch)  
  - License: [BSD-3-Clause License](https://github.com/pytorch/pytorch/blob/main/LICENSE)  

I thank all these open-source libraries and their contributors for making this project possible.
 **Steps to Run the AI Story Generator Locally :**
 ## 🚀 How to Run the AI Story Generator Locally

### 1. Clone the Repository

bash
git clone https://github.com/TheSlayer7/Story-GEN-AI.git
cd Story-GEN-AI


### 2. Create and Activate Virtual Environment

bash
# Create virtual environment
python -m venv venv

# Activate (use the appropriate command below)

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate


### 3. Install Python Dependencies

bash
pip install -r requirements.txt


### 4. Run the Flask Backend

bash
cd backend
python app.py


### 5. Set Up and Start the Frontend

bash
# Open a new terminal
cd ../frontend

# Install frontend dependencies
npm install

# Start the frontend server
npm run dev


### 6. Open in Browser

Go to: [http://localhost:5173](http://localhost:5173)
