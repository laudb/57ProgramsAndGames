#! python3

# import the relevant packages
import os, sys

# setup project
current_path = os.getcwd()
current_folder = current_path.split('/')[-1]
print('currently working from ', current_folder)


if current_folder != '57ProgramsAndGames':
    print('Please navigate to root folder')
    sys.exit()


if len(sys.argv) < 2:
    print('Please add name of the project while running this command')
    sys.exit()

# take the cleaned argument from the commandline.
project_name = sys.argv[1]
print(project_name) 

# format project name to lowercase text.
project_name = project_name.lower()

# create folder using the validated input.
# # confirm that folder exists, then change into folder. 
if os.path.exists(project_name):
    print('Project Folder already exisits')
    sys.exit()
else:
    os.mkdir(project_name)

extensions = ['bas','md','js']
# create the files in the folder with validated input: [PROJECT_NAME.BAS, project_name.js, EXAMPLE.md].
# files.append(project_name, 'example')
## ugly file creator

files = []

for extension in extensions:
    if extension == 'bas':
        file = str(project_name)
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
        file = str(project_name)
        file = file.lower()
        extension = extension.lower()
        file = str(file)+'.'+str(extension)
        files.append(file)
    else:
        print('unhandled case', extension)


# project_name = project_name.upper()
print(files)



# file_array.append()

# # confirm that folder exists, then change into folder. 
# if os.path.exists(project_name):
#     pass


for file in files:
    print(os.path.join(current_path, project_name, file))

# Give feedback to the user about number of files created and display files names.


