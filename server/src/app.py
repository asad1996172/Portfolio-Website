from flask import Flask, render_template, request, send_from_directory
import requests as rs
import json
import pandas as pd
import os

app = Flask(__name__)


def generate_colored_tags(listt, colored_tags):
    output = ''
    for tag in listt:
        temp = '<a class="btn btn-primary" style="margin: 3px;padding-left: 10px; padding-right: 10px; color: white; background-color: ' + \
               colored_tags[tag] + ' !important; border-color: ' + colored_tags[
                   tag] + ';" role="button">' + tag + '</a>'
        output += temp
    return output


@app.route('/')
def main():
    print(os.getcwd())
    with open('about.json', 'r') as file:
        data = file.read().replace('\n', '')
    about_section_data = json.loads(data)
    about_section_data["highlights_length"] = len(about_section_data['highlights'])

    with open('publications.json', 'r') as file:
        data = file.read().replace('\n', '')
    publications_section_data = json.loads(data)
    publications_section_data["total_papers"] = len(publications_section_data['papers'])

    with open('projects.json', 'r') as file:
        data = file.read().replace('\n', '')
    projects_section_data = json.loads(data)
    projects_section_data["total_data_science"] = len(projects_section_data['projects']['data_science'])
    projects_section_data["total_web_dev"] = len(projects_section_data['projects']['web_dev'])
    projects_section_data["total_mob_dev"] = len(projects_section_data['projects']['mob_dev'])

    with open('experience.json', 'r') as file:
        data = file.read().replace('\n', '')
    experience_section_data = json.loads(data)
    experience_section_data["total_experiences"] = len(experience_section_data['experiences'])

    with open('education.json', 'r') as file:
        data = file.read().replace('\n', '')
    education_section_data = json.loads(data)
    education_section_data["total_education"] = len(education_section_data['education'])

    with open('skills.json', 'r') as file:
        data = file.read().replace('\n', '')
    skills_section_data = json.loads(data)
    skills_section_data["total_programming_languages"] = len(skills_section_data['programming_languages'])
    skills_section_data["total_ml_libs"] = len(skills_section_data['ml_libs'])
    skills_section_data["total_web_frameworks"] = len(skills_section_data['web_frameworks'])
    skills_section_data["total_mob_dev"] = len(skills_section_data['mob_dev'])

    response = rs.get(
        'https://docs.google.com/spreadsheet/ccc?key=1o_7aI4gwjiMyszKZUv43DJKH5NoWx4_R1xo4nUpyPqc&output=csv')
    assert response.status_code == 200, 'Wrong status code'
    open('papers_bib.csv', 'wb').write(response.content)
    df = pd.read_csv('papers_bib.csv')
    unique_tags = []
    for index, row in df.iterrows():
        listt = row['Tags'].split('||')
        listt = [elem.strip() for elem in listt]
        unique_tags.extend(listt)
    # Colors from https://www.w3schools.com/cssref/css_colors.asp
    available_colors = ['Brown', 'Chocolate', 'DarkBlue', 'DarkGreen', 'DarkMagenta', 'DarkOrange', 'DarkSlateGrey',
                        'GoldenRod', 'Indigo', 'LightGreen']
    unique_tags = sorted(list(set(unique_tags)))
    colored_tag_dict = {}
    for index, tag in enumerate(unique_tags):
        colored_tag_dict[tag] = available_colors[index]

    df['paper_with_url'] = df.apply(lambda x: "<a href='" + x['URL'] + "'>" + x['Paper'] + "</a>", axis=1)
    df['colored_tags'] = df.apply(lambda x: generate_colored_tags([elem.strip() for elem in x['Tags'].split('||')], colored_tag_dict), axis=1)

    unique_tags = generate_colored_tags(unique_tags, colored_tag_dict)

    return render_template('index.html', about_data=about_section_data, publications_data=publications_section_data,
                           projects_data=projects_section_data, experience_data=experience_section_data,
                           education_data=education_section_data, skills_data=skills_section_data,
                           unique_tags=unique_tags, papers_data=df)


# main driver function
if __name__ == '__main__':
    # run() method of Flask class runs the application
    # on the local development server.
    app.run()
