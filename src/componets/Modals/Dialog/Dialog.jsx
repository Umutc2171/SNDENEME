import "./Dialog.css";
import Proptyes from  "prop-types"

export const Dialog = ({ isDialogShow, setIsDiaglogShow }) => {

const handleCloseDialog = (event) => {
  const checked = event.target.checked

  localStorage.setItem("dialog",JSON.stringify(!checked))
}


  return (
    <div className={`modal-dialog ${isDialogShow ? "show" : ""}`}>
      <div className="modal-content">
        <button className="modal-close" onClick={() => setIsDiaglogShow(false)}>
          <i className="bi bi-x"></i>
        </button>
        <div className="modal-image">
          <img src="/img/sn.png" alt="" />
        </div>
        <div className="popup-wrapper">
          <div className="popup-content">
            <div className="popup-title">
              <h3>Bildirimler</h3>
            </div>
            <p className="popup-text">
              Yeni Ürünlerimizden Veya İndirimlerimizden Haberdar Olmak
              İstiyorsanız. Mail Adresinizi Bırakabilirsiniz.
            </p>
            <form className="popup-form">
              <input type="text" placeholder="Mail Adresinizi Yazınız" />
              <button className="btn btn-primary">GÖNDER</button>
              <label>
                <input type="checkbox" onChange={handleCloseDialog}/>
                <span>Bu Pencereyi Bir Daha Gösterme</span>
              </label>
            </form>
          </div>
        </div>
      </div>
      <div className="modal-overlay"onClick={() => setIsDiaglogShow(false)}></div>
    </div>
  );
};

export default Dialog;

Dialog.propTypes = {
    isDialogShow : Proptyes.bool,
    setIsDiaglogShow : Proptyes.func
  }