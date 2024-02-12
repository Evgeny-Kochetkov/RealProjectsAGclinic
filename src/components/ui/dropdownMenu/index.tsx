import {
    SDropdownWrap,
    SDropdown,
    SDropdownContent
} from './style'

export const DropdownMenu2 = ({children, level}: {children: React.ReactNode, level: 1 | 2}) => {
    return (
        <SDropdownWrap
            level={level}
            className='dropdown_menu'
        >
            <SDropdown
                level={level}
            >
                <SDropdownContent>
                    {children}
                </SDropdownContent>
            </SDropdown>
        </SDropdownWrap>
    )
}