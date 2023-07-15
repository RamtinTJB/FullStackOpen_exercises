const blogPostRouter = require('express').Router()
const BlogPost = require('../models/blog_post')

blogPostRouter.get('/', (request, response) => {
    BlogPost
        .find({})
        .then(blogs => {
            response.json(blogs)
        })
})

blogPostRouter.post('/', (request, response) => {
    const blog_post = new BlogPost(request.body)

    blog_post
        .save()
        .then(result => {
            response.status(201).json(result)
        })
})

module.exports = blogPostRouter
