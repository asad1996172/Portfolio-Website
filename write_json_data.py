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
            {"SEPT 2019": "Achieved 6th position out of 55 submissions at PAN 2019, for model detecting Humans vs Bots on Twitter."},
            {"AUG 2019": "Cleared Qualifying exam of PhD."},
            {"JUL 2019": "Presented our paper at PoPETs in Stockholm, Sweden."},
            {"JUN 2019": 'Our paper titled "A Girl Has No Name: Automated Authorship Obfuscation using Mutant-X" got published in PoPETs.'},
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


if __name__ == "__main__":
    create_about_data()
    create_publications_data()
