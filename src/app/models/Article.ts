export interface IArticleResult{
    content: IArticle[],
    currentPage:number,
    totalPages:number
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