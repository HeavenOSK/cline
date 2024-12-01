import defaultShell from "default-shell";
import osName from "os-name";
import os from "os"

export const SYSTEM_INFORMATION = (cwd: string) => `SYSTEM INFORMATION

Operating System: ${osName()}
Default Shell: ${defaultShell}
Home Directory: ${os.homedir().toPosix()}
Current Working Directory: ${cwd.toPosix()}`
