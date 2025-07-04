// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "nveeyt" is now "Neatly Veet"!');
	console.log('Veet\'lly deet in the beetley wheat.');
	console.log('Schmeet\'lly dee, kgyeet\'lly doo, Vtyeet a thing and egg, I want but two.')

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with  registerCommand
	// The commandId parameter must match the command field in package.json
	async function fetchJoke() {
		const res = await fetch(
			"https://icanhazdadjoke.com",
			{
				"headers": {
					"Accept": "application/json"
				}
			}
		);
		const data = await res.json();
		
		vscode.window.showInformationMessage(
			`Dad says: ${data.joke}`
		)
	};

	const dreamberd_disposable = vscode.commands.registerCommand('nveeyt.DadJoke', fetchJoke);

	context.subscriptions.push(dreamberd_disposable);
}

// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
