export interface IPostResult{
    content: IPost[],
    currentPage:number,
    totalPages:number
}

export interface IPost {
    doctorName: string,
    postId: number,
    publishDate: string,
    isPublished: boolean,
    category: string,
}