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
            {"date": "JAN 2020", "description": "Served as an external reviewer in PoPETs 2020."},
            {"date": "JAN 2020", "description": "Served as an external reviewer in PoPETs 2020."}
        ]
    }
    with open("about.json", "w") as write_file:
        json.dump(data, write_file)

create_about_data()