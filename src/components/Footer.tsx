const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background py-8">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nishant Kumar. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with passion and precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
