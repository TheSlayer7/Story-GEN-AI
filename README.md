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
 How to Run the Project Locally
Clone the Repository

bash
Copy
Edit
git clone https://github.com/YourUsername/Story-GEN-AI.git
cd Story-GEN-AI
Set Up the Python Backend

bash
Copy
Edit
python -m venv venv
venv\Scripts\activate     # For Windows  
# OR  
source venv/bin/activate  # For macOS/Linux

pip install -r requirements.txt
cd backend
python app.py
Set Up the Frontend
Open a new terminal and run:

bash
Copy
Edit
cd frontend
npm install
npm run dev
Open in Browser
Go to:

arduino
Copy
Edit
http://localhost:5173