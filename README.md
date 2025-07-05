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
Clone the repository
git clone https://github.com/YourUsername/Story-GEN-AI.git

Navigate into the project folder
cd Story-GEN-AI

Create a virtual environment
python -m venv venv

Activate the virtual environment

Windows: venv\Scripts\activate

macOS/Linux: source venv/bin/activate

Install Python dependencies
pip install -r requirements.txt

Navigate to backend folder (if needed)
cd backend

Run the Flask backend
python app.py

Open a new terminal and go to frontend folder
cd ../frontend

Install frontend dependencies
npm install

Start the frontend
npm run dev

Open your browser and go to
http://localhost:5173