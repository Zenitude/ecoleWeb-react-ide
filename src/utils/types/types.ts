export type CodeType = {
    name: string;
    src: string;
    description: string;
    code?: string;
}

export type ContextType = {
    codes: CodeType[],
    setCodes: React.Dispatch<React.SetStateAction<CodeType[]>>
}

export type ContextProps = {
    children: React.ReactNode;
}

export type PreviewProps = {
    tab: number;
    codes: CodeType[]
}

export type ButtonTabProps = {
    source: string;
    description: string;
    panel: string;
    tab: number;
    action: React.Dispatch<React.SetStateAction<number>>;
}

export type IdeProps = {
    tabName: string;
    tab: number;
    codes: CodeType[];
    set: React.Dispatch<React.SetStateAction<CodeType[]>>;
}