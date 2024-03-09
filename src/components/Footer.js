const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12">
            <div className="copy-text">
              <p>© {year} Nighthawk. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
