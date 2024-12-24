import openai
import json
import time
import random
import os
from openai.error import RateLimitError
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Set your OpenAI API key from an environment variable
openai.api_key = os.getenv('OPENAI_API_KEY')

def generate_question(category, difficulty, difficulty_levels):
    prompt = f"Generate a trivia question with multiple choices in the category of {category} and difficulty level {difficulty} on a scale of {difficulty_levels}. Return the result as a JSON object with fields 'question', 'choices', 'correctAnswer', and 'explanation'. Do not include prefixes to the answers like A) B) C) etc."
    retries = 5
    while retries > 0:
        try:
            response = openai.ChatCompletion.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "You are a trivia question generator."},
                    {"role": "user", "content": prompt}
                ],
                max_tokens=250,
                n=1,
                stop=None,
                temperature=1.3,
            )
            question_json = response.choices[0].message['content'].strip()
            print(f"Raw response content: {question_json}")  # Add this line to log the raw response
            if question_json.startswith("```json") and question_json.endswith("```"):
                question_json = question_json[7:-3].strip()  # Remove the triple backticks
            return json.loads(question_json)
        except RateLimitError:
            retries -= 1
            print(f"Rate limit exceeded. Retrying in 60 seconds... ({5 - retries}/5)")
            time.sleep(60)
        except json.JSONDecodeError:
            print("Failed to decode JSON response. Retrying...")
            retries -= 1
    print("Failed to generate question due to rate limit or JSON decode error. Please try again later.")
    return None

def main():
    categories = [
        "Culinary Arts", "Geography", "Physics", "Journalism", "Botany", 
        "Environmental Science", "Cybersecurity", "Neuroscience", "Statistics", 
        "Machine Learning", "International Relations", "Marketing", "Space", 
        "Engineering", "Computer Science", "Television", "Movies", "Music", 
        "Psychology", "Sociology", "Medicine", "Law", "Business", "Finance", 
        "Artificial Intelligence", "Data Science", "Robotics", "Quantum Computing", 
        "Genetics", "Zoology", "Geology", "Meteorology", "Oceanography", 
        "Paleontology", "Architecture", "Design", "Fashion", "Photography", 
        "Cinimatogprahy", "Communications", "Information Technology", 
        "Game Development", "Animation", "Graphic Design", "Web Development", 
        "Military History", "Military Science", "military technology", "History", 
        "Technology", "Mathematics", "Economics", "Biology", "Chemistry", 
        "Astrophysics", "Astronomy", "Internet culture", "Social Media", "Aerospace", "Aviation"
    ]
    difficulty_levels = ["Highschool", "Undergrad", "Masters", "PhD", "Extreme", "Extra Super Extremely hard"]

    try:
        with open('questions.js', 'r') as f:
            existing_data = f.read()
            start_index = existing_data.index('[')
            end_index = existing_data.rindex(']') + 1
            existing_questions = json.loads(existing_data[start_index:end_index])
    except (FileNotFoundError, ValueError, json.JSONDecodeError):
        existing_questions = []

    questions = existing_questions.copy()

    num_questions = int(input("How many questions do you want to add for each category and difficulty level? "))

    total_questions = len(categories) * len(difficulty_levels) * num_questions
    current_question = 0

    random.shuffle(categories)  # Shuffle the categories list

    for category in categories:
        for difficulty in difficulty_levels:
            for _ in range(num_questions):
                question = generate_question(category, difficulty, difficulty_levels)
                if question and not any(q['question'] == question['question'] for q in questions):
                    question['category'] = category
                    question['difficulty'] = difficulty
                    questions.append(question)
                    with open('questions.js', 'w') as f:
                        f.write("const questions = ")
                        json.dump(questions, f, indent=2)
                        f.write(";")
                current_question += 1
                print(f"Total number of questions: {len(questions)}")
                print(f"Progress: {current_question}/{total_questions} questions generated")

    

    if not questions:
        print("No questions were generated.")
        return


    print("Questions generated and saved successfully.")

if __name__ == "__main__":
    main()
