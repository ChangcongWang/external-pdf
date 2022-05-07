# External-exe

This vscode extension allows you to open pdf and viedo(mp4,avi,mkv,wmv) files with your external pdf viewer and viedo player.

## How to use it
Open your pdf or viedo in VSCode and it will open with your default application.  

If you wish open with other application. Edit the configuration of this extension as the path of your previewer and viedo.

If you couldn't open the pdf or viedo successfully. Please check the path of your pdf. It will displayed in the message box in the lower right corner. Still haven't solved your problem? Please commit issue on github.

## configuration
external-pdf.command: The path of your external pdf viewer. Default(Nothing inside) using default pdfviewer.
external-viedo.command: The path of your viedo player. Default(Nothing inside) using default viedo player.  
(e.g. C:\Program Files (x86)\Adobe\Acrobat DC\Acrobat\Acrobat.exe, D:\software\SumatraPDF.exe).  
## Reference
https://github.com/corentinartaud/vscode-pdfpreview  
https://github.com/James-Yu/LaTeX-Workshop  