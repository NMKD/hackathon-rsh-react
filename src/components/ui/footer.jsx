const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
  <footer className="bg-gray-900 text-white">
    <div className="md:flex md:justify-between md:items-center sm:px-12 px-2 py-7 mx-auto max-w-7xl">
      2019 - {currentYear} © ООО «UI/UX developers» Все права защищены.
      Информация на сайте не является публичной офертой согласно Ст. 437 ГК РФ
    </div>
  </footer>
  );
};

export default Footer;
