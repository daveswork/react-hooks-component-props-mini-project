
function Article({someKey,title,date="January 1, 1970",preview}){

    return (
        <article key={someKey}>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
        </article>
    );
}

export default Article;