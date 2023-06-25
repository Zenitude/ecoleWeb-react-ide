import { ButtonContainer } from "./ButtonTab.style"
import { ButtonTabProps } from "../../utils/types/types";

export default function ButtonTab({source, description, panel, tab, action}: ButtonTabProps) {
  return (
    <ButtonContainer data-tab={tab} onClick={() => action(tab)}>
      <img src={source} alt={description} />
      <span>{panel}</span>
    </ButtonContainer>
  )
}
