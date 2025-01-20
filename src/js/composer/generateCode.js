export function generateCode(commandFlow) {
  // 检查是否包含异步函数
  const hasAsyncFunction = commandFlow.some((cmd) => cmd.isAsync);

  let code = hasAsyncFunction ? ["async function run() {"] : [];
  const indent = hasAsyncFunction ? "  " : "";

  commandFlow.forEach((cmd) => {
    // 跳过禁用的命令
    if (cmd.disabled) return;
    if (!cmd.code) return;
    let line = indent;

    if (cmd.outputVariable) {
      line += `let ${cmd.outputVariable} = `;
    }

    let awaitCmd = cmd.isAsync ? "await " : "";
    line += `${awaitCmd} ${cmd.code}`;
    code.push(line);
  });

  if (hasAsyncFunction) {
    code.push("}"); // Close the async function
    code.push("run();"); // Call the function
  }

  return code.join("\n");
}
