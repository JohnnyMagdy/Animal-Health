export interface IArticleResult {
    content: IArticle[],
    currentPage: number,
    totalPages: number
}

export interface IArticle {
    name: string,
    date: Date,
    status: string, //Draft - Published - De-activated
    type: string, //Article - Post
    createdBy: string,
    createdOn: Date,
    lastModifiedBy: string,
    lastModifiedOn: string
}

// export interface IArticleReqest {
//     Title: string,
//     Tags: string,
//     Body: string,
//     Refrences: string,
//     RelatedArticle: string,
//     LastModifiedBy: string,
//     CreatedBy: string,
//     CreatedOn: string,
//     LastModifiedOn: string
// }

export interface IArticleDetails {
    adminEditedByID: string, // LastModifiedBy
    authorName: string, // CreatedBy
    body: string, // Body
    category: string, // ????
    editDate: string, // LastModifiedOn
    heading: string, // Title
    // image: null // ????
    isPublished: boolean, // ????
    publishDate: string, // CreatedOn
    reference: string, // Refrences
    // Tags
    // RelatedArticle
}
