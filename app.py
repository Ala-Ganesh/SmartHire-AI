from ai_brain import get_ai_response
from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/projects")
def projects():
    return render_template("projects.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/chatbot")
def chatbot():
    return render_template("chatbot.html")

@app.route("/github")
def github():
    return render_template("github.html")

about_ala_ganesh = """
Ala Ganesh is a final-year B.Tech Computer Science student specializing in Data Science.
His current CGPA is 7.54.

He comes from a small farming family in Palnadu, Andhra Pradesh.
His parents work as farmers on a 2-acre agricultural land and sometimes work as labourers
to support the family during difficult times.

Ala Ganesh is the first graduate in his family. His parents believe that his education
will transform their family’s future.

He has a sister who discontinued her studies after Class 12, and his family is currently
looking for a suitable marriage for her.

During his academic journey, Ala Ganesh developed a project called NutriSnap.
NutriSnap is an AI-based food recognition and nutritional value estimation system
that analyzes food images using artificial intelligence.

Through this project, he gained practical experience in Python programming,
web development, artificial intelligence, and software design.

Alongside his studies, Ala Ganesh works part-time at Valam Organic Restaurant
in Selaiyur to support his financial needs. This job helped him develop teamwork,
responsibility, and communication skills while interacting with many people.

His career goal is to become a skilled technology professional and support his family,
while making his parents proud through his achievements.

He enjoys driving during his free time, as it gives him a sense of freedom and relaxation.
"""

@app.route("/ask", methods=["POST"])
def ask():

    message = request.json["message"]

    reply = get_ai_response(message)

    return jsonify({"reply": reply})

import os

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    app.run(host="0.0.0.0", port=port)