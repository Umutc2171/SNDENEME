import "./BlogDeteils.css";

const BlogDetailsBilgisayar = () => {
  return (
    <section className="single-blog">
      <div className="container">
        <article>
          {/* <figure>
            <img src="" alt="Blog görseli"/>
          </figure> */}
          <div className="blog-wrapper">
            <div className="blog-meta">
              {/* Blog meta bilgileri buraya gelecek */}
            </div>
            <h1 className="blog-title">
              Bilgisayar ve Laptop Bakım ve Tamir Hizmetlerimiz
            </h1>
            <div className="blog-content">
              <h2>Güçlendirme Hizmetleri</h2>
              <ul>
                <li>Bilgisayarınızın performansını artırarak, en yeni yazılım ve donanımlarla güçlendiriyoruz.</li>
              </ul>
              <h2>Onarım Hizmetleri</h2>
              <ul>
                <li>Bilgisayarınızdaki tüm arızaları tespit edip, hızlı ve etkili bir şekilde onarıyoruz.</li>
              </ul>
              <h2>Bakım Hizmetleri</h2>
              <ul>
                <li> Bilgisayarınızın düzenli bakımını yaparak, uzun ömürlü ve sorunsuz bir kullanım sağlıyoruz.</li>
              </ul>
              <h2>Yazılım Hizmetleri</h2>
              <ul>
                <strong>Ömürlük Program ve Uygulama Yükleme</strong> 
                <li>İhtiyacınıza uygun, lisanslı ve ömür boyu kullanabileceğiniz program ve uygulamaları yüklüyoruz.</li>
                <strong>Windows Orijinalleştirme</strong>
                <li> Windows işletim sisteminizi orijinal hale getiriyoruz.</li>
                <strong>Farklı Windows Serileri Kurulumu</strong> 
                <li>İhtiyacınıza uygun farklı Windows işletim sistemlerini kuruyoruz.</li>
                <strong>Zararlı Yazılım Temizleme</strong>
                <li> Bilgisayarınızdaki zararlı yazılımları tespit edip temizliyoruz.</li>
                <strong>Ömürlük Antivirüs Yazılımı Yükleme</strong>
                <li> Bilgisayarınızı güvence altına almak için ömür boyu kullanabileceğiniz antivirüs yazılımlarını yüklüyoruz.</li>
              </ul>
              <h2>İnternet Hizmetleri</h2>
              <ul>
                <li>İnternet Problemleri Çözümü: İnternette yaşadığınız tüm sorunlara hızlı ve etkili çözümler sunuyoruz.</li>
              </ul>
              <h2>Kurumsal Hizmetler</h2>
              <ul>
                <li>Bakım Sözleşmeleri ve Uzaktan Destek: Şirketler için bakım sözleşmeleri yaparak, uzaktan destek hizmeti sağlıyoruz.</li>
              </ul>
              <blockquote>
                <h4>Kasanız ve Laptopunuz Kaliteli Ellerde İşlem Görsün.</h4>
              </blockquote>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default BlogDetailsBilgisayar;