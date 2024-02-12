'use client'

import { Back } from '@/components/ui/back'
import { FormWrapper } from '@/components/ui/formWrapper'
import { Section } from '@/components/ui/section'
import { SignUp } from '@/components/ui/signUp'

import {
    SH1,
    SHr,
    SDesc,
    SDate,
    SAuthor,
    SFoterDescription,
} from './style'

import { INews } from '@/types/newsType'

export const NewsPage = ({ newsItem, cityId }: { newsItem: INews; cityId: number; }) => {
    const date = new Date(newsItem.date_create)
    return(
        <Section>
            <Back/>
            <SH1>
                {newsItem?.title}
            </SH1>
            <SHr/>
            <SDesc dangerouslySetInnerHTML={{ __html: newsItem?.description }}/>
            <SFoterDescription>
                <SDate>
                    {`${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`}
                </SDate>
                <SAuthor>
                    Автор:
                    <span
                        style={{'marginLeft': '5px'}}
                    >
                        {newsItem?.author}
                    </span>
                </SAuthor>
            </SFoterDescription>
            <FormWrapper mainPage={true}>
                
                <SignUp cityId={cityId}/>
            </FormWrapper>
        </Section>
    )
}