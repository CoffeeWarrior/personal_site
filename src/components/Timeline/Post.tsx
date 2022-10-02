import styled, { css } from "styled-components";
import { colors } from "../../styling";
import React, { useRef } from "react"

export type PostProps = {
    content : string,
    year: number,
    technology?: string,
    timelineWidth: number
}

const toPx = (val: number): string => val + "px"

export const Post: React.FC<PostProps> = ({content, year, technology, timelineWidth}) => {

    const timelineTickDiameter = 12
    
    const YearTextSize = 30
    const PostWrapperMargin = 40
    const borderWidth = 2

    const tickTop =  (.5 * YearTextSize) - (.5 * timelineTickDiameter)

    const PostWrapper = styled.div`
        position: relative;
        margin-left: ${toPx(PostWrapperMargin)}
    `

    const Year = styled.h1`
        font-size: ${toPx(YearTextSize)};
        color: ${colors.white};
    `

    const Content = styled.p`
    `

    const TimelineTick = styled.div`
        position: absolute;
        box-sizing: content-box;
        width: ${toPx(timelineTickDiameter)};
        height: ${toPx(timelineTickDiameter)};
        top: ${toPx(tickTop)};
        left: ${toPx(-1 * (PostWrapperMargin + (.5 * timelineTickDiameter ) + (.5 * timelineWidth) + borderWidth))};
        border-radius: 990px;
        border: ${toPx(borderWidth)} solid ${colors.blue};
        background: ${colors.whiterWhite};
    `


    return <PostWrapper>
        <TimelineTick/>
        <Year>{year}</Year>
        <Content>{content}</Content>
    </PostWrapper>
}