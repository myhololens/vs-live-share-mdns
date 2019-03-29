import vscode from "vscode";
import startCmd from "./start";
import discoverCmd from "./discover";
import { extNamespace } from "./const";

export function activate(context: vscode.ExtensionContext) {
  const commands = {
    "start": startCmd,
    "discover": discoverCmd
  };

  for (let command in commands) {
    const callback = commands[command];
    command = `${extNamespace}.${command}`;
    const disposable = vscode.commands.registerCommand(command, callback);
    context.subscriptions.push(disposable);
  }
}

// this method is called when your extension is deactivated
export function deactivate() { }
