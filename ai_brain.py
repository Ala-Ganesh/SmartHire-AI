from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

knowledge_base = {

"introduction": """
Ala Ganesh is a final-year B.Tech Computer Science student specializing in Data Science with a CGPA of 7.54.
He is the first graduate in his family and comes from a farming family in Palnadu, Andhra Pradesh.
He is passionate about artificial intelligence and building useful software applications.
""",

"family": """
He comes from a small farming family. He is the First Graduate in his Family.
""",

"education": """
Ala Ganesh is pursuing B.Tech Computer Science with Data Science specialization.
His academic focus includes AI, machine learning concepts, and software development.
""",

"skills": """
His skills include Python programming, Flask web development, HTML, CSS, JavaScript,
and basic machine learning concepts.
""",

"nutrisnap": """
NutriSnap is an AI-based food recognition and nutrition estimation system.
It detects food items from images and estimates nutritional values using machine learning.
""",

"work": """
Along with his studies, Ala Ganesh works part-time at Valam Organic Restaurant in Selaiyur.
This experience helped him develop teamwork and communication skills.
""",

"goal": """
His goal is to become a strong technology professional, build impactful AI solutions,
and support his family financially.
""",

"hobbies": """
He enjoys driving in his free time because it gives him a sense of freedom.
"""

}

questions = list(knowledge_base.keys())
answers = list(knowledge_base.values())

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(questions)

def get_ai_response(user_question):

    user_vec = vectorizer.transform([user_question])

    similarity = cosine_similarity(user_vec, X)

    index = similarity.argmax()

    score = similarity[0][index]

    if score < 0.2:
        return "I may not have information about that yet. Try asking about Ala Ganesh's skills, projects, education, or goals."

    return answers[index]