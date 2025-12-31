export default function SupportUs() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-display mb-6">
            Support Us
          </h1>
          <p className="text-xl sm:text-2xl">Join Our Mission!</p>
        </div>
      </section>

      {/* Non-profit Info Section */}
      <section className="py-16 sm:py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-foreground/80 mb-12">
              Fuzhou, America is a 501c3 non-profit with a 100% volunteer-based team.
            </p>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif italic text-primary mb-6">
              Make A Donation Today
            </h2>
            <p className="text-lg text-foreground/80 mb-8">
              Make your tax-deductible contribution to Fuzhou, America now!
            </p>
            <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input type="hidden" name="hosted_button_id" value="XS9M7P7XLF95U" />
              <button
                type="submit"
                className="inline-block bg-[#ffc439] text-[#111] px-8 py-3 rounded font-semibold hover:bg-[#f0b72f] transition-colors"
              >
                Donate
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
