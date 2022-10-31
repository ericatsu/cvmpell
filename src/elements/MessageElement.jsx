import styled from "styled-components";

export const MainDiv = styled.div`
    float: left;
    width: 100%;
    padding: 50px 0px;
`

export const RowDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
`

export const LeftBlock = styled.div`
    width: 50%;
    position: relative;
    background-size: cover;
    background-position: center;
    align-content: center;
    padding: 80px 50px;
    border-radius: 5px;
    overflow: hidden;

`

export const RightBlock = styled.div`
    width: 50%;
    float: left;
    margin-bottom: 0;
`
export const RowC = styled.div`
    padding-right: 0;
`
export const RowItems = styled.div`
    display: flex;
    flex-wrap: wrap;
`
export const ColImage = styled.div`
    background: black;
    display: flex;
    flex-wrap: wrap;

    @media (min-width: 768px){
    flex: 0 0 50%;
    max-width: 50%
    }
`
export const ColText = styled.div`
    background: #f5f5f5;
    -ms-flex-align: center;
    align-items: center;
    display: -ms-flexbox;
    display: flex;

    @media (min-width: 768px){
    flex: 0 0 50%;
    max-width: 50%
    }
`

