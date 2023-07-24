const dummy = (blogs) => {
    return 1
}

const totalLikes = (blogs) => {
    return blogs.length === 0
        ? 0
        : blogs.reduce((acc, curr) => acc + curr.likes, 0)
}

const favoriteBlog = (blogs) => {
    if (blogs.length === 0) return {}

    const favBlog = blogs.reduce((prev, curr) => {
        return prev.likes > curr.likes ? prev : curr
    })

    return {
        title: favBlog.title,
        author: favBlog.author,
        likes: favBlog.likes
    }
}

const mostBlogs = (blogs) => {
    if (blogs.length === 0) return {}
    const authorBlogMap = {}

    for (let blog of blogs) {
        if (blog.author in authorBlogMap) {
            authorBlogMap[blog.author] += 1
        } else {
            authorBlogMap[blog.author] = 1
        }
    }

    let mostBlogAuthor = ""
    let mostBlogsNum = 0

    for (const [author, numBlogs] of Object.entries(authorBlogMap)) {
        if (numBlogs > mostBlogsNum) {
            mostBlogAuthor = author
            mostBlogsNum = numBlogs
        }
    }

    return {
        author: mostBlogAuthor,
        blogs: mostBlogsNum
    }
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs
}
