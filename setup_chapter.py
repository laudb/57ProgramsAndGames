#! python3

'''
This program creates a new folder and the needed files
for each chapter of this project from the user input.
'''

# import the relevant packages
import os, sys


# setup project
current_path = os.getcwd()
current_folder = current_path.split('/')[-1]
print('Currently working from ', current_folder)

if current_folder != '57ProgramsAndGames':
    print('Please navigate to root folder')
    sys.exit()

if len(sys.argv) < 2:
    print('Please add name of the project while running this command')
    sys.exit()
    

# take the cleaned argument from the commandline.
project_name = sys.argv[1]
project_name = project_name.lower()
print(project_name) 

# check that folder exists first, create folder using the validated input.
if os.path.exists(project_name):
    print('Project Folder already exisits')
    sys.exit()
else:
    os.mkdir(project_name)

extensions = ['bas','md','js']

# create the files in the folder with validated input: [PROJECT_NAME.BAS, EXAMPLE.md, project_name.js].
## ugly file namer

files = []

for extension in extensions:
    file = str(project_name)
    if extension == 'bas':
        file = file.upper()
        extension = extension.upper()
        file = str(file)+'.'+str(extension)
        files.append(file)
    elif extension == 'md':
        file = 'example'
        file = file.upper()
        extension = extension.upper()
        file = str(file)+'.'+str(extension)
        files.append(file)
    elif extension == 'js':
        file = file.lower()
        extension = extension.lower()
        file = str(file)+'.'+str(extension)
        files.append(file)
    else:
        print('unhandled case', extension)


# create files
for file in files:
    file = os.path.join(current_path, project_name, file)
    print(file)
    file = open(file, 'w')
    file.write('\n')

# Give feedback to the user about number of files created and display files names.
new_folder_path = os.path.join(current_path, project_name)
new_files = os.listdir(new_folder_path)
print(len(new_files),' files created ', new_files)