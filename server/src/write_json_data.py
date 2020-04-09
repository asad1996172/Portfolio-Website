import json


def create_about_data():
    data = {
        "profile_picture": "img/profile.jpg",
        "first_name": "Asad",
        "last_name": "Mahmood",
        "email_address": "amahmood1@uiowa.edu",
        "mobile_number": "(319) 512-5163",
        "address": "1015 Oakcrest Street Apt G3, Iowa City, IA 52246",
        "resume_path": "resume.pdf",
        "description": '<p class=\"lead mb-5\">I am a second-year PhD student in the department of Computer Science at <a href=\"https://cs.uiowa.edu/\">The University of Iowa</a>. I am advised by <a href=\"http://homepage.cs.uiowa.edu/~psriniva/newsite/index.html\">Dr. Padmini Srinivasan</a> and co-advised by <a href=\"https://homepage.divms.uiowa.edu/~mshafiq/\">Dr. Zubair Shafiq</a> from The University of Iowa. My research is focused on using Natural Language Processing and Machine Learning techniques to achieve user privacy. I also have a keen interest in the fields of Data Science and Software Engineering. Previously, I worked at <a href=\"http://www.tpilums.org/\">TPI Lab</a> in LUMS under the supervision of <a href=\"https://lums.edu.pk/lums_employee/422\">Dr. Fareed Zaffar</a>.</p> <p class=\"lead mb-5\"><span class=\"text-primary\">Interests: </span>I love to play all kinds of sports. Specifically, I like Soccer, Squash and Cricket. I also love hiking.</p>',
        "linkedIn": "https://www.linkedin.com/in/asad1996172/",
        "Github": "https://github.com/asad1996172",
        "Twitter": "https://twitter.com/asad177mahmood",
        "Medium": "https://medium.com/@asad007mahmood",
        "highlights": [
            {"JAN 2020": "Served as an external reviewer in PoPETs 2020."},
            {
                "SEPT 2019": "Achieved 6th position out of 55 submissions at PAN 2019, for model detecting Humans vs Bots on Twitter."},
            {"AUG 2019": "Cleared Qualifying exam of PhD."},
            {"JUL 2019": "Presented our paper at PoPETs in Stockholm, Sweden."},
            {
                "JUN 2019": 'Our paper titled "A Girl Has No Name: Automated Authorship Obfuscation using Mutant-X" got published in PoPETs.'},
            {"AUG 2018": "Joined The University of Iowa for PhD in Computer Science."},
            {"MAY 2018": "Graduated from FAST NU (Lahore Campus)."},
            {"AUG 2017": "Joined LUMS as a Research Assistant under Dr. Fareed Zaffar."},
            {"JUN 2017": "Joined TPI LUMS as a ROR Web Developer Intern."},
            {"SEPT 2016": "Joined FASTCARE Lahore Chapter as a lead Graphic Designer."},
            {"MAR 2016": "Joined NUCES ACM Lahore Chapter as a Graphic Designer."},
            {"AUG 2014": "Started Bachelor's in Computer Science from FAST NU (Lahore Campus)."}
        ]
    }
    with open("about.json", "w") as write_file:
        json.dump(data, write_file, indent=4)


def create_publications_data():
    data = {
        "papers": [
            {
                "name": "A Girl Has No Name: Automated Authorship Obfuscation using Mutant-X",
                "conference_year": "PoPETs 2019",
                "authors": ["Asad Mahmood, ", "Faizan Ahmed, ", "Zubair Shafiq, ", "Padmini Srinivasan ",
                            "and Fareed Zaffar"],
                "total_authors": 5,
                "description": "Stylometric authorship attribution aims to identify an anonymous or disputed document’s author by examining its writing style. The development of powerful machine learning based stylometric authorship attribution methods presents a serious privacy threat for individuals such as journalists and activists who wish to publish anonymously. To counter these, in this paper, we presented an automated authorship obfuscation tool called Mutant-X which uses genetic algorithms (GAs) and sentiment preserving word embeddings.",
                "total_buttons": 3,
                "buttons": [
                    {"paper": "https://petsymposium.org/2019/files/papers/issue4/popets-2019-0058.pdf"},
                    {"code": "https://github.com/asad1996172/Mutant-X"},
                    {"slides": "https://www.slideshare.net/secret/aKHVXj8PXiMm2"}

                ],
                "image": "img/mutant-X.png"
            },
            {
                "name": "Twitter Bots and Gender Detection using Tf-idf",
                "conference_year": "CLEF 2019",
                "authors": ["Asad Mahmood ", "and Padmini Srinivasan"],
                "total_authors": 2,
                "description": "This paper presents another a model that can perform bots and gender detection on Twitter using just the tweets from the respective Twitter user. We show that a simple frequency based approach with a machine learning algorithm i.e., SVM can achieve high accuracy if the preprocessing is done right. In English language. our model detects bots with an accuracy of 91% and gender with an accuracy of 82%. Main strength of this model is its simplicity along-with the ease with which it can be used with other languages.",
                "total_buttons": 2,
                "buttons": [
                    {"paper": "http://www.dei.unipd.it/~ferro/CLEF-WN-Drafts/CLEF2019/paper_253.pdf"},
                    {"code": ""}
                ],
                "image": "img/monitor.png"
            }
        ]
    }
    with open("publications.json", "w") as write_file:
        json.dump(data, write_file, indent=4)


def create_projects_data():
    data = {
        "projects": {
            "data_science": [
                {
                    "name": "Predictive Modelling on Stocks Data",
                    "short_desc": "Flask application that trains different ML Models on stock prices and then show it on a plot.",
                    "description": "This flask based tool compares the predictive modelling power of different Machine/Deep Learning models. For dataset, i have opening, high, low and closing values for different stocks like AAL, AAP, AAPL. Then to train different models, tool provides with a bunch of options like Random Forests, K Nearest Neighbors, SVM, LSTM etc.. Models are implemented using scikit-learn and keras. Performance of each chosen model is shown using Chart.js library.",
                    "total_buttons": 1,
                    "buttons": [
                        {"code": "https://github.com/asad1996172/Predictive-Modelling-on-Stock-Prices"},
                    ],
                    "image": "img/stocks.png"
                },

            ],
            "web_dev": [
                {
                    "name": "Hotel Management System (HMS) Web Application",
                    "short_desc": "A PHP Laravel based web application for hotel management.",
                    "description": "It's a hotel management web application with 3 user types. Customer, person visiting the website for information or booking. This could be guest or a person with their own profile. Then there is manager, who is supposed to add rooms information and lastly there is admin, whose job is to approve tasks done by manager. Every user has their own constraints and permissions have been implemented accordingly.",
                    "total_buttons": 1,
                    "buttons": [
                        {"code": "https://github.com/asad1996172/HMS"},
                    ],
                    "image": "img/hms.png"
                },
            ],
            "mob_dev": [
                {
                    "name": "Android Custom Keyboard",
                    "short_desc": "Android based URDU custom keyboard application.",
                    "description": "This code is a implementation of a custom keyboard for android which extends from InputMethodService and KeyboardView. It has all the functionality of the traditional keyboard like different layout for numeric keys, more characters on long press etc. I used Urdu language for this one but it can be modified for other languages as well. To do that you just need to tweak some files in res/layout. Here you can change the layout of keyboard, add different key bindings and other things as well.",
                    "total_buttons": 1,
                    "buttons": [
                        {"code": "https://github.com/asad1996172/CustomKeyboard"},
                    ],
                    "image": "img/keyboard.png"
                },
                {
                    "name": "Quotastic",
                    "short_desc": "Android based application showing quotes.",
                    "description": "This is a simple Quotes reading android application. Quotes are pre saved into the database using SQLite. Once the application starts, user can read different quotes by pressing the 'GO' button. This button chooses a quote from available quotes randomly and shows it. This code can be extended to learn from user behaviour and then show quotes accordingly e.g., it can learn that you are trying to stay physically active 30 minutes a day and then show you quotes motivating towards fitness.",
                    "total_buttons": 1,
                    "buttons": [
                        {"code": "https://github.com/asad1996172/QuoteTastic"},
                    ],
                    "image": "img/quote.png"
                },
                {
                    "name": "Kids Learning Application",
                    "short_desc": "Android based kids learning application following HCI rules.",
                    "description": "This application was created as a project in HCI course. The task in hand was to create a learning application for kids having ages in the range of 4 - 7. Application was supposed to perform three different tasks. First, provided learning content, second, take quiz related to that content and third, show a report card.",
                    "total_buttons": 1,
                    "buttons": [
                        {"code": "https://github.com/asad1996172/kids"},
                    ],
                    "image": "img/kids.png"
                },
                {
                    "name": "Dodgy Plane",
                    "short_desc": "Unity3D based game.",
                    "description": "This repository contains the code for a Unity3D based android game. Dodgy Plane is a simple game with only two controls. The player can steer the plane either to the left or to the right. Steering is done both to save the plane from obstacles and collect points. All the graphics used in the game were also designed by me using Adobe Photoshop.",
                    "total_buttons": 1,
                    "buttons": [
                        {"code": "https://github.com/asad1996172/dodgy-bird"},
                    ],
                    "image": "img/dodgy.png"
                },
            ]
        }
    }
    with open("projects.json", "w") as write_file:
        json.dump(data, write_file, indent=4)


def create_experience_data():
    data = {
        "experiences": [
            {
                "job_title": "Graduate Research Assistant",
                "image": "img/uiowa.png",
                "company": "The University of Iowa",
                "description": "Research revolves around using Natural Language Processing and Machine Learning to enhance user privacy. Projects include:",
                "total_projects": 3,
                "projects": [
                    "Mutant-X: An automated authorship obfuscation tool made using sentiment preserving word embeddings and genetic algorithms (GAs).",
                    "Twitter Humans v Bots: A SVM based predictive model which, given a tweet, can classify it as written by human or bot with an accuracy of 91%.",
                    "Obfuscation Detection: A tool which uses the power or pre-trained language models like BERT and GPT-2 to detect whether a given text is Obfuscated or not."
                ],
                "dates": "August 2018 - Present"
            },
            {
                "job_title": "Teaching Assistant",
                "image": "img/uiowa.png",
                "company": "The University of Iowa",
                "description": "Duties include checking assignments and leading a discussion session. Courses include:",
                "total_projects": 3,
                "projects": [
                    "Computer Science Fundamentals",
                    "Object Oriented Software Development",
                    "Informatics Project"
                ],
                "dates": "January 2019 - Present"
            },
            {
                "job_title": "Research Assistant",
                "image": "img/lums.png",
                "company": "Lahore University of Management Sciences (LUMS)",
                "description": "Worked under Dr. Fareed Zaffar on projects related to Data Science and Machine Learning. Projects include:",
                "total_projects": 4,
                "projects": [
                    "Reverse Image Search tool using pre-trained VGG-19 and google's, im2txt model.",
                    "Automated detection of in-appropriate video content on YouTube Kids.",
                    "Enhancement of the ad-verification system for OLX Pakistan.",
                    "In-game analysis of soccer matches through a proprietary dataset of events and tracking data of 6000 soccer matches across four different leagues."
                ],
                "dates": "August 2017 - March 2018"
            },
            {
                "job_title": "Web Developer Intern",
                "image": "img/tpi.jpeg",
                "company": "Technology for People Initiative (TPI) LUMS",
                "description": "Worked as a backend Web Developer on a ROR based dataset visualization tool called Statistan using NoSQL (MongoDB).",
                "total_projects": 0,
                "projects": [

                ],
                "dates": "June 2017 - July 2017"
            }
        ]
    }
    with open("experience.json", "w") as write_file:
        json.dump(data, write_file, indent=4)


def create_education_data():
    data = {
        "education": [
            {
                "institution": "The University of Iowa",
                "image": "img/uiowa.png",
                "degree": "PhD in Computer Science",
                "cgpa": "3.26",
                "dates": "August 2018 - Present"
            },
            {
                "institution": "National University of Computer and Emerging Science (FAST)",
                "image": "img/fast.png",
                "degree": "Bachelor's in Computer Science",
                "cgpa": "3.04",
                "dates": "August 2014 - May 2018"
            },
            {
                "institution": "Garrison Degree College",
                "image": "img/garrison.png",
                "degree": "Pre-Engineering (High School)",
                "cgpa": "3.33",
                "dates": "August 2012 - May 2014"
            }
        ]
    }
    with open("education.json", "w") as write_file:
        json.dump(data, write_file, indent=4)


def create_skills_data():
    data = {
        "programming_languages": ['Python', 'JAVA', 'C++', 'PHP', 'SQL', 'Ruby', 'Javascript', 'DART', 'R'],
        "ml_libs": ['Scikit-learn', 'Keras', 'PyTorch'],
        "web_frameworks": ['.NET', 'Laravel', 'ROR'],
        "mob_dev": ["Android", "Unity3D", "Flutter"]
    }
    with open("skills.json", "w") as write_file:
        json.dump(data, write_file, indent=4)


if __name__ == "__main__":
    create_about_data()
    create_publications_data()
    create_projects_data()
    create_experience_data()
    create_skills_data()
    create_education_data()
