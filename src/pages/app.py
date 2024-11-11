from flask import Flask, request, jsonify
from flask_cors import CORS
from transformers import AutoModelForCausalLM, AutoTokenizer
import torch

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})  # Enable CORS for API routes

# Load model and tokenizer
device = "cuda" if torch.cuda.is_available() else "cpu"
model = AutoModelForCausalLM.from_pretrained("Qwen/Qwen2-7B-Instruct").to(device)
tokenizer = AutoTokenizer.from_pretrained("Qwen/Qwen2-7B-Instruct")

@app.route('/api/chat', methods=['POST'])
def chat():
    user_input = request.json.get('user_input')
    if user_input:
        messages = [{"role": "user", "content": user_input}]
        text = tokenizer.apply_chat_template(messages, tokenize=False, add_generation_prompt=True)
        model_inputs = tokenizer([text], return_tensors="pt").to(device)
        generated_ids = model.generate(model_inputs.input_ids, max_new_tokens=512, do_sample=True)
        response = tokenizer.batch_decode(generated_ids, skip_special_tokens=True)[0]
        return jsonify({'generated_text': response})
    return jsonify({'error': 'No input provided'}), 400

@app.route('/api/test', methods=['GET'])
def test():
    return jsonify({"message": "Test successful"})

if __name__ == '__main__':
    app.run(debug=True, host="0.0.0.0", port=5000)