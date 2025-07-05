from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import GPT2LMHeadModel, GPT2Tokenizer
import torch


app = Flask(__name__)
CORS(app)

model_name = "gpt2-medium"
tokenizer = GPT2Tokenizer.from_pretrained(model_name)
model = GPT2LMHeadModel.from_pretrained(model_name)

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json()
    prompt = data.get("prompt", "")
    length = data.get("length", "medium").lower()

    len_dict = {
        "short": 200,
        "medium": 500,
        "long": 1000
    }

    max_length = len_dict.get(length, 500) 

    inputs = tokenizer.encode(prompt, return_tensors="pt")

    outputs = model.generate(
        inputs,
        max_length=max_length,
        do_sample=True,
        top_k=50,
        top_p=0.95,
        temperature=0.9
    )

    story = tokenizer.decode(outputs[0], skip_special_tokens=True)
    return jsonify({"story": story})

if __name__ == "__main__":
    app.run(port=5000)
