import { SH1, SHr } from "./style"

export const Title = ({text}: {text: string}) => {
    return (
        <>
            <SH1>
                {text}
            </SH1>
            <SHr />
        </>
    )
}