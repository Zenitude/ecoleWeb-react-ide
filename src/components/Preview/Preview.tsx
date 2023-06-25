import { PreviewContainer } from "./Preview.style";
import { PreviewProps } from "../../utils/types/types";

export default function Preview({tab , codes}: PreviewProps) {
  const srcDoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>${codes[2].code}</style>
      </head>
      <body>
        ${codes[1].code}

        <script>
          ${codes[3].code}
        </script>
      </body>
      
    </html>
  `;
  return (
    <PreviewContainer srcDoc={srcDoc} sandbox="allow-scripts" data-tab={tab} />
  )
}
