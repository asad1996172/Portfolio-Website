from flask import Flask, render_template, request, send_from_directory
import xmltodict
import json

app = Flask(__name__)

@app.route('/')
def main():
    with open('about.json', 'r') as file:
        data = file.read().replace('\n', '')
    about_section_data = json.loads(data)
    about_section_data["highlights_length"] = len(about_section_data['highlights'])

    with open('publications.json', 'r') as file:
        data = file.read().replace('\n', '')
    publications_section_data = json.loads(data)
    publications_section_data["total_papers"] = len(publications_section_data['papers'])

    return render_template('index.html', about_data=about_section_data, publications_data=publications_section_data)

# main driver function
if __name__ == '__main__':
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()