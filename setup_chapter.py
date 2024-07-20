#! python3

"""
This program creates a new folder and the needed *.BAS, *.MD, *.JS files
for each chapter of this project from the user input.
"""

# import the relevant packages
import os, sys


# setup project
current_path = os.getcwd()
current_folder = current_path.split("/")[-1]
destination_folder = "chapters"
print("Currently working from ", current_folder)

if current_folder != "57ProgramsAndGames":
    print("Please navigate to root folder")
    sys.exit()

if len(sys.argv) < 2:
    print("Please add name of the project while running this command")
    sys.exit()


# take the cleaned argument from the commandline.
user_input = sys.argv[1]
project_name = user_input.lower()


def create_project_path(folder_name):
    project_path = f"chapters/{folder_name}"
    print(project_path)
    # check that folder exists first, create folder using the validated input.
    if os.path.exists(project_path):
        print("Project Folder already exisits")
        sys.exit()
    else:
        os.mkdir(project_path)
        return project_path


def generate_file_names(project_name):
    """
    Handles generation of file names.
    """
    extensions = ["bas", "md", "js"]

    files = []

    # loop through file extensions and create their respective files
    for extension in extensions:
        file = str(project_name)
        if extension == "bas":
            file = file.upper()
            extension = extension.upper()
            file = str(file) + "." + str(extension)
            files.append(file)
        elif extension == "md":
            file = "example"
            file = file.upper()
            extension = extension.upper()
            file = str(file) + "." + str(extension)
            files.append(file)
        elif extension == "js":
            file = file.lower()
            extension = extension.lower()
            file = str(file) + "." + str(extension)
            files.append(file)
        else:
            print("unhandled case", extension)

    return files


def generate_files(input_path, files):
    """
    Generates files which are empty.
    """
    # create files
    try:
        for file_name in files:
            file_path = os.path.join(input_path, file_name)
            file = open(file_path, "w")
            file.write("\n")
        return True
    except Exception as e:
        return False


project_path = create_project_path(project_name)
generated_file_names = generate_file_names(project_name)
full_path = f"{current_path}/{project_path}"
generate_files(full_path, generated_file_names)

# Give feedback to the user about number of files created and display files names.
new_files = os.listdir(full_path)
print(len(new_files), " files created ", new_files)
