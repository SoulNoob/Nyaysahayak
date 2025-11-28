import React, { useState } from 'react';
import { Search, Book, FileText } from 'lucide-react';
import { OFFICIAL_LEGAL_DATA } from '../data/legalData';

const KnowledgeBrowser = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = OFFICIAL_LEGAL_DATA.filter(entry =>
        entry.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.section.toLowerCase().includes(searchTerm.toLowerCase()) ||
        entry.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-slate-100 mb-2">Official Legal Gazette</h2>
                <p className="text-slate-400">Browse the Constitution, BNS, IT Act, and more.</p>
            </div>

            <div className="relative max-w-2xl mx-auto mb-10">
                <Search className="absolute left-4 top-3.5 text-slate-500" size={20} />
                <input
                    type="text"
                    placeholder="Search by Act, Section, or Keyword..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl py-3 pl-12 pr-4 text-slate-200 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 transition-all"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredData.map((entry) => (
                    <div key={entry.id} className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-indigo-500/30 transition-all group">
                        <div className="flex items-start justify-between mb-3">
                            <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded uppercase tracking-wider">
                                {entry.section}
                            </span>
                            <Book size={16} className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
                        </div>

                        <h3 className="text-lg font-bold text-slate-200 mb-2 line-clamp-2">{entry.title}</h3>
                        <p className="text-xs text-slate-500 mb-4 font-mono">{entry.source}</p>

                        <div className="bg-slate-900/50 rounded-lg p-3 mb-4 border border-slate-800">
                            <p className="text-sm text-slate-300 line-clamp-4 italic">"{entry.text}"</p>
                        </div>

                        <div className="flex flex-wrap gap-2 mt-auto">
                            {entry.keywords.slice(0, 3).map((k, i) => (
                                <span key={i} className="text-[10px] text-slate-400 bg-slate-700/50 px-2 py-1 rounded-full">
                                    #{k}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {filteredData.length === 0 && (
                <div className="text-center py-20">
                    <FileText size={48} className="mx-auto text-slate-700 mb-4" />
                    <p className="text-slate-500">No records found matching your query.</p>
                </div>
            )}
        </div>
    );
};

export default KnowledgeBrowser;
