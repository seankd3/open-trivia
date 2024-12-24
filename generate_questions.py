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

def generate_questions(category, difficulty, num_questions):
    prompt = (
    "Generate {num_questions} trivia questions with multiple choices "
    f"in the category of {category} and difficulty level {difficulty}. "
    "Output **only** valid JSON. The JSON must be a list of objects with "
    "keys 'question', 'choices', 'correctAnswer', 'explanation'. "
    "No extra text, no code blocks."
    )

    retries = 5
    while retries > 0:
        try:
            response = openai.ChatCompletion.create(
                model="gpt-4o-mini",
                messages=[
                    {"role": "system", "content": "You are a trivia question generator."},
                    {"role": "user", "content": prompt}
                ],
                n=1,
                stop=None,
                temperature=1.3,
            )
            questions_json = response.choices[0].message['content'].strip()
            print(f"Raw response content: {questions_json}")  # Log the raw response
            if questions_json.startswith("```json") and questions_json.endswith("```"):
                questions_json = questions_json[7:-3].strip()  # Remove the triple backticks
            return json.loads(questions_json)
        except RateLimitError:
            retries -= 1
            print(f"Rate limit exceeded. Retrying in 60 seconds... ({5 - retries}/5)")
            time.sleep(60)
        except json.JSONDecodeError:
            print("Failed to decode JSON response. Retrying...")
            retries -= 1
        except Exception as e:
            print(f"An error occurred: {e}")
            retries -= 1
    print("Failed to generate questions due to rate limit or JSON decode error. Please try again later.")
    return []

def main():
    categories = [
        "Science", "Mathematics", "History", "Geography", "Literature", 
        "Philosophy", "Art", "Music Theory", "Classical Music", "Physics", 
        "Chemistry", "Biology", "Astronomy", "Geology", "Environmental Science", 
        "Computer Science", "Engineering", "Economics", "Psychology", 
        "Sociology", "Political Science", "Anthropology", "Linguistics", 
        "Architecture", "Medicine", "Law", "Ethics", "Religious Studies", 
        "Archaeology", "Statistics", "Military Technology", "Rocket Science", "Orbital Mechanics", "Rocket Propulsion"
    ]
    difficulty_levels = ["Elementary", "Middle School", "Highschool", "Undergrad", "Masters", "PhD", "Extreme", "Extra Super Extremely hard", "Impossible"]

    try:
        with open('questions.js', 'r') as f:
            existing_data = f.read()
            start_index = existing_data.index('[')
            end_index = existing_data.rindex(']') + 1
            existing_questions = json.loads(existing_data[start_index:end_index])
    except (FileNotFoundError, ValueError, json.JSONDecodeError):
        existing_questions = []

    questions = existing_questions.copy()

    num_questions_per_call = 1  # Reduce to a very small number
    num_questions_total = int(input("How many questions do you want to add for each category and difficulty level? "))

    total_questions = len(categories) * len(difficulty_levels) * num_questions_total
    current_question = 0

    random.shuffle(categories)  # Shuffle the categories list

    for category in categories:
        for difficulty in difficulty_levels:
            for _ in range(0, num_questions_total, num_questions_per_call):
                questions_to_generate = min(num_questions_per_call, num_questions_total - current_question)
                new_questions = generate_questions(category, difficulty, questions_to_generate)
                if not new_questions:
                    print(f"Failed to generate questions for category: {category}, difficulty: {difficulty}")
                    continue
                for question in new_questions:
                    if question and not any(q['question'] == question['question'] for q in questions):
                        question['category'] = category
                        question['difficulty'] = difficulty
                        questions.append(question)
                        with open('questions.js', 'w') as f:
                            f.write("const questions = ")
                            json.dump(questions, f, indent=2)
                            f.write(";")
                current_question += len(new_questions)
                print(f"Total number of questions: {len(questions)}")
                print(f"Progress: {current_question}/{total_questions} questions generated")

    if not questions:
        print("No questions were generated.")
        return

    print("Questions generated and saved successfully.")

if __name__ == "__main__":
    main()
