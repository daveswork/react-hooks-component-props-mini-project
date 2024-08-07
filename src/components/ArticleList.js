import Article from "./Article"

function ArticleList({posts}){

    const articles = posts.map((post,index) =>{
        return(<Article key={index} title={post.title} date={post.date} preview={post.preview}/>)
        })
    
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList