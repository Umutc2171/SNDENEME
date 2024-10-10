import "./Policy.css";


export const Policy = () => {
  return (
    <section className="policy">
      <div className="container">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-person-raised-hand"></i>
            <div className="policy-text">
              <strong>Ücretsiz Keşif</strong>
              <span>İsteğe Göre Ücretsiz Keşif Desteği</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-text">
              <strong>7/24 Müşteri Desteği</strong>
              <span>Online Müşteri Desteği</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-building"></i>
            <div className="policy-text">
              <strong>Fiyatlarımız Kurulum Harici Fiyattır</strong>
              <span>Kurulum Dahil Fiyatlar İçin Bize Ulaşabilirsiniz.</span>
            </div>
          </li>
     
        </ul>
      </div>
    </section>
  );
};

export default Policy;