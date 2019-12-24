
export const SET_TEXT_FILTER = ( text = '' ) => (
    {
        type : 'SET_TEXT_FILTER' ,
        text
    }
)

export const SET_START_DATE = startDate => (
    {
        type : 'SET_START_DATE' ,
        startDate
    }
)

export const SET_END_DATE = endDate => (
    {
        type : 'SET_END_DATE' ,
        endDate
    }
)

export const SORT_BY_AMOUNT = () => (
    {
        type : 'SORT_BY_AMOUNT'
    }
)
export const SORT_BY_DATE = () => (
    {
        type : 'SORT_BY_DATE'
    }
)
