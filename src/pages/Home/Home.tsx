import { useState, useContext } from "react";
import { HomeContainer, GlobalStyle, NavigationContainer, ViewContainer } from "./Home.style";
import { Context } from "../../utils/context/context";
import { CodeType } from "../../utils/types/types";
import ButtonTab from "../../components/ButtonTab/ButtonTab";
import Ide from "../../components/Ide/Ide";
import Preview from "../../components/Preview/Preview";

export default function Home () {
    const [ indexTab, setIndexTab ] = useState(0);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const { codes, setCodes } = useContext(Context)!;
    
    return(
        <>
            <GlobalStyle />
            <HomeContainer>
                <NavigationContainer>
                    { codes.map((code: CodeType, index: number) => (
                        <ButtonTab 
                            key={`${code.name}`} 
                            source={code.src} 
                            description={code.description} 
                            panel={code.name} 
                            tab={index}
                            action={setIndexTab}
                        />
                    ))}
                </NavigationContainer>
                <ViewContainer>
                    {
                        indexTab === 0 
                        ? (<Preview tab={indexTab} codes={codes}></Preview>)
                        : (<Ide tabName={`${codes[indexTab].name}`} tab={indexTab} set={setCodes} codes={codes}></Ide>)
                    }
                </ViewContainer>
            </HomeContainer>
        </>
    )
}