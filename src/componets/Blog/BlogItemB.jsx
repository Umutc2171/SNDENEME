import "./BlogItem.css"

const BlogItem1 = () => {
  return (
    <li className="blog-item">
    <a href="/Hizmetlerimiz/Bilgisayar" className="blog-image">
        <img src="/img/Blog/Bilgisayar Sistemlerimiz.png" alt="Bilgisayar"/>
    </a>
    <div className="blog-info">
        <div className="blog-info-top">
        </div>
        <div className="blog-info-center">
            <a href="/Hizmetlerimiz/Bilgisayar">Bilgisayar Sistemlerimiz</a>
        </div>
        <div className="blog-info-bottom">
            <a href="/Hizmetlerimiz/Bilgisayar">Daha Fazlası</a>
        </div>       
    </div>

    <a href="/Hizmetlerimiz/ServerK" className="blog-image">
        <img src="img/Blog/Server Ve Kabinet.png" alt="Bilgisayar"/>
    </a>
    <div className="blog-info">
        <div className="blog-info-top">
        </div>
        <div className="blog-info-center">
            <a href="/Hizmetlerimiz/ServerK">Server Kurulum Hizmetlerimiz</a>
        </div>
        <div className="blog-info-bottom">
            <a href="/Hizmetlerimiz/ServerK">Daha Fazlası</a>
        </div>       
    </div> 

    
</li>



  )
}   

export default BlogItem1