type member = {
    id: string,
    mainWork: string,
    works: string,
    name: string,
    imageSrc: string,
    birthplace: string,
    hobby: string,
    others: string,
}

type InquiryDataType = {
    typeOfInquiry: string
    name: string
    furigana: string
    email: string
    number?: number
    companyName?: number
    address?: number
    inquiryDetails: string
    agree: boolean

}

type Article = {
    id: number;
    publishedAt: string;
    Title: string;
    category: {
        Name: string
    };
    Body: string
}