'use client'

import { Back } from '../../ui/back'
import { FormWrapper } from '../../ui/formWrapper'
import { Section } from '../../ui/section'
import { SignUp } from '../../ui/signUp'

import {
    SH1,
    SHr,
    SDesc,
    SAuthor,
    SDate,
    SFoterDescription
} from '../newsPage/style'

import { IStocks } from '../../../types/stocksType'

export const StockPage = ({ stockItem, cityId }: { stockItem: IStocks; cityId: number }) => {
    const date = new Date(stockItem.date_create)

    return(
        <Section>
            <Back/>
            <SH1>
                {stockItem?.title}
            </SH1>
            <SHr/>
            <SDesc dangerouslySetInnerHTML={{ __html: stockItem?.description }}/>
            <SFoterDescription>
                <SDate>
                    {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
                </SDate>
                <SAuthor>
                    Автор: 
                    <span
                        style={{'marginLeft': '5px'}}
                    >
                        {stockItem?.author}
                    </span>
                </SAuthor>
            </SFoterDescription>
            <FormWrapper mainPage={true}>
                <SignUp cityId={cityId}/>
            </FormWrapper>
        </Section>
    )
}