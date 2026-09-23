import React, { useState, useEffect } from 'react';
import { HelpCircle, Search, ChevronDown, Sparkles } from 'lucide-react';
import { api } from '../services/api';

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);
  const [categories, setCategories] = useState(['All']);
  const [selectedCat, setSelectedCat] = useState('All');
  const [search, setSearch] = useState('');
  const [activeFaq, setActiveFaq] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFaqs() {
      try {
        const res = await api.getFaqs({ category: selectedCat, search });
        if (res.success) {
          setFaqs(res.data);
          if (res.categories && res.categories.length > 0) {
            setCategories(res.categories);
          }
        }
      } catch (err) {
        console.error('Failed to load FAQs:', err);
      } finally {
        setLoading(false);
      }
    }
    loadFaqs();
  }, [selectedCat, search]);

  return (
    <div className="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center space-y-3 mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#1e143b] border border-[#e5b32f]/40 text-[#ffe58f] text-xs font-semibold tracking-wider uppercase shadow-gold-glow">
          <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
          <span>Knowledge & Help Center</span>
        </div>
        <h1 className="font-serif text-4xl sm:text-5xl font-extrabold gold-gradient-text tracking-wide">
          Frequently Asked Questions
        </h1>
        <p className="text-sm sm:text-base text-white/70">
          Everything you need to know about Diwali Dhamaka Lucky Draw, verification, and claiming.
        </p>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6">
        <Search className="w-4 h-4 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          placeholder="Search question or keyword..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-[#131533] border border-[#e5b32f]/25 text-sm text-white placeholder-white/40 focus:outline-none focus:border-[#e5b32f]"
        />
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all whitespace-nowrap ${
              selectedCat === cat
                ? 'bg-gradient-to-r from-[#ffe58f] to-[#e5b32f] text-[#0b0d1e] font-bold shadow-gold-glow'
                : 'bg-[#141634] text-white/70 hover:text-white border border-white/5'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* FAQ Accordions */}
      {faqs.length === 0 ? (
        <div className="text-center py-16 bg-[#131533] rounded-3xl border border-white/5">
          <p className="text-sm text-white/60">No questions found matching your criteria.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#141634] border border-[#e5b32f]/20 hover:border-[#e5b32f]/40 transition-all overflow-hidden"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-serif text-base font-semibold text-[#ffe58f]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#e5b32f] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-sm text-white/80 leading-relaxed border-t border-white/5 pt-3">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
