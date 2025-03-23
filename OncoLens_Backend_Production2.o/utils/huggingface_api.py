
import requests
import os

def analyze_image(image_path):
    token = os.getenv("HUGGINGFACE_API_TOKEN")
    api_url = "https://api-inference.huggingface.co/models/Julien/tumor-detection"
    
    with open(image_path, "rb") as f:
        response = requests.post(
            api_url,
            headers={"Authorization": f"Bearer {token}"},
            data=f
        )
    if response.status_code == 200:
        data = response.json()
        label = data[0]["label"]
        score = data[0]["score"]
        return {
            "Tumor Detected": "Yes" if label.lower() == "tumor" else "No",
            "Confidence Score": round(score * 100, 2)
        }
    else:
        return {"error": "Model API call failed", "details": response.text}
