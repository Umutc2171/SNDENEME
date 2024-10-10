import BlogItem from "./BlogItem"
import BlogItemB from "./BlogItemB"
import BlogItemC from "./BlogItemC"
import "./Blog.css"
const Blog = () => {
  return (
    <section className="blogs blog-page">
    <div className="container">
        <div className="section-title">
            <h2>HİZMETLERİMİZ</h2>      
        </div>
        <ul className="blog-list">
           <BlogItem/>
          <BlogItemB/>
          <BlogItemC/>
        </ul>
    </div>
</section>
  )
}

export default Blog