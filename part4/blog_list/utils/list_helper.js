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

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog
}
