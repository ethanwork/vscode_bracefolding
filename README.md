Notes:
- In this folder run "npm install" and then after this run "npm run compile"
- Once these commands finish, navigate to the src/extension.ts file and hit the F5 key, or go to the Run menu 'Start Debugging' command
- Select the VS Code extension debug option
- In the new VS Code window that pops up, open the folder 'csharp_sample_files' included in this project and open the 'csharp_sample.cs'
- Then if on Windows do the 'Ctrl-K' 'Ctrl-/' shortcut to run the 'comment folding' shortcut, which is the type of fold I tagged this custom folding code logic as.
- It should then fold and hide the lines of code that are just a single '{' or '}' curly brace character.
- If you then modify any line of the code and save, it then wipes out this custom formatting for the '{' characters, and no longer hides them. But does leave in place the '}' custom formatter
