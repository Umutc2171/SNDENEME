import "./Contant.css"

const Contact = () => {
  return (
    <section className="contact">
      <div className="contact-top">
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.5575195362094!2d28.855342012324442!3d41.013057071230385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa5670f5002cd%3A0xdcbfefaaa8ed92b5!2zU04gQsSwTEfEsFNBWUFSIHZlIEfDnFZFTkzEsEsgU8SwU1RFTUxFUsSw!5e0!3m2!1str!2str!4v1706635479878!5m2!1str!2str"
            width="100%"
            height="500"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-bottom">
          <div className="container">
            <div className="contact-elements">
            
              <div className="contact-info">
                <div className="contact-info-item">
                  <div className="contact-info-texts">
                    <strong>MAĞAZAMIZ</strong>
                    <p className="contact-street">
                      Soğanlı, Sevinç Sk. KÖŞEM APT NO: 5 D, 34183
                      Bahçelievler/İstanbul
                    </p>
                    <a href="tel:539-672-13-72">📞: 0539 672 13 72</a>
                    <a href="tel:212-703-13-93">☎️: 0212 703 13 93</a>
                    <a href="mailto:snbilisim@outlook.com">
                    ✉️: SnBilisim@outlook.com
                    </a>
                  </div>
                </div>
                <div className="contact-info-item">
                  <div className="contact-info-texts">
                    <strong>ÇALIŞMA SAATLERİMİZ</strong>
                    <p className="contact-date">
                      Hafta İçi - Hafta Sonu : 09.00 / 23.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
