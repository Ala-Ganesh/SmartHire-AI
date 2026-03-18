def get_ai_response(message):

    msg = message.lower()

    # ===== BASIC INFO =====
    if "who is ala" in msg or "who are you" in msg:
        return ("Ala Ganesh is a final-year B.Tech Computer Science student "
                "specializing in Data Science and building AI-based applications.")

    # ===== EDUCATION =====
    elif "education" in msg or "study" in msg or "college" in msg:
        return ("Ala Ganesh is currently pursuing his final year B.Tech in Computer Science "
                "with a specialization in Data Science. His current CGPA is 7.54. "
                "Completed his Intermediate education at Narayana Junior College, Guntur with 76% "
                "and "
                "his schooling at SSCRP School (CBSE), Palnadu with 55%.")

    # ===== FAMILY =====
    elif "family" in msg:
        return ("He comes from a farming family in Palnadu, Andhra Pradesh. "
                "His parents work on a 2-acre agricultural land. He is the first graduate in his family.")

    # ===== PROJECT =====
    elif "nutrisnap" in msg:
        return ("NutriSnap is an AI-based food recognition system that detects food items "
                "and provides nutritional information using machine learning.")

    # ===== SKILLS =====
    elif "skills" in msg:
        return ("Ala Ganesh has strong skills in Python, Machine Learning, Flask, TensorFlow, "
                "Web Development, and Data Analysis.")

    # ===== CAREER =====
    elif "career" in msg or "goal" in msg:
        return ("His goal is to become a skilled Data Scientist and build impactful AI solutions "
                "while supporting his family.")

    # ===== EXPERIENCE =====
    elif "experience" in msg or "work" in msg:
        return ("He has part-time work experience at Valam Organic Restaurant, where he developed "
                "teamwork, communication, and responsibility skills.")

    # ===== DEFAULT =====
    else:
        return ("You can ask about Ala Ganesh's education, skills, projects, family background, "
                "career goals, or experience.")