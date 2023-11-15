const Footer = () => {
  return (
    <>
      <footer className="bg-slate-500 shadow mt-4 dark:bg-gray-800">
        <div className="w-full mx-auto max-w-screen-xl p-4">
          <div className="md:flex md:items-center md:justify-between">
            <span className="text-sm text-white sm:text-center dark:text-gray-400 block mb-2">
              © 2023{" "}
              <a
                href="https://nandhayoyo.online/"
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                Nandhayoyo
              </a>
              . All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">
                  Licensing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
