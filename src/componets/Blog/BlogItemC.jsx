import "./BlogItem.css"

const BlogItem1 = () => {
  return (
    <li className="blog-item">
 
    
    <a href="/Hizmetlerimiz/Alarm" className="blog-image">
        <img src="/img/Blog/Alarm Sistemi.png" alt="Alarm"/>
    </a>
    <div className="blog-info">
        <div className="blog-info-top">
        </div>
        <div className="blog-info-center">
            <a href="/Hizmetlerimiz/Alarm">Alarm Sistemlerimiz</a>
        </div>
        <div className="blog-info-bottom">
            <a href="/Hizmetlerimiz/Alarm">Daha Fazlası</a>
        </div>       
    </div>
</li>



  )
}

export default BlogItem1