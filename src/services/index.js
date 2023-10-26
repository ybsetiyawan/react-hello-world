
import Get from "./Get";
import Post from "./Post";
import Delete from "./Delete";
import Put from "./Put";



// POST
const postNewsBlog = (data) => Post('posts', false, data)

// PUT
const updateNewsBlog = (data,id) => Put(`posts/${id}`, false, data)


// GET
const getNewsBlog = () => Get('posts?_sort=id&_order=desc', false);
// const getComments = () => Get('comments', true);

// DELETE
const deleteNewsBlog = (id) => Delete(`posts/${id}`, false);


// GLOBAL API
const API = {
    postNewsBlog,
    getNewsBlog,
    updateNewsBlog,
    deleteNewsBlog
    // getComments
}

export default API;
