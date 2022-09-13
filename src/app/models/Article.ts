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

export interface IArticleReqest {
    Name: string,
    Tags:string,
    Body:string,
    Reference:string,
    RelatedArticle:string,
    LastModifiedBy:string,
    CreatedBy:string,
    Createdon:string,
    LastModifiedOn:string
}