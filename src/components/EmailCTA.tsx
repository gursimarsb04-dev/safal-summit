export default function EmailCTA() {
  return (
    <section className="bg-navy-900 border-t border-b border-white/5 py-16 px-6">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Stay in the loop.
        </h2>
        <p className="text-white/50 mb-8">
          Join our community of Sikh professionals and be the first to know
          about Safal Summit 2026.
        </p>

        <div className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 bg-navy-700 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-white/30 outline-none focus:border-gold/40 transition-colors"
          />
          <button className="bg-gold text-navy-900 font-bold rounded-lg px-6 py-3 hover:bg-gold-light transition-colors cursor-pointer">
            Subscribe
          </button>
        </div>

        <p className="text-white/30 text-xs mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  );
}
