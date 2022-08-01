import * as vscode from 'vscode';

export function deactivate() { }

export function activate(context: vscode.ExtensionContext) {
	vscode.languages.registerFoldingRangeProvider({ scheme: 'file', language: 'csharp' }, new MyFoldingRangeProvider());
}

class MyFoldingRangeProvider implements vscode.FoldingRangeProvider {
	// _onDidChangeFoldingRangeEmitter = new vscode.EventEmitter<void>();
	// onDidChangeFoldingRanges = this._onDidChangeFoldingRangeEmitter.event;

	// constructor() {
	// 	setInterval(() => {
	// 		this._onDidChangeFoldingRangeEmitter.fire();
	// 	}, 1000);
	// }

	provideFoldingRanges(document: vscode.TextDocument, context: vscode.FoldingContext, token: vscode.CancellationToken): vscode.FoldingRange[] {
		let ranges: vscode.FoldingRange[] = [];
		for (let i = 0; i < document.lineCount; i++) {
			const line = document.lineAt(i).text.trim();
			if (line === "{" || line === "}") {
				ranges.push(new vscode.FoldingRange(i - 1, i, vscode.FoldingRangeKind.Comment));
			}
		}
		return ranges;
	}
}
