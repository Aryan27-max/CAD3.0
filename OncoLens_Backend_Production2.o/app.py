
from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from utils.huggingface_api import analyze_image
from utils.mutation_analysis import analyze_vcf
from utils.drug_prediction import predict_drugs

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/analyze-image', methods=['POST'])
def analyze_image_route():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400
    image = request.files['image']
    path = os.path.join(UPLOAD_FOLDER, image.filename)
    image.save(path)
    result = analyze_image(path)
    return jsonify(result)

@app.route('/analyze-mutations', methods=['POST'])
def analyze_mutations_route():
    if 'file' not in request.files:
        return jsonify({'error': 'No mutation file uploaded'}), 400
    file = request.files['file']
    path = os.path.join(UPLOAD_FOLDER, file.filename)
    file.save(path)
    results = analyze_vcf(path)
    return jsonify(results)

@app.route('/predict-treatment', methods=['POST'])
def predict_treatment_route():
    if not request.is_json:
        return jsonify({'error': 'Expected JSON input'}), 400
    data = request.get_json()
    mutations = data.get('mutations', [])
    cancer_type = data.get('cancer_type', 'Unknown')
    response = predict_drugs(mutations, cancer_type)
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
