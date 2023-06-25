import { Area } from "./Ide.style";
import { IdeProps } from "../../utils/types/types";

export default function Ide({tabName, tab, set, codes}: IdeProps) {

  function updateCode(e: React.ChangeEvent<HTMLTextAreaElement>, tab: number) {
    codes[tab].code = e.currentTarget.value;
    set([...codes]);
  }

  return (
    <Area 
      className={tabName} 
      spellCheck={"false"} 
      data-tab={tab}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => updateCode(e,tab)}
      value={codes[tab].code}
    ></Area>
  )
}
