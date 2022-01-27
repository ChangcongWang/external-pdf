// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import * as cs from 'cross-spawn'
const configuration = vscode.workspace.getConfiguration('external-pdf')
let command =configuration.get('command') as string
class FileOpener implements vscode.CustomReadonlyEditorProvider {	
	// create new document for given resource
	openCustomDocument(uri: vscode.Uri): vscode.CustomDocument {
		return { uri, dispose: (): void => {} };
	}
	
	// resolve the editor by opening file through other app and closing window
	async resolveCustomEditor(document: vscode.CustomDocument, webviewPanel: vscode.WebviewPanel) {
		// Close the opened active editor
		vscode.commands.executeCommand('workbench.action.closeActiveEditor');
		// Open the pdf file with native app
		vscode.window.showInformationMessage(document.uri.path.slice(1));
		cs.spawn(command,[document.uri.path.slice(1)]);
	}
}
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	// const extensionRoot = vscode.Uri.file(context.extensionPath);
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "external-pdf" is now active!');

	let disposable = vscode.window.registerCustomEditorProvider(
		"external-pdf",
		new FileOpener()
	);
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}
