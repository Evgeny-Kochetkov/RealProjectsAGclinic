import { SBackWr, SFrontWr } from './style'

export const FormWrapper = ({mainPage, children} : {mainPage: boolean, children: React.ReactNode}) => {
    return(
        <SBackWr mainPage={mainPage}>
            <SFrontWr mainPage={mainPage}>
                {children}
            </SFrontWr>
        </SBackWr>
    )
}