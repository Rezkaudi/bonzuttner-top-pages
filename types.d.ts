type member = {
    id: string,
    mainWork: {
        ja: string,
        en: string
    },
    works: {
        ja: string,
        en: string
    },
    name: string,
    imageSrc: string,
    birthplace: {
        ja: string,
        en: string
    },
    hobby: {
        ja: string,
        en: string
    },
    others: {
        ja: string,
        en: string
    },
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


type Category = {
    id: string,
    documentId: string,
    Name: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string
}

