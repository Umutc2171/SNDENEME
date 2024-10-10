
import Proptyes from  "prop-types"

function SliderItem({imageSrc}) {

  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" />
      </div>
      <div className="container">
        <p className="slider-title">Sn Bilgisayar Ve Güvenlik Sistemleri</p>
        <h2 className="slider-heading">Hizmetimizi Değerlendirebilirsiniz</h2>
        <a href="https://g.page/r/CbWS7aiq77_cEB0/review" className="btn btn-lg btn-primary">
      Değerlendirebilirsiniz
        </a>
      </div>
    </div>
  );
}

export default SliderItem;

SliderItem.propTypes = {
  imageSrc : Proptyes.string,
}
  