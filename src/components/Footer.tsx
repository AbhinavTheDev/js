const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center space-x-2">
            <span className="font-bold">JSPlay</span>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © {currentYear} JSPlay - Made with ❤️ for everyone
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
