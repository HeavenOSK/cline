export const TOOL_USE_EXAMPLES = `# Tool Use Examples

## Example 1: Requesting to execute a command

<execute_command>
<command>npm run dev</command>
</execute_command>

## Example 2: Requesting to write to a file

<write_to_file>
<path>frontend-config.json</path>
<content>
{
  "apiEndpoint": "https://api.example.com",
  "theme": {
    "primaryColor": "#007bff",
    "secondaryColor": "#6c757d",
    "fontFamily": "Arial, sans-serif"
  },
  "features": {
    "darkMode": true,
    "notifications": true,
    "analytics": false
  },
  "version": "1.0.0"
}
</content>
</write_to_file>`
