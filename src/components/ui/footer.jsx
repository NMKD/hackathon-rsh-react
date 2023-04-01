const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <h3>2019 - {currentYear} ©</h3>
    </footer>
  );
};

export default Footer;
